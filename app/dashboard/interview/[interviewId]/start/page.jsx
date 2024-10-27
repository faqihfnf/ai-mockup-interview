"use client";
import { db } from "@/utils/db";
import { MockInterview, OverallFeedback } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import AnswerSection from "./_components/AnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { chatSession } from "@/utils/GeminiAiModal";
import moment from "moment";

function StartInterview({ params }) {
  const router = useRouter();
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /**
   * # Use to  get interview details by mockId/interviewid
   */
  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    setMockInterviewQuestions(jsonMockResp);
    setInterviewData(result[0]);
  };

  const OverallFeedbackUser = async () => {
    const overallFeedbackPrompt =
      "Based on user responses to the interview questions, provide a summary of your overall feedback in " +
      interviewData?.language +
      " Provide friendly, motivational feedback in just 3 to 7 lines to improve it in JSON format with overallFeedback field.";

    // Mendapatkan respon dari chatSession
    const res = await chatSession.sendMessage(overallFeedbackPrompt);

    // Parsing JSON hasil respon
    const overallJsonResp = res.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let JsonOverallFeedbackResp;
    try {
      JsonOverallFeedbackResp = JSON.parse(overallJsonResp);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return; // Keluar dari fungsi jika terjadi error parsing
    }

    // Menyimpan feedback ke database
    if (JsonOverallFeedbackResp) {
      await db.insert(OverallFeedback).values({
        mockIdRef: interviewData?.mockId,
        overallFeedback: JsonOverallFeedbackResp?.feedback, // Pastikan field JSON sesuai
        userEmail: interviewData?.createdby,
        createdAt: moment().format("YYYY-MM-DD"),
      });
    }
  };

  // Fungsi untuk memajukan indeks pertanyaan
  const handleNextQuestion = () => {
    // Mengecek apakah sudah pada pertanyaan terakhir
    if (activeQuestionIndex === mockInterviewQuestions?.length - 1) {
      // Memanggil fungsi untuk menghasilkan feedback keseluruhan
      OverallFeedbackUser().then(() => {
        // Pindahkan ke halaman feedback setelah proses selesai
        router.push(`/dashboard/interview/${interviewData?.mockId}/feedback`);
      });
    } else {
      // Jika bukan pertanyaan terakhir, lanjutkan ke pertanyaan berikutnya
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions */}
        <div className="mt-20">
          <QuestionSection mockInterviewQuestions={mockInterviewQuestions} activeQuestionIndex={activeQuestionIndex} />
        </div>

        {/* Video or Audio Recording */}
        <div>
          <div className="mt-20">
            <AnswerSection mockInterviewQuestions={mockInterviewQuestions} activeQuestionIndex={activeQuestionIndex} onNextQuestion={handleNextQuestion} params={params} interviewData={interviewData} />
          </div>

          {/* <div className=" flex justify-center gap-5 my-2">
            <Button disabled={activeQuestionIndex === 0} onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>
              Prev Question
            </Button>
            {activeQuestionIndex == mockInterviewQuestions?.length - 1 && (
              <Link href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}>
                <Button>End Interview</Button>
              </Link>
            )}
            <Link href={`/dashboard/interview/${params.interviewId}/feedback`}>
              <Button disabled={activeQuestionIndex !== mockInterviewQuestions?.length - 1}>End Interview</Button>
            </Link>
            <Button disabled={activeQuestionIndex === mockInterviewQuestions?.length - 1} onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
              Next Question
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default StartInterview;
