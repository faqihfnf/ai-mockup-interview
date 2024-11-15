import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionSection({ mockInterviewQuestions, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Batalkan ucapan sebelumnya sebelum memulai yang baru
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
              <h2
                key={index}
                className={`p-2 border border-primary text-primary rounded-full text-xs md:text-md text-center cursor-pointer font-semibold ${
                  activeQuestionIndex == index && "bg-primary text-white"
                }`}>
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-4 text-lg">
          {mockInterviewQuestions[activeQuestionIndex]?.question}
        </h2>
        <h2 className="text-lg flex gap-2 items-center my-4">
          <Volume2
            className="cursor-pointer hover:text-primary transition-transform hover:scale-110"
            size={30}
            onClick={() =>
              textToSpeech(
                mockInterviewQuestions[activeQuestionIndex]?.question
              )
            }
          />
          Click icon to speech question
        </h2>
        <div className="border rounded-lg p-5 mt-5 bg-blue-100">
          <h3 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note : </strong>
          </h3>
          <h2 className="text-sm text-primary my-3">
            Click "Record Answer" saat anda ingin mulai menjawab pertanyaan. At
            the end of the interview, we will give you feedback with the correct
            answer for each question and your answer to compare it and give you
            a score for your answer. Make sure your answer the question with a
            clear voice!
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionSection;
