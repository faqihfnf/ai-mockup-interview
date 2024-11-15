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
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };

  return (
    <div className=" flex justify-center flex-col items-center">
      <h2 className="text-4xl font-bold mt-24">Segera Mulai Interview Anda</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          {webCamEnabled ? (
            <>
              <div className="flex flex-col items-center">
                <div className="h-80 w-full flex items-center justify-center flex-col bg-secondary rounded-lg p-2 mt-7 mb-3">
                  <Webcam
                    mirrored={true}
                    onUserMedia={() => setWebCamEnabled(true)}
                    onUserMediaError={() => setWebCamEnabled(false)}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <Button
                  variant="secondary"
                  className="text-xl hover:text-primary w-full"
                  onClick={() => setWebCamEnabled(false)}>
                  Disable WebCam & Microphone
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <WebcamIcon className="h-80 w-full my-7 mb-3 p-12 bg-secondary rounded-lg border" />
              <Button
                variant="secondary"
                className="text-xl hover:text-primary w-full"
                onClick={() => setWebCamEnabled(true)}>
                Enable WebCam & Microphone
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col my-4  ">
          {/* <div className="flex flex-col p-3 rounded-lg border gap-5 ">
            <h2 className="text-lg font-semibold">
              Job Position : {interviewData?.jobPosition}
            </h2>
            <h2 className="text-lg font-semibold">
              Job Description : {interviewData?.jobDesc}
            </h2>
            <h2 className="text-lg font-semibold">
              Years of Experience : {interviewData?.jobExperience}
            </h2>
          </div> */}
          <div className="p-3 mt-3 h-80 border rounded-lg border-yellow-400 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-800 text-xl">
              <Lightbulb />
              <strong>Information</strong>{" "}
            </h2>
            <h2 className="mt-2 text-yellow-500">
              Aktifkan webcam dan microphone anda dan mulailah interview anda.
              Silahkan jawab pertanyaan satu per satu sesuai dengan pertanyaan
              yang diberikan. <br />
              Diakhir interview anda akan mendapatkan feedback dari AI. Setelah
              selesai interview tunggulah beberapa saat sampai AI selesai
              memproses feedback untuk jawaban anda. Setelah selesai anda akan
              otomatis diarahkan ke halaman feedback.
              <br /> <br />
              <strong className="text-yellow-600">
                Note : <br />
                Kami tidak merekam interview anda. Anda dapat menonaktifkan
                webcam kapanpun anda mau.
              </strong>
            </h2>
          </div>
          <Link
            className=" flex justify-center"
            href={"/wawancara/interview/" + params.interviewId + "/start"}>
            <Button className="mt-3 text-lg w-full"> Mulai Interview</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interview;
