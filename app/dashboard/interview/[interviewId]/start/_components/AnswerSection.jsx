"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { chatSession } from "@/utils/GeminiAiModal";
import { MockInterview, UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Mic, SquareArrowOutUpRight, StopCircle } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import { toast } from "sonner";

function AnswerSection({ mockInterviewQuestions, activeQuestionIndex, params, interviewData }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [interviewDataUser, setInterviewDataUser] = useState();
  const [loading, setLoading] = useState(false);
  const { error, interimResult, isRecording, results, startSpeechToText, stopSpeechToText } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAnswer) => prevAnswer + result.transcript);
    });
  }, [results]);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /**
   * # Use to  get interview details by mockId/interviewid
   */
  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
    setInterviewDataUser(result[0]);
  };

  const SaveUserAnswer = async () => {
    if (isRecording) {
      setLoading(true);
      stopSpeechToText();
      if (userAnswer?.length < 1) {
        setLoading(false);
        toast("Recording has been failed", {
          description: "Your answer is too short. Please try again!",
          action: {
            label: "Close",
          },
        });
        return;
      }

      const feedbackPromt =
        "Question:" +
        mockInterviewQuestions[activeQuestionIndex]?.question +
        ",User Answer:" +
        userAnswer +
        ",Depending on the question and user answer to provide interview questions" +
        " please provide us with rating for the answer and feedback using the" +
        interviewDataUser?.language +
        "language on the areas that need improvement if any " +
        "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

      console.log(interviewDataUser?.language);
      const result = await chatSession.sendMessage(feedbackPromt);

      const mockJsonResp = result.response.text().replace("```json", "").replace("```", "");
      console.log(mockJsonResp);
      const JsonFeedbackResp = JSON.parse(mockJsonResp);

      const response = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestions[activeQuestionIndex]?.question,
        correctAnswer: mockInterviewQuestions[activeQuestionIndex]?.answer,
        userAnswer: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: interviewData?.createdby,
        createdAt: moment().format("YYYY-MM-DD"),
      });

      if (response) {
        toast("Answer saved successfully", {
          description: "Thank you for your feedback!",
          action: {
            label: "Close",
          },
        });
      }
      setUserAnswer("");
      setLoading(false);
    } else {
      startSpeechToText();
    }
  };

  return (
    <div>
      <div className="flex items-center h-[550px] justify-center flex-col bg-black rounded-lg  mt-5">
        <Image src="/images/webcam.png" width={250} height={250} alt="webcam" className="absolute" />
        <Webcam mirrored={true} style={{ height: "100%", width: "90%", zIndex: 10 }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <Button disabled={loading} className="bg-slate-300 text-xl mt-2 w-full hover:bg-slate-400" onClick={SaveUserAnswer}>
          {isRecording ? (
            <h2 className="flex text-red-600  gap-2 items-center justify-center animate-pulse">
              <StopCircle size={30} className=" items-center animate-pulse" /> Stop Recording...
            </h2>
          ) : (
            <h2 className="flex gap-2 items-center justify-center text-lg text-primary ">
              <Mic className="text-lg" size={100} /> Record Answer
            </h2>
          )}
        </Button>
        <Button className="text-lg mt-2 w-ful" onClick={() => console.log(userAnswer)}>
          <SquareArrowOutUpRight />
          Show Answer
        </Button>
      </div>
    </div>
  );
}

export default AnswerSection;
