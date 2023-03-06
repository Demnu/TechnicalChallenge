import React, { FunctionComponent, PropsWithChildren } from "react";
import { Question } from "../App";
interface QuestionCardProps {
  question: Question;
  setShowQuestion: (showQuestion: boolean) => void;
}
const QuestionCard: FunctionComponent<PropsWithChildren<QuestionCardProps>> = ({
  question,
  setShowQuestion,
}) => {
  return (
    <div
      className=" max-w-xs rounded-sm w-64 p-2 bg-white h-72 hover:bg-amber-400 cursor-pointer border border-gray-200 transition hover:scale-105 duration-300 "
      onClick={() => setShowQuestion(true)}
    >
      <h2 className=" text-xl font-extrabold text-darkerblue mb-4">
        {question.title}
      </h2>
      <p className=" text-md text-darkblue">{question.description}</p>
    </div>
  );
};

export default QuestionCard;
