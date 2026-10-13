import React from "react";
import { Target, UserRound } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

function About() {
  return (
    <section id="tentang" className="bg-white-50 text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-5xl text-indigo-700">Tentang {siteConfig.name}</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Misi */}
          <div className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20 z-10 lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Target className="w-8 h-8 text-pink-500" />
              <h3 className="mt-2 text-2xl font-bold text-slate-900">Misi Kami</h3>
            </div>
            <p className="mt-1 w-full text-slate-700 sm:text-lg/relaxed">
              {siteConfig.name} lahir dari satu keyakinan sederhana: setiap pencari kerja berhak berlatih sebelum menghadapi wawancara yang sesungguhnya. Banyak kandidat di Indonesia tidak pernah punya kesempatan itu. {siteConfig.name} hadir sebagai
              teman latihan berbasis AI yang menyesuaikan pertanyaan dengan pengalaman dan posisi yang kamu tuju, lalu memberi umpan balik yang jujur agar kamu datang ke wawancara dengan lebih siap.
            </p>
          </div>

          {/* Founder */}
          <div className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20 z-10">
            <div className="flex items-center gap-2 mb-5">
              <UserRound className="w-8 h-8 text-pink-500" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{siteConfig.founder}</h3>
                <p className="text-sm font-semibold text-indigo-700">Founder</p>
              </div>
            </div>
            <p className="mt-1 w-full text-sm text-slate-700">Praktisi HR dengan pengalaman lebih dari 8 tahun di industri logistik Indonesia sekaligus fullstack developer.</p>
            <a
              href={siteConfig.linkedinFounder}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition hover:text-indigo-800"
            >
              <FaLinkedin className="size-5" />
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Didirikan di Jakarta, {siteConfig.foundedYear}.
        </p>
      </div>
    </section>
  );
}

export default About;
