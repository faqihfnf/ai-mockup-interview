"use server";
import { currentUser } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/utils/db";
import { generateJson } from "@/utils/GeminiAiModal";
import { MockInterview, OverallFeedback, UserAnswer } from "@/utils/schema";

const MAX_QUESTIONS = 20;
const MAX_TEXT_LENGTH = 5000;

/**
 * # Semua fungsi di file ini berjalan di server dan bisa dipanggil siapa saja,
 * # jadi setiap fungsi wajib mengecek login dan kepemilikan data.
 */
async function requireEmail() {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  if (!email) throw new Error("Unauthorized");
  return email;
}

async function getOwnedInterview(mockId, email) {
  const result = await db
    .select()
    .from(MockInterview)
    .where(and(eq(MockInterview.mockId, String(mockId)), eq(MockInterview.createdby, email)));
  if (!result[0]) throw new Error("Interview tidak ditemukan");
  return result[0];
}

const cleanText = (value) => String(value ?? "").trim().slice(0, MAX_TEXT_LENGTH);

export async function getInterviewList() {
  const email = await requireEmail();
  return db.select().from(MockInterview).where(eq(MockInterview.createdby, email)).orderBy(desc(MockInterview.id));
}

export async function getInterview(mockId) {
  const email = await requireEmail();
  return getOwnedInterview(mockId, email);
}

export async function getUserAnswers(mockId) {
  const email = await requireEmail();
  await getOwnedInterview(mockId, email);
  return db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, String(mockId))).orderBy(UserAnswer.id);
}

export async function getOverallFeedback(mockId) {
  const email = await requireEmail();
  await getOwnedInterview(mockId, email);
  return db.select().from(OverallFeedback).where(eq(OverallFeedback.mockIdRef, String(mockId))).orderBy(OverallFeedback.id);
}

export async function deleteInterview(mockId) {
  const email = await requireEmail();
  const interview = await getOwnedInterview(mockId, email);
  await db.delete(UserAnswer).where(eq(UserAnswer.mockIdRef, interview.mockId));
  await db.delete(OverallFeedback).where(eq(OverallFeedback.mockIdRef, interview.mockId));
  await db.delete(MockInterview).where(eq(MockInterview.mockId, interview.mockId));
}

export async function createInterview({ jobPosition, jobDesc, jobExperience, totalQuestions, language }) {
  const email = await requireEmail();
  jobPosition = cleanText(jobPosition);
  jobDesc = cleanText(jobDesc);
  jobExperience = cleanText(jobExperience);
  language = cleanText(language);
  totalQuestions = Number(totalQuestions);

  if (!jobPosition || !jobDesc || !jobExperience || !language) {
    return { error: "Silahkan lengkapi semua data" };
  }
  if (!Number.isInteger(totalQuestions) || totalQuestions < 1 || totalQuestions > MAX_QUESTIONS) {
    return { error: `Jumlah pertanyaan harus 1 - ${MAX_QUESTIONS}` };
  }

  const inputPromt =
    "Job Position : " +
    jobPosition +
    ", Job Description: " +
    jobDesc +
    ", Years of Experience: " +
    jobExperience +
    ", total question: " +
    totalQuestions +
    ",  interview language: " +
    language +
    ". Based on this information, please generate interview questions with concise answers according to the selected total questions and interview language. Ensure question difficulty is appropriate to the job position, job description, and years of experience. The higher the experience level and the seniority of the position, the more complex and in-depth the questions should be. IMPORTANT!!! Return a JSON array where every item has a question field and an answer field.";

  let questions;
  try {
    questions = await generateJson(inputPromt);
  } catch (error) {
    console.error("Error generating interview:", error);
    return { error: "AI gagal membuat pertanyaan, silahkan coba lagi" };
  }
  if (!Array.isArray(questions) || !questions.every((q) => q?.question && q?.answer)) {
    return { error: "Format pertanyaan dari AI tidak valid, silahkan coba lagi" };
  }

  const resp = await db
    .insert(MockInterview)
    .values({
      mockId: uuidv4(),
      jsonMockResp: JSON.stringify(questions),
      jobPosition: jobPosition,
      jobDesc: jobDesc,
      jobExperience: jobExperience,
      language: language,
      createdby: email,
      createdAt: moment().format("YYYY-MM-DD"),
    })
    .returning({ mockId: MockInterview.mockId });

  return { mockId: resp[0]?.mockId };
}

export async function submitAnswer({ mockId, questionIndex, userAnswer }) {
  const email = await requireEmail();
  const interview = await getOwnedInterview(mockId, email);
  // Pertanyaan & jawaban benar diambil dari database, bukan dari client
  const question = JSON.parse(interview.jsonMockResp)?.[Number(questionIndex)];
  userAnswer = cleanText(userAnswer);

  if (!question) return { error: "Pertanyaan tidak ditemukan" };
  if (!userAnswer) return { error: "Jawaban kosong" };

  const feedbackPromt =
    "Question:" +
    question.question +
    "Correct Answer:" +
    question.answer +
    "User Answer:" +
    userAnswer +
    "Compare the User Answer with the Question and Correct Answer. Provide friendly, motivational feedback using " +
    interview.language +
    " language and give a rating from 1 to 5 based on how well the User Answer matches the Correct Answer. And it's okay to give a decimal number for the rating. If the User Answer is not fully accurate, offer encouragement for improvement in a supportive way." +
    "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

  let feedback;
  try {
    feedback = await generateJson(feedbackPromt);
  } catch (error) {
    console.error("Error generating feedback:", error);
    return { error: "Invalid feedback format received" };
  }

  await db.insert(UserAnswer).values({
    mockIdRef: interview.mockId,
    question: question.question,
    correctAnswer: question.answer,
    userAnswer: userAnswer,
    feedback: feedback?.feedback,
    rating: feedback?.rating,
    userEmail: email,
    createdAt: moment().format("YYYY-MM-DD"),
  });

  return { ok: true };
}

export async function generateOverallFeedback(mockId) {
  const email = await requireEmail();
  const interview = await getOwnedInterview(mockId, email);
  const answers = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, interview.mockId)).orderBy(UserAnswer.id);

  // Ringkasan jawaban user diambil dari database (sebelumnya mengandalkan riwayat chat di browser)
  const answerSummary = answers
    .map((a, i) => `${i + 1}. Question: ${a.question} | User Answer: ${a.userAnswer} | Rating: ${a.rating}`)
    .join("\n");

  const overallFeedbackPrompt =
    "Job Position: " +
    interview.jobPosition +
    ", Years of Experience: " +
    interview.jobExperience +
    ". User responses to the interview questions:\n" +
    answerSummary +
    "\nBased on user responses to the interview questions, provide a summary of your overall feedback in " +
    interview.language +
    " Provide friendly, motivational feedback in just 3 to 7 lines to improve it in JSON format with overallFeedback field.";

  try {
    const result = await generateJson(overallFeedbackPrompt);
    if (result?.overallFeedback) {
      await db.insert(OverallFeedback).values({
        mockIdRef: interview.mockId,
        overallFeedback: result.overallFeedback,
        userEmail: email,
        createdAt: moment().format("YYYY-MM-DD"),
      });
    }
  } catch (error) {
    console.error("Error generating overall feedback:", error);
  }
}
