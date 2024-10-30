"use client";
import { Badge } from "@/components/ui/badge";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Header() {
  const path = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle visibility of the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-full flex items-center justify-between shadow-md bg-secondary p-2 px-8">
      <Image
        className="cursor-pointer"
        onClick={() => router.push("/")}
        src={"/images/logo.png"}
        alt="logo"
        width={60}
        height={60}
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-semibold text-lg">
        <li
          onClick={() => router.push("/dashboard")}
          className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
            path == "/dashboard" && "text-primary font-bold underline"
          }`}>
          Wawancara
        </li>
        <div className="flex gap-1">
          <li
            onClick={() => router.push("/cv-review")}
            className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
              path == "/cv-review" && "text-primary font-bold underline"
            }`}>
            CV Review
          </li>
          <Badge
            className={
              "text-xs bg-yellow-400 text-black hover:bg-yellow-400 mb-2 rounded-lg px-0.5"
            }>
            Soon
          </Badge>
        </div>
        <div className="flex gap-1">
          <li
            onClick={() => router.push("/cv-maker")}
            className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
              path == "/cv-maker" && "text-primary font-bold underline"
            }`}>
            CV Maker
          </li>
          <Badge
            className={
              "text-xs bg-yellow-400 text-black hover:bg-yellow-400 mb-2 rounded-lg px-0.5"
            }>
            Soon
          </Badge>
        </div>
        <li className="hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline">
          Give Feedback
        </li>
      </ul>

      <div className="hidden md:flex">
        <UserButton />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu onClick={toggleMobileMenu} className="cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[74px] right-0 w-full bg-secondary flex flex-col items-end shadow-md md:hidden px-2 ">
          <ul className="flex flex-col gap-4 font-semibold text-lg my-2">
            <li
              onClick={() => {
                router.push("/dashboard");
                toggleMobileMenu();
              }}
              className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
                path == "/dashboard" && "text-primary font-bold underline"
              }`}>
              Wawancara
            </li>
            <div className="flex gap-1">
              <li
                onClick={() => {
                  router.push("/cv-review");
                  toggleMobileMenu();
                }}
                className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
                  path == "/cv-review" && "text-primary font-bold underline"
                }`}>
                CV Review
              </li>
              <Badge className="text-xs bg-yellow-400 text-black mb-2 rounded-lg px-0.5">
                Soon
              </Badge>
            </div>
            <div className="flex gap-1">
              <li
                onClick={() => {
                  router.push("/cv-maker");
                  toggleMobileMenu();
                }}
                className={`hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline ${
                  path == "/cv-maker" && "text-primary font-bold underline"
                }`}>
                CV Maker
              </li>
              <Badge className="text-xs bg-yellow-400 text-black mb-2 rounded-lg px-0.5">
                Soon
              </Badge>
            </div>
            <li
              className="hover:text-primary transition-transform hover:cursor-pointer hover:font-bold hover:underline"
              onClick={toggleMobileMenu}>
              Give Feedback
            </li>
            <li className="flex gap-2" onClick={toggleMobileMenu}>
              Account
              <UserButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
