"use client";
import { Star, Quote, ShieldQuestion, Webcam, Mic, FileCheck } from "lucide-react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function PlusPoint() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <section className="bg-white-50 text-black">
      <div className="">
        {/* Purple gradient */}
        <div className="absolute mt-48  left-0 w-full blur-[120px] h-1/3 bg-gradient-to-tl from-violet-300 via-transparent to-pink-300 "></div>
        {/* Blue gradient */}
        <div className="absolute mt-48 right-0 w-[60%] blur-[110px] h-1/6 bg-gradient-to-tr from-cyan-200 via-sky-200 to-green-200"></div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-5xl text-indigo-700">Plus Point Features</h2>
          <p className="mt-4 text-slate-900">Fitur-fitur unggulan yang akan membuat pengalaman interviewmu semakin nyata dan menyenangkan.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20 z-10"
            data-aos="fade-down-right"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-evently gap-2 mb-5">
              <ShieldQuestion className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">AI Generating Question</h2>
            </div>
            <p className="mt-1 w-full text-sm text-slate-700">
              Pertanyaan untuk wawancara akan dihasilkan secara otomatis oleh AI sesuai dengan keahlian dan pengalaman kerja yang di input user. Pertanyaan yang relefan akan membantu user untuk lebih baik dalam menjawabnya.
            </p>
          </div>
          <div
            className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20 z-10"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-evently gap-2 mb-5">
              <FileCheck className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">AI Generating Answer</h2>
            </div>
            <p className="mt-1 w-full text-sm text-slate-700">Selain membuat pertanyaan, user juga akan mendapatkan jawaban dari AI. Jawaban ini akan membantu user untuk mengetahui kelebihan dan kekurangannya dalam menjawab pertanyaan.</p>
          </div>
          <div
            className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20 z-10"
            data-aos="fade-down-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-evently gap-2 mb-5">
              <Quote className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">AI Generating Feedback</h2>
            </div>
            <p className="mt-1 w-full text-sm text-slate-700">
              User akan mendapatkan feedback dari AI setelah menjawab pertanyaan dengan membandingkan jawaban user dengan jawaban dari AI. Feedback ini akan membantu user untuk mengetahui kelebihan dan kekurangannya dalam menjawab
              pertanyaan.
            </p>
          </div>
          <div
            className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20 z-10"
            data-aos="fade-up-right"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-evently gap-2 mb-5">
              <Star className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">AI Generating Rating</h2>
            </div>
            <p className="mt-1 w-full text-sm text-slate-700">
              User akan mendapatkan rating dari AI berdasarkan kesesuaian antara pertanyaan dan jawaban user. Rating ini dapat membantu user untuk mengetahui seberapa baik user dalam menjawab pertanyaan.
            </p>
          </div>
          <div
            className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20 z-10"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-evently gap-2 mb-5">
              <Webcam className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Open Webcam</h2>
            </div>
            <p className="mt-1 w-full text-sm text-slate-700">User dapat membuka kamera ketika melakukan wawancara. Hal ini membantu user untuk mendapatkan simulasi dan pengalaman wawancara yang nyata layaknya wawancara langsung.</p>
          </div>
          <div
            className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20 z-10"
            data-aos="fade-up-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex items-center justify-evently gap-2 mb-5">
              <Mic className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Use Microphone</h2>
            </div>
            <p className="mt-1 w-full text-sm text-slate-700">
              User menjawab pertanyaan dengan menggunakan mikrofon pada device-nya. Kemudian jawaban tersebut dirubah menjadi text untuk diproses oleh AI guna mendapatkan feedback dan rating.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlusPoint;
