import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="relative text-black bg-white-50 ">
      {/* Main background gradients */}
      <div className="">
        {/* Purple gradient */}
        <div className="absolute top-0 left-0 w-full blur-[110px] h-1/3 bg-gradient-to-br from-violet-500 via-transparent to-pink-400 "></div>
        {/* Blue gradient */}
        <div className="absolute top-0 right-0 w-[60%] blur-[110px] h-1/6 bg-gradient-to-bl from-cyan-500 via-sky-300 to-green-500"></div>
      </div>{" "}
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center mt-4">
        <div className="mx-auto  text-center">
          <h1 className="bg-gradient-to-l from-sky-500 via-purple-600 to-pink-600 bg-clip-text py-10 text-3xl font-extrabold text-transparent sm:text-7xl">
            Interview Smart, Career Start<span className="sm:block"> Persiapkan Dirimu Bersama AI </span>
          </h1>
          <p className="mx-auto mt-2 max-w-5xl font-medium text-slate-600 sm:text-lg/relaxed ">
            Platform wawancara interaktif dengan AI yang siap membantu kamu mempersiapkan diri menghadapi wawancara kerja. <br /> Dengan fitur yang lengkap seperti open kamera dan microphone membuat pengalaman interviewmu semakin nyata dan
            menyenangkan. AI akan memberi pertanyaan, umpan balik, dan penilaian untuk mengukur kemampuanmu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="block w-full rounded bg-indigo-600 px-12 py-3 text-md font-medium text-white hover:bg-indigo-700 cursor-pointer  sm:w-auto" href="/sign-in">
              Get Started
            </a>
            <a className="block w-full rounded border border-purple-600 px-12 py-3 text-md font-medium text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring active:bg-purple-200 sm:w-auto" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
