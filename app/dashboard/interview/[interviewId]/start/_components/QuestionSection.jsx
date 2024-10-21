import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionSection({ mockInterviewQuestions, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser doesn't support text to speech!");
    }
  };
  return (
    mockInterviewQuestions && (
      <div className="mt-5 p-5 border rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestions &&
            mockInterviewQuestions.map((question, index) => (
              <h2 className={`p-2 border border-primary text-primary rounded-full text-sm md:text-md text-center cursor-pointer font-semibold ${activeQuestionIndex == index && "bg-primary text-white"}`}>Question #{index + 1}</h2>
            ))}
        </div>
        <h2 className="my-10 text-2xl">{mockInterviewQuestions[activeQuestionIndex]?.question}</h2>
        <h2 className="text-xl flex gap-2 items-center">
          <Volume2 className="cursor-pointer hover:text-primary transition-transform hover:scale-110" size={30} onClick={() => textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.question)} />
          Click icon to speech question
        </h2>
        <div className="border rounded-lg p-5 mt-10 bg-blue-100">
          <h3 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note : </strong>
          </h3>
          <h2 className="text-lg text-primary my-3">
            Click on record answer when you want to answer a question. At the end of the interview, we will give you feedback with the correct answer for each question and your answer to compare it and give you a score for your answer. Make
            sure you answer the question with a clear voice!
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionSection;
