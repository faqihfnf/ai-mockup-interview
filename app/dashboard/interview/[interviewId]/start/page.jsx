"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import AnswerSection from "./_components/AnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StartInterview({ params }) {
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

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions */}
        <div>
          <QuestionSection mockInterviewQuestions={mockInterviewQuestions} activeQuestionIndex={activeQuestionIndex} />
        </div>

        {/* Video or Audio Recording */}
        <div>
          <div>
            <AnswerSection mockInterviewQuestions={mockInterviewQuestions} activeQuestionIndex={activeQuestionIndex} params={params} interviewData={interviewData} />
          </div>

          <div className=" flex justify-center gap-5 my-2">
            <Button disabled={activeQuestionIndex === 0} onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>
              Prev Question
            </Button>
            <Link href={`/dashboard/interview/${params.interviewId}/feedback`}>
              <Button disabled={activeQuestionIndex !== mockInterviewQuestions?.length - 1}>End Interview</Button>
            </Link>
            <Button disabled={activeQuestionIndex === mockInterviewQuestions?.length - 1} onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
              Next Question
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartInterview;
