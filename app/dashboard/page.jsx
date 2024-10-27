import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import { Inter } from "next/font/google";
import InterviewList from "./_components/InterviewList";

function Dashboard() {
  return (
    <div className="p-10 ">
      <div className="flex items-center justify-between mt-20 mb-12">
        <AddNewInterview />
        <div className="flex flex-col mr-0 lg:mr-56">
          <h1 className="text-4xl text-center justify-center font-bold ">Dashboard</h1>
          <h3 className="text-slate-500 text-center justify-center text-2xl ">Create and start a new mockup interview with AI</h3>
        </div>
      </div>

      {/* Previous Interview List */}
      <InterviewList />
    </div>
  );
}

export default Dashboard;
