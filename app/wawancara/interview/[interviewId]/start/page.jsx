"use client";
import { generateOverallFeedback, getInterview } from "@/app/wawancara/actions";
import React, { useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import AnswerSection from "./_components/AnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    const result = await getInterview(params.interviewId);
    const jsonMockResp = JSON.parse(result.jsonMockResp);
    setMockInterviewQuestions(jsonMockResp);
    setInterviewData(result);
  };

  const OverallFeedbackUser = async () => {
    // Overall feedback dibuat di server berdasarkan semua jawaban user yang tersimpan
    try {
      await generateOverallFeedback(interviewData?.mockId);
    } catch (error) {
      console.error("Error generating overall feedback:", error);
    }
  };

  // Fungsi untuk memajukan indeks pertanyaan
  const handleNextQuestion = () => {
    // Mengecek apakah sudah pada pertanyaan terakhir
    if (activeQuestionIndex === mockInterviewQuestions?.length - 1) {
      // Memanggil fungsi untuk menghasilkan feedback keseluruhan
      OverallFeedbackUser().then(() => {
        // Pindahkan ke halaman feedback setelah proses selesai
        router.push(`/wawancara/interview/${interviewData?.mockId}/feedback`);
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
              <Link href={"/wawancara/interview/" + interviewData?.mockId + "/feedback"}>
                <Button>End Interview</Button>
              </Link>
            )}
            <Link href={`/wawancara/interview/${params.interviewId}/feedback`}>
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
