import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-20 justify-center sm:justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
        <div className="flex gap-2 items-center">
          <a href="/">
            <Image src={"/images/logo.png"} alt="logo" width={60} height={60} />
          </a>
          <h1 className="bg-gradient-to-l from-sky-600 via-violet-600 to-pink-600 bg-clip-text py-10 text-3xl font-extrabold text-transparent sm:text-4xl">
            Wawancarai.
          </h1>
        </div>
        <div className="flex gap-4">
          <a
            className="hidden md:flex rounded-md border border-purple-600 bg-purple-100 text-purple-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-gradient-to-bl hover:from-purple-200 hover:via-violet-200  hover:to-indigo-200 hover:text-purple-800"
            href="/">
            Give Feedback
          </a>
          <a
            className="hidden sm:flex items-center text-center rounded-md bg-indigo-600 p-1 px-4 py-3 lg:px-5 lg:py-3 text-xs md:text-sm font-semibold text-white transition hover:bg-gradient-to-bl hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 hover:text-purple-600"
            href="/dashboard">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
