import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import QuestionCard from "./Components/QuestionCard";
import PairSpores from "./PairSpores";
import FibonacciSequence from "./FibonacciSequence";

export interface Question {
  id: number;
  title: string;
  description: string;
}

function App() {
  let question1: Question = {
    id: 1,
    title: "Pairing Spores!",
    description:
      "This program will calculate the amount of pairs of spores with matching identifiers given an array of integers representing the identifier of each spore type.",
  };
  let question2: Question = {
    id: 2,
    title: "Fibonacci Sequence",
    description:
      "This program will calculate the nth element of the Fibonacci sequence given an integer between 1 and 250",
  };

  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);

  const goBackClickHandler = () => {
    setShowQuestion1(false);
    setShowQuestion2(false);
  };

  return (
    <div className="App">
      <div className="bg-darkerblue p-2 flex justify-center text-white mt-3 mb-5">
        <h1 className="text-4xl font-bold">Bioscout Technical Challenge!</h1>
      </div>
      <section>
        {showQuestion1 === false && showQuestion2 === false && (
          <div className="flex flex-wrap justify-center gap-5">
            <QuestionCard
              question={question1}
              setShowQuestion={setShowQuestion1}
            />
            <QuestionCard
              question={question2}
              setShowQuestion={setShowQuestion2}
            />
          </div>
        )}
        {showQuestion1 && (
          <div className=" flex justify-center">
            <PairSpores goBackClickHandler={goBackClickHandler} />
          </div>
        )}
        {showQuestion2 && (
          <div className=" flex justify-center">
            <FibonacciSequence goBackClickHandler={goBackClickHandler} />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
