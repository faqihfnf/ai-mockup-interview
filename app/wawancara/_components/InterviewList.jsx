"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    try {
      setIsLoading(true);
      const result = await db
        .select()
        .from(MockInterview)
        .where(
          eq(MockInterview.createdby, user?.primaryEmailAddress?.emailAddress)
        )
        .orderBy(desc(MockInterview.id));

      setInterviewList(result);
    } catch (error) {
      console.error("Error fetching interviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (mockId) => {
    // Update local state to remove the deleted interview
    setInterviewList((prevList) =>
      prevList.filter((interview) => interview.mockId !== mockId)
    );

    // Refresh the list from server
    GetInterviewList();
  };

  return (
    <div>
      {/* <h2 className="font-medium text-2xl">Previous Mock Interview</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3 ">
        {isLoading ? (
          // Loading skeleton
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="h-[150px] w-full bg-gray-200 animate-pulse rounded-lg"
            />
          ))
        ) : interviewList.length > 0 ? (
          // Interview cards
          interviewList.map((interview) => (
            <InterviewItemCard
              key={interview.mockId}
              interview={interview}
              onDelete={handleDelete}
            />
          ))
        ) : (
          // No interviews message
          <div className="col-span-full text-center text-gray-500">
            <div class="grid  place-content-center bg-white px-4 dark:bg-gray-900">
              <div class="text-center">
                <Image
                  className="mx-auto"
                  src="/images/empty.png"
                  alt="no-interview"
                  width={350}
                  height={350}
                />
                <h1 class="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  Kamu Belum Memulai Wawancara
                </h1>
                <p class="mt-1 text-gray-500 dark:text-gray-400">
                  Segera mulai wawancaramu dengan AI dan rasakan pengalaman yang
                  nyata!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InterviewList;
