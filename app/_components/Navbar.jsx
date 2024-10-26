import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-20 justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
        <Image src={"/images/logo.png"} alt="logo" width={60} height={60} />
        <div className="flex gap-4">
          <a className="block rounded-md bg-white/30 text-black px-5 py-2.5 text-sm font-medium transition hover:bg-white/50" href="/">
            Give Feedback
          </a>
          <a className="block rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700" href="/sign-in">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
