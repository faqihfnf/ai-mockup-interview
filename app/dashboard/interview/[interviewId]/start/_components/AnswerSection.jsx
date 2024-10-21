"use client";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/GeminiAiModal";
import { Mic, SquareArrowOutUpRight, StopCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import { toast } from "sonner";

function AnswerSection({ mockInterviewQuestions, activeQuestionIndex }) {
  const [userAnswer, setUserAnswer] = useState("");
  const { error, interimResult, isRecording, results, startSpeechToText, stopSpeechToText } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAnswer) => prevAnswer + result.transcript);
    });
  }, [results]);

  const SaveUserAnswer = async () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer?.length < 10) {
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
        " please provide us with rating for the answer and feedback using the indonesia language on the areas that need improvement if any " +
        "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

      const result = await chatSession.sendMessage(feedbackPromt);

      const mockJsonResp = result.response.text().replace("```json", "").replace("```", "");
      console.log(mockJsonResp);
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
        <Button className="bg-slate-300 text-xl mt-2 w-full hover:bg-slate-400" onClick={SaveUserAnswer}>
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
