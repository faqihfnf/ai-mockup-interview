"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="flex items-center justify-between shadow-md bg-secondary p-2">
      <Image src={"/images/logo.png"} alt="logo" width={60} height={60} />
      <ul className="hidden md:flex gap-8 font-semibold">
        <li className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${path == "/dashboard" && "text-primary font-bold"}`}>Dashboard</li>
        <li className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${path == "/dashboard/question" && "text-primary font-bold"}`}>Question</li>
        <li className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${path == "/dashboard/upgrade" && "text-primary font-bold"}`}>Upgrade</li>
        <li className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${path == "/dashboard/how" && "text-primary font-bold"}`}>How it works?</li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
