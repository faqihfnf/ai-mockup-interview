"use client";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";

function AnswerSection() {
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

  return (
    <div>
      <div className="flex items-center justify-center flex-col bg-black rounded-lg p-5 mt-5">
        <Image src="/images/webcam.png" width={200} height={200} alt="webcam" className="absolute" />
        <Webcam mirrored={true} style={{ height: "100%", width: "90%", zIndex: 10 }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <Button className="text-xl mt-2 w-full" onClick={() => (isRecording ? stopSpeechToText() : startSpeechToText())}>
          {isRecording ? (
            <h2 className="flex text-yellow-400 gap-2 items-center justify-center animate-pulse">
              <Mic size={30} className=" items-center animate-pulse" /> Recording...
            </h2>
          ) : (
            "Record Answer"
          )}
        </Button>
        <Button className="text-xl mt-2 w-full bg-emerald-800 hover:bg-emerald-700" onClick={() => console.log(userAnswer)}>
          Show Answer
        </Button>
      </div>
    </div>
  );
}

export default AnswerSection;
