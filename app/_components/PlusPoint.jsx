import { Brain } from "lucide-react";
import React from "react";

function PlusPoint() {
  return (
    <section className="bg-white-50 text-black">
      <div className="">
        {/* Purple gradient */}
        <div className="absolute mt-48  left-0 w-full blur-[120px] h-1/3 bg-gradient-to-tl from-violet-300 via-transparent to-pink-300 "></div>
        {/* Blue gradient */}
        <div className="absolute mt-48 right-0 w-[60%] blur-[110px] h-1/6 bg-gradient-to-tr from-cyan-200 via-sky-200 to-green-200"></div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Plus Point Features</h2>
          <p className="mt-4 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20">
            <div className="flex items-center justify-between mb-5">
              <Brain className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Digital Campaigns</h2>
            </div>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
          <div className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20">
            <div className="flex items-center justify-between mb-5">
              <Brain className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Digital Campaigns</h2>
            </div>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
          <div className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20">
            <div className="flex items-center justify-between mb-5">
              <Brain className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Digital Campaigns</h2>
            </div>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
          <div className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20">
            <div className="flex items-center justify-between mb-5">
              <Brain className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Digital Campaigns</h2>
            </div>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
          <div className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20">
            <div className="flex items-center justify-between mb-5">
              <Brain className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Digital Campaigns</h2>
            </div>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
          <div className="block bg-purple-200/10 rounded-xl border shadow-indigo-500/20 py-12 px-6 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500/20">
            <div className="flex items-center justify-between mb-5">
              <Brain className="w-8 h-8 text-pink-500" />
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Digital Campaigns</h2>
            </div>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlusPoint;
