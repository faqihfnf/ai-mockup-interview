"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /**
   * # Use to  get interview details by mockId/interviewid
   */
  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };

  return (
    <div className="my-5 flex justify-center flex-col items-center">
      <h2 className="text-4xl font-bold">Let's start your interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          {webCamEnabled ? (
            <>
              <div className="flex flex-col items-center">
                <div className="h-96 w-full flex items-center justify-center flex-col bg-secondary rounded-lg p-2 mt-7 mb-5">
                  <Webcam mirrored={true} onUserMedia={() => setWebCamEnabled(true)} onUserMediaError={() => setWebCamEnabled(false)} style={{ width: "100%", height: "100%" }} />
                </div>
                <Button variant="secondary" className="text-xl hover:text-primary" onClick={() => setWebCamEnabled(false)}>
                  Disable WebCam and Microphone
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <WebcamIcon className="h-96 w-full my-7 mb-5 p-12 bg-secondary rounded-lg border" />
              <Button variant="secondary" className="text-xl hover:text-primary" onClick={() => setWebCamEnabled(true)}>
                Enable WebCam and Microphone
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col my-7 ">
          <div className="flex flex-col p-3 rounded-lg border gap-5 ">
            <h2 className="text-lg font-semibold">Job Position : {interviewData?.jobPosition}</h2>
            <h2 className="text-lg font-semibold">Job Description : {interviewData?.jobDesc}</h2>
            <h2 className="text-lg font-semibold">Years of Experience : {interviewData?.jobExperience}</h2>
          </div>
          <div className="p-3 mt-3 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-600 text-xl">
              <Lightbulb />
              <strong>Information</strong>{" "}
            </h2>
            <h2 className="mt-2 text-yellow-500">
              Enable video webcam and microphone to start your AI Generated Mock Interview. It has questions which you can answer and at the last you will get the report of your interview on the basis of your answers.
              <br /> <br />
              <strong>Note: We never record your interview. Web cam access you can disable at any time of you want</strong>
            </h2>
          </div>
          <Link className=" flex justify-center" href={"/dashboard/interview/" + params.interviewId + "/start"}>
            <Button className="mt-3 text-lg w-full"> Start Mock Interview</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interview;
