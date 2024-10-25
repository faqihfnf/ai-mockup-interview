"use client";
import { Badge } from "@/components/ui/badge";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <div className="flex items-center justify-between shadow-md bg-secondary p-2">
      <Image src={"/images/logo.png"} alt="logo" width={60} height={60} />
      <ul className="hidden md:flex gap-8 font-semibold text-lg">
        <li
          onClick={() => router.push("/dashboard")}
          className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
            path == "/dashboard" && "text-primary font-bold"
          }`}>
          Dashboard
        </li>
        <div className="flex gap-1">
          <li
            className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
              path == "/dashboard/question" && "text-primary font-bold"
            }`}>
            CV Review
          </li>
          <Badge
            className={
              "text-xs bg-yellow-400 text-black hover:bg-yellow-400 mb-2 rounded-lg"
            }>
            Soon
          </Badge>
        </div>
        <div className="flex gap-1">
          <li
            className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
              path == "/dashboard/question" && "text-primary font-bold"
            }`}>
            CV Maker
          </li>
          <Badge
            className={
              "text-xs bg-yellow-400 text-black hover:bg-yellow-400 mb-2 rounded-lg"
            }>
            Soon
          </Badge>
        </div>
        <li
          className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
            path == "/dashboard/how" && "text-primary font-bold"
          }`}>
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
