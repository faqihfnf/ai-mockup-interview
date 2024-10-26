import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="relative text-black bg-white-50 ">
      {/* Main background gradients */}
      <div className="">
        {/* Purple gradient */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-purple-500/40 via-transparent to-transparent"></div>
        {/* Blue gradient */}
        <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-bl from-blue-400/50 via-transparent to-transparent"></div>
      </div>{" "}
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-l from-pink-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
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
