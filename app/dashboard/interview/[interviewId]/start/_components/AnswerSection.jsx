"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { chatSession } from "@/utils/GeminiAiModal";
import { MockInterview, OverallFeedback, UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Mic, StopCircle, LoaderCircle } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import { toast } from "sonner";

function AnswerSection({ mockInterviewQuestions, activeQuestionIndex, onNextQuestion, params, interviewData }) {
  const router = useRouter();
  const [userAnswer, setUserAnswer] = useState("");
  const [interviewDataUser, setInterviewDataUser] = useState();
  const [loading, setLoading] = useState(false);
  const { error, interimResult, isRecording, results, startSpeechToText, stopSpeechToText, setResults } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    // Reset results when starting new recording
    if (isRecording) {
      setResults([]);
      setUserAnswer("");
    }
  }, [isRecording]);

  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAnswer) => prevAnswer + result.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 0) {
      validateAndProcessAnswer();
    }
  }, [userAnswer]);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const validateAndProcessAnswer = () => {
    const wordCount = userAnswer.trim().split(/\s+/).length;

    if (wordCount < 10) {
      toast.error("Answer too short", {
        description: "Please provide an answer with at least 10 words",
        action: {
          label: "Close",
        },
      });
      setUserAnswer("");
      setResults([]);
      return;
    }

    UpdateUserAnswer();
  };

  const GetInterviewDetails = async () => {
    try {
      const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
      setInterviewDataUser(result[0]);
    } catch (err) {
      toast.error("Failed to fetch interview details", {
        description: "Please try again !",
      });
    }
  };

  const StartStopRecording = async () => {
    try {
      if (isRecording) {
        stopSpeechToText();
      } else {
        startSpeechToText();
      }
    } catch (err) {
      toast.error("Recording error", {
        description: "Please check your microphone permissions and try again",
      });
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);
    try {
      const feedbackPromt =
        "Question:" +
        mockInterviewQuestions[activeQuestionIndex]?.question +
        "Correct Answer:" +
        mockInterviewQuestions[activeQuestionIndex]?.answer +
        "User Answer:" +
        userAnswer +
        "Compare the User Answer with the Question and Correct Answer. Provide friendly, motivational feedback using" +
        interviewDataUser?.language +
        "language and give a rating from 1 to 5 based on how well the User Answer matches the Correct Answer. And it's okay to give a decimal number for the rating. If the User Answer is not fully accurate, offer encouragement for improvement in a supportive way." +
        "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

      const result = await chatSession.sendMessage(feedbackPromt);
      const mockJsonResp = result.response
        .text()
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      let JsonFeedbackResp;
      try {
        JsonFeedbackResp = JSON.parse(mockJsonResp);
      } catch (error) {
        throw new Error("Invalid feedback format received");
      }

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
        toast.success("Answer saved successfully", {
          description: "Thank you for your answer!",
        });
        onNextQuestion(); // Move to next question
        setUserAnswer(""); // Reset user answer
        setResults([]); // Reset results
      }
    } catch (err) {
      toast.error("Failed to process answer", {
        description: err.message || "Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 p-5">
      <div className="flex items-center h-[400px] justify-center flex-col bg-black rounded-lg">
        <Image src="/images/webcam.png" width={250} height={250} alt="webcam" className="absolute" />
        <Webcam mirrored={true} style={{ height: "100%", width: "90%", zIndex: 10 }} />
      </div>
      <div className="">
        <Button disabled={loading} className="bg-slate-300 text-xl mt-2 w-full hover:bg-slate-400" onClick={StartStopRecording}>
          {loading ? (
            <h2 className="flex gap-2 items-center justify-center text-lg text-primary">
              <LoaderCircle className="animate-spin" size={100} /> Saving Answer...
            </h2>
          ) : isRecording ? (
            <h2 className="flex text-red-600 gap-2 items-center justify-center animate-pulse">
              <StopCircle size={30} className="items-center animate-pulse" />
              Stop Recording...
            </h2>
          ) : (
            <h2 className="flex gap-2 items-center justify-center text-lg text-primary">
              <Mic className="text-lg" size={100} /> Record Answer
            </h2>
          )}
        </Button>
      </div>
    </div>
  );
}
export default AnswerSection;
