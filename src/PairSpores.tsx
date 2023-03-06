import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import pairSpores from "./CodingQuestions/question1";
interface PairSporesProps {
  goBackClickHandler: () => void;
}
const PairSpores: FunctionComponent<PropsWithChildren<PairSporesProps>> = ({
  goBackClickHandler,
}) => {
  let sporeIdTestArrays: number[][] = [
    [1, 1, 3, 1, 2, 1, 3, 3, 3, 3],
    [10, 20, 20, 10, 10, 30, 50, 10, 20],
    [4, 3, 2, 1],
  ];
  const [showTestCases, setShowTestCases] = useState(false);
  const [answer, setAnswer] = useState(-1);
  const [arrayInput, setArrayInput] = useState("");
  const [answeredInput, setAnsweredInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const submitHandler = (e: any) => {
    e.preventDefault();

    try {
      if (arrayInput.length <= 0) {
        setErrorMessage("Input is empty");
        throw Error;
      } else if (
        arrayInput.charAt(arrayInput.length - 1) != "]" ||
        arrayInput.charAt(0) != "["
      ) {
        setErrorMessage("The format of the input must be [1,2,3,4,5,6]");
        throw Error;
      }
      let sporeIdArrayString = arrayInput.substring(1, arrayInput.length - 1);
      let sporeIdArray: number[];
      sporeIdArray = sporeIdArrayString
        .split(",")
        .map((number) => parseInt(number, 10));
      sporeIdArray.forEach((number) => {
        if (isNaN(number)) {
          setError(true);
        }
        setAnsweredInput(arrayInput);
        setAnswer(pairSpores(sporeIdArray));
      });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col  gap-4 text-darkblue ">
      <div className="max-w-lg rounded-sm  p-4 bg-white border border-gray-200 mb-2">
        <div className="grid grid-cols-6  ">
          <div className="flex col-span-3 justify-start items-center">
            <h2 className=" text-2xl font-bold  col-span-2">Pairing Spores!</h2>
          </div>
          <div></div>
          <div></div>
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
          This program will calculate the amount of pairs of spores with
          matching identifiers given an array of integers representing the
          identifier of each spore type.
        </p>
        {/* this section handles the input */}
        <form onSubmit={submitHandler} className=" flex flex-col gap-1">
          <label>Input:</label>
          {error && <div className=" text-red-600">*{errorMessage}</div>}
          <input
            className={` outline-none bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg w-full p-2.5  ${
              error
                ? " active:border-red-700 border-red-700 focus:border-red-600 bg-red-100  "
                : "active:border-blue-600 focus:border-blue-600"
            }`}
            type="text"
            value={arrayInput.length == 0 ? "" : arrayInput}
            onChange={(e) => {
              setError(false);
              setErrorMessage("");
              setArrayInput(e.target.value);
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
            {sporeIdTestArrays.map((array) => (
              <div key={Math.random()}>
                <div>{JSON.stringify(array)}</div>
                <button
                  onClick={() => {
                    setError(false);
                    setErrorMessage("");
                    setArrayInput(JSON.stringify(array));
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
            Number of pairs: <span className=" font-bold">{answer}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PairSpores;
