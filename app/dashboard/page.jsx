import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import { Inter } from "next/font/google";
import InterviewList from "./_components/InterviewList";

function Dashboard() {
  return (
    <div className="p-10 ">
      <div className="flex items-center justify-center mt-16 mb-4">
        <div className="flex flex-col">
          <h1 className="text-4xl text-center justify-center font-bold ">
            Wawancara
          </h1>
          <h3 className="text-slate-500 text-center justify-center text-2xl ">
            Create and start a new mockup interview with AI
          </h3>
        </div>
      </div>
      <div className="mb-4">
        <AddNewInterview />
      </div>

      {/* Previous Interview List */}
      <div>
        <InterviewList />
      </div>
    </div>
  );
}

export default Dashboard;
