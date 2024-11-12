"use client";
import { db } from "@/utils/db";
import { OverallFeedback, UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown, PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import StarRating from "@/app/wawancara/_components/StarRating";
import Link from "next/link";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [overallFeedbackList, setOverallFeedbackList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, []);

  useEffect(() => {
    GetOverallFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, params.interviewId)).orderBy(UserAnswer.id);
    setFeedbackList(result);
  };
  const GetOverallFeedback = async () => {
    const result = await db.select().from(OverallFeedback).where(eq(OverallFeedback.mockIdRef, params.interviewId)).orderBy(OverallFeedback.id);

    setOverallFeedbackList(result);
  };

  const averageRating = (feedbackList) => {
    let sum = 0;
    for (let i = 0; i < feedbackList.length; i++) {
      sum += parseFloat(feedbackList[i].rating);
    }
    return sum / feedbackList.length;
  };

  return (
    <div className="p-5">
      <h2 className="text-5xl font-bold text-green-600 text-center mt-20">Congratulations!</h2>
      <h2 className="text-2xl font-semibold text-center">Here is your interview feedback from AI</h2>
      <h2 className=" text-indigo-700 py-4 text-3xl font-semibold flex items-center gap-2">
        Overall Rating :
        <StarRating rating={averageRating(feedbackList)} />
      </h2>

      <h2 className="text-3xl font-semibold text-indigo-700 mb-2">Overall Feedback :</h2>
      {overallFeedbackList &&
        overallFeedbackList.map((item, index) => (
          <h2 className=" border rounded-lg bg-blue-100 mb-5 p-2 text-blue-900 font-semibold text-lg" key={index}>
            {item.overallFeedback}
          </h2>
        ))}

      <Separator className="font-bold" />
      <h2 className="mt-2 text-slate-900 text-xl font-semibold">Find below interview question with correct answer, Your answer and detail feedback for better improvement</h2>
      {feedbackList &&
        feedbackList.map((item, index) => (
          <Collapsible key={index} className="my-5">
            <div className="flex justify-between p-2 bg-secondary rounded-lg my-2 w-full text-lg">
              <CollapsibleTrigger className="w-full text-left ">{item.question}</CollapsibleTrigger>
              <CollapsibleTrigger>
                <ChevronsUpDown size={20} />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-indigo-500 p-2 border rounded-lg flex items-center gap-2">
                  Rating : <StarRating rating={Number(item.rating)} />
                </h2>
                <h2 className="p-2 border rounded-lg bg-purple-50 text-blue-900">
                  <strong>Your Answer :</strong> <br />
                  {item.userAnswer}
                </h2>
                <h2 className="p-2 border rounded-lg bg-green-50 text-green-900">
                  <strong>Correct Answer:</strong> <br />
                  {item.correctAnswer}
                </h2>
                <h2 className="p-2 border rounded-lg bg-amber-50 text-amber-900">
                  <strong>Feedback :</strong> <br />
                  {item.feedback}
                </h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}

      <div className="flex justify-start gap-2">
        <Button
          className="mt-5 border-purple-600 bg-purple-100 text-purple-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-gradient-to-bl hover:from-purple-200 hover:via-violet-200 hover:to-indigo-200 hover:text-purple-800"
          onClick={() => router.push("https://tally.so/r/w8pYvx")}
        >
          Feedback
        </Button>
        <Button className="mt-5 bg-indigo-600 hover:bg-indigo-700" onClick={() => router.push("/wawancara")}>
          Wawancara
        </Button>
      </div>
    </div>
  );
}

// # TODO : Buat Overall Feedback generate dari ai, sesuai dengan hasil seluruh jawaban

export default Feedback;
