import { Lightbulb } from "lucide-react";
import React from "react";

function QuestionSection({ mockInterviewQuestions, activeQuestionIndex }) {
  return (
    mockInterviewQuestions && (
      <div className="mt-5 p-5 border rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestions &&
            mockInterviewQuestions.map((question, index) => (
              <h2 className={`p-2 bg-secondary rounded-full text-sm md:text-md text-center cursor-pointer font-semibold ${activeQuestionIndex == index && "bg-indigo-600 text-white"}`}>Question #{index + 1}</h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg">{mockInterviewQuestions[activeQuestionIndex]?.question}</h2>
        <div className="border rounded-lg p-5 bg-blue-100">
          <h3 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note : </strong>
          </h3>
        </div>
        <h2>Click on record answer when you want to answer the question. And At the end of the interview, we will give you a feedback along with correct answer for each of the question and your answer to campare it.</h2>
      </div>
    )
  );
}

export default QuestionSection;
