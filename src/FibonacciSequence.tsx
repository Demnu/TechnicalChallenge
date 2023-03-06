import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import fibo from "./CodingQuestions/question2";
interface FibonacciSequenceProps {
  goBackClickHandler: () => void;
}
const FibonacciSequence: FunctionComponent<
  PropsWithChildren<FibonacciSequenceProps>
> = ({ goBackClickHandler }) => {
  let fiboTests: number[] = [8, 15, 31];
  const [showTestCases, setShowTestCases] = useState(true);
  const [input, setInput] = useState(2);
  const [answeredInput, setAnsweredInput] = useState(0);
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState(-1);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (input > 1 && input < 250) {
      setAnswer(fibo(input));
      setAnsweredInput(input);
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col  gap-4 text-darkblue ">
      <div className="max-w-lg rounded-sm  p-4 bg-white border border-gray-200 mb-2">
        <div className="grid grid-cols-6  ">
          <div className="flex col-span-5 justify-start items-center">
            <h2 className=" text-2xl font-bold  col-span-2">
              Fibonacci Sequence Solver
            </h2>
          </div>
          <div className=" flex justify-end">
            <button
              onClick={goBackClickHandler}
              className=" transition duration-300 bg-amber-200 hover:bg-amber-400 text-lg p-2 rounded-lg w-12"
            >
              {"X"}
            </button>
          </div>
        </div>
        <p className=" text-slate-600">
          This program will calculate the nth element of the Fibonacci sequence
          given an integer between 1 and 250
        </p>
        {/* this section handles the input */}
        <form onSubmit={submitHandler} className=" flex flex-col gap-1">
          <label>Input:</label>
          {error && (
            <div className=" text-red-600">
              *Value must be between 1 and 250
            </div>
          )}
          <input
            className={` outline-none bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg w-full p-2.5  ${
              error
                ? " active:border-red-700 border-red-700 focus:border-red-600 bg-red-100  "
                : "active:border-blue-600 focus:border-blue-600"
            }`}
            value={input}
            type="number"
            onChange={(e) => {
              setError(false);
              setInput(parseInt(e.target.value));
            }}
          />
          <button
            type="submit"
            className=" text-white bg-blue-500 hover:bg-blue-700 transition duration-300 py-2 px-8 rounded-md w-32"
          >
            Calculate
          </button>
        </form>
        {/* This section handles the display of the test cases*/}
        <div className="my-2">
          <button
            onClick={() => setShowTestCases(!showTestCases)}
            className="text-blue-500 cursor-pointer hover:underline "
          >
            {!showTestCases && "Show test cases"}
            {showTestCases && "Hide test cases"}
          </button>
        </div>
        {showTestCases && (
          <div className="flex gap-2 flex-col">
            {fiboTests.map((value) => (
              <div key={Math.random()}>
                <div>{value}</div>
                <button
                  onClick={() => {
                    setError(false);
                    setInput(value);
                    setAnsweredInput(value);
                    setAnswer(fibo(value));
                  }}
                  className=" text-blue-500 hover:underline"
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* this section handles the display of the results of the calculation */}
      {answer != -1 && (
        <div className="max-w-lg rounded-sm  p-4 bg-white border border-gray-200 mb-2  break-words ">
          <h3 className=" text-lg  font-bold">Result</h3>
          <div>Input: {answeredInput}</div>
          <div>
            fibo(y): <span className=" font-bold">{answer}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default FibonacciSequence;
