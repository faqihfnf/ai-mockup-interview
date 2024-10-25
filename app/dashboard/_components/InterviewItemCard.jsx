"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function InterviewItemCard({ interview }) {
  const [feedbackList, setFeedbackList] = useState([]);

  const router = useRouter();

  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push("/dashboard/interview/" + interview.mockId + "/feedback");
  };

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, interview?.mockId)).orderBy(UserAnswer.id);

    setFeedbackList(result);
  };

  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-primary mb-2">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-600 mb-1">{interview?.jobExperience} Years of Experience</h2>
      <h2 className="text-xs text-gray-400">Created Date : {interview.createdAt}</h2>
      <div className="flex justify-between mt-5 gap-5">
        {feedbackList?.length > 0 ? (
          <Button size="sm" variant="outline" className="w-full" onClick={onFeedbackPress}>
            Feedback Interview
          </Button>
        ) : (
          <Button size="sm" className="w-full" onClick={onStart}>
            Start Interview
          </Button>
        )}
      </div>
    </div>
  );
}

export default InterviewItemCard;
