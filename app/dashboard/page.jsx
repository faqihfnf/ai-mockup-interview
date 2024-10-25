import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import { Inter } from "next/font/google";
import InterviewList from "./_components/InterviewList";

function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h3 className="text-slate-500">
        Create and start a new mockup interview with AI
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-5 ">
        <AddNewInterview />
      </div>

      {/* Previous Interview List */}
      <InterviewList />
    </div>
  );
}

export default Dashboard;
