import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { linkedinUrl, siteConfig } from "@/lib/site-config";

function Footer() {
  return (
    <footer className="bg-cyan-950">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start bg-gradient-to-l from-sky-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"> {siteConfig.name}.</div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">{siteConfig.tagline}</p>
            {/* Social links Start */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a href={siteConfig.github} rel="noreferrer" target="_blank" className="text-white transition hover:text-indigo-600">
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="size-6" />
                </a>
              </li>

              <li>
                <a href={linkedinUrl} rel="noreferrer" target="_blank" className="text-white transition hover:text-indigo-600">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="size-6" />
                </a>
              </li>
            </ul>
            {/* Social links End */}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-white/70 transition hover:text-indigo-600" href="/wawancara">
                    Mock Interview
                  </a>
                </li>

                <li>
                  <a className="text-white/70 transition hover:text-indigo-600 relative" href="/cv-review">
                    <span>CV Review</span>
                    <span className="text-yellow-400 text-xs font-bold absolute top-[-6px] ml-1">soon</span>
                  </a>
                </li>

                <li>
                  <a className="text-white/70 transition hover:text-indigo-600 relative" href="/cv-maker">
                    <span>CV Maker</span>
                    <span className="text-yellow-400 text-xs font-bold absolute top-[-6px] ml-1">soon</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-white/70 transition hover:text-indigo-600" href="/#faq">
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    href={siteConfig.whatsapp} // Menggunakan wa.me untuk tautan langsung
                    target="_blank" // Membuka di tab baru
                    rel="noopener noreferrer" // Untuk keamanan
                    className="text-white/70 transition hover:text-indigo-600"
                  >
                    {" "}
                    Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href={siteConfig.whatsapp} // Menggunakan wa.me untuk tautan langsung
                    target="_blank" // Membuka di tab baru
                    rel="noopener noreferrer" // Untuk keamanan
                    className="group flex gap-1.5 sm:justify-start justify-center items-center"
                  >
                    <span className="text-white/70 transition group-hover:text-indigo-600">Live Chat</span>
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                    </span>
                  </a>
                </li>

                <li>
                  <a className="text-white/70 transition hover:text-indigo-600" href="/privacy">
                    Kebijakan Privasi
                  </a>
                </li>

                <li>
                  <a className="text-white/70 transition hover:text-indigo-600" href="/terms">
                    Syarat &amp; Ketentuan
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Hubungi Kami</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href={`mailto:${siteConfig.email}`}>
                    <MdOutlineEmail className="size-5 shrink-0 text-white" />
                    <span className="flex-1 text-white/70">{siteConfig.email}</span>
                  </a>
                </li>

                <li>
                  <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    <FaPhone className="size-4 shrink-0 text-white" />
                    <span className="flex-1 text-white/70">{siteConfig.phone}</span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoLocation className="size-5 shrink-0 text-white" />

                  <address className="-mt-0.5 flex-1 not-italic text-white/70">{siteConfig.address}</address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-300">
              Didirikan oleh <span className="bg-gradient-to-l from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-md font-extrabold text-transparent sm:text-md">{siteConfig.founder}</span>
            </p>
            <p className="mt-4 text-sm text-gray-300 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
