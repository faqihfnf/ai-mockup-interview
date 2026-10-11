"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { submitAnswer } from "@/app/wawancara/actions";
import { Mic, StopCircle, LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import { toast } from "sonner";

function AnswerSection({
  mockInterviewQuestions,
  activeQuestionIndex,
  onNextQuestion,
  params,
  interviewData,
}) {
  const router = useRouter();
  const { toast } = useToast();
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
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

  const validateAndProcessAnswer = () => {
    const wordCount = userAnswer.trim().split(/\s+/).length;

    if (wordCount < 10) {
      // toast.error("Answer too short", {
      //   description: "Please provide an answer with at least 10 words",
      //   action: {
      //     label: "Close",
      //   },
      // });
      toast({
        variant: "destructive",
        title: "Jawaban Terlalu Singkat!",
        description: "Silahkan berikan jawaban dengan minimal 10 kata",
      });

      setUserAnswer("");
      setResults([]);
      return;
    }

    UpdateUserAnswer();
  };

  const StartStopRecording = async () => {
    try {
      if (isRecording) {
        stopSpeechToText();
      } else {
        startSpeechToText();
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Recording Error!",
        description: "Silahkan periksa izin mikrofon Anda dan coba lagi",
      });
      // toast.error("Recording error", {
      //   description: "Please check your microphone permissions and try again",
      // });
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);
    try {
      // Penilaian jawaban oleh AI & simpan ke database dilakukan di server
      const response = await submitAnswer({
        mockId: interviewData?.mockId,
        questionIndex: activeQuestionIndex,
        userAnswer: userAnswer,
      });
      if (response?.error) {
        throw new Error(response.error);
      }

      if (response) {
        // toast.success("Answer saved successfully", {
        //   description: "Thank you for your answer!",
        // });
        toast({
          variant: "success",
          title: "Jawaban Berhasil Disimpan!",
          description: "Terima kasih atas jawabanmu!",
        });

        onNextQuestion(); // Move to next question
        setUserAnswer(""); // Reset user answer
        setResults([]); // Reset results
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Gagal Menyimpan Jawaban!",
        description: err.message || "Please try again",
      });
      // toast.error("Failed to process answer", {
      //   description: err.message || "Please try again",
      // });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 p-5">
      <div className="flex items-center h-[400px] justify-center flex-col bg-black rounded-lg">
        <Image
          src="/images/webcam.png"
          width={250}
          height={250}
          alt="webcam"
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{ height: "100%", width: "90%", zIndex: 10 }}
        />
      </div>
      <div className="">
        <Button
          disabled={loading}
          className="bg-slate-300 text-xl mt-2 w-full hover:bg-slate-400"
          onClick={StartStopRecording}>
          {loading ? (
            <h2 className="flex gap-2 items-center justify-center text-lg text-primary">
              <LoaderCircle className="animate-spin" size={100} /> Saving
              Answer...
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
