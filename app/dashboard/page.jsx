import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import { Inter } from "next/font/google";
import InterviewList from "./_components/InterviewList";

function Dashboard() {
  return (
    <div className="p-10 ">
      <h1 className="text-4xl text-center justify-center font-bold mt-14">Dashboard</h1>
      <h3 className="text-slate-500 text-center justify-center text-2xl mt-2">Create and start a new mockup interview with AI</h3>
      <div className=" flex text-center justify-start my-5 ">
        <AddNewInterview />
      </div>

      {/* Previous Interview List */}
      <InterviewList />
    </div>
  );
}

export default Dashboard;
