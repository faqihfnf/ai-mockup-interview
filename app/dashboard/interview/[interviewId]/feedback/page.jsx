"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, params.interviewId)).orderBy(UserAnswer.id);

    setFeedbackList(result);
  };
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-500">Congratulations!</h2>
      <h2 className="text-2xl font-semibold">Here is your interview feedback</h2>
      <h2 className="text-primary py-4">Your Overall rating</h2>
      <h2 className="">Find below interview question with correct answer, Your answer and feedback for improvement</h2>
      {feedbackList &&
        feedbackList.map((item, index) => (
          <Collapsible key={index} className="my-5">
            <CollapsibleTrigger className=" flex justify-between p-2 bg-secondary rounded-lg my-2 text-left gap-10 w-full text-lg">
              {item.question}
              <ChevronsUpDown className="h-5- w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-indigo-500 p-2 border rounded-lg">Rating: {item.rating}</h2>
                <h2 className="p-2 border rounded-lg bg-blue-50 text-blue-900">
                  <strong>Your Answer:</strong> <br />
                  {item.userAnswer}
                </h2>
                <h2 className="p-2 border rounded-lg bg-green-50 text-green-900">
                  <strong>Correct Answer:</strong> <br />
                  {item.correctAnswer}
                </h2>
                <h2 className="p-2 border rounded-lg bg-amber-50 text-amber-900">
                  <strong>Feedback:</strong> <br />
                  {item.feedback}
                </h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      <Button className="mt-5" onClick={() => router.push("/dashboard")}>
        Go to Dashboard
      </Button>
    </div>
  );
}

// # TODO : Buat Overall Feedback generate dari ai, sesuai dengan hasil seluruh jawaban

export default Feedback;
