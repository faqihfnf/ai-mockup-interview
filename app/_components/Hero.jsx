"use client";
import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Pertanyaan", "Feedback", "Rating"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });

  return (
    <section className="relative text-black bg-white-50 ">
      {/* Main background gradients */}
      <div className="">
        {/* Purple gradient */}
        <div className="absolute -z-50 top-0 left-0 w-full blur-[110px] h-1/3 bg-gradient-to-br from-violet-500 via-transparent to-pink-400 "></div>
        {/* Blue gradient */}
        <div className="absolute -z-50 top-0 right-0 w-[60%] blur-[110px] h-1/6 bg-gradient-to-bl from-cyan-500 via-sky-300 to-green-500"></div>
      </div>
      <div className="max-w-screen-xl px-4 py-32 mx-auto mt-4 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="py-10 text-3xl font-extrabold text-transparent bg-gradient-to-l from-sky-600 via-purple-600 to-pink-600 bg-clip-text sm:text-7xl">
            Interview Smart, Career Start
            <span className="sm:block"> Persiapkan Dirimu Bersama AI </span>
          </h1>
          <h2 className="mb-8 text-4xl font-bold text-indigo-700 sm:text-5xl">
            AI akan memberikan kamu <span className="py-10 font-extrabold text-transparent bg-gradient-to-bl from-sky-600 via-purple-600 to-pink-600 bg-clip-text">{typeEffect}</span>
            <span className="text-purple-700 animate-blink">|</span>
          </h2>
          <p className="max-w-5xl mx-auto mt-2 font-medium text-slate-600 sm:text-lg/relaxed ">
            Platform wawancara interaktif dengan AI yang akan membantu kamu mempersiapkan diri menghadapi wawancara kerja. <br /> Dengan fitur yang lengkap seperti open kamera dan microphone membuat pengalaman interviewmu semakin nyata.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="flex items-center justify-center w-full gap-4 px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md cursor-pointer hover:bg-gradient-to-bl hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 hover:text-purple-600 sm:w-auto"
              href="/wawancara"
            >
              Get Started
              <SquareArrowOutUpRight />
            </a>
            <a
              className="flex items-center justify-center w-full px-12 py-3 text-lg font-semibold text-purple-600 border border-purple-600 rounded-md bg-purple-50 hover:bg-gradient-to-bl hover:from-purple-100 hover:via-violet-100 hover:to-indigo-100 focus:outline-none focus:ring active:bg-purple-200 sm:w-auto"
              href="https://wa.me/628996423135" // Menggunakan wa.me untuk tautan langsung
              target="_blank" // Membuka di tab baru
              rel="noopener noreferrer" // Untuk keamanan
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
