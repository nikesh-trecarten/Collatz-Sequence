import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(""); // store user's input
  const [sequence, setSequence] = useState([]); // store sequence steps

  function collatz(number) {
    let seq = [number]; // start sequence with input number
    console.log("Initial seq:", seq);

    while (number !== 1) {
      if (number % 2 === 0) {
        number = number / 2;
      } else {
        number = number * 3 + 1;
      }
      seq.push(number); // add each step to the sequence array
    }

    console.log("Final sequence:", seq);
    return seq; // return the full sequence
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form submission
    if (input && input !== 1) {
      const num = parseInt(input);
      console.log("Input value:", num); // check input value
      const result = collatz(num); // get sequence
      setSequence(result); // update sequence as state variable
    } else {
      console.log("Please enter a valid number other than 1.");
    }
  };

  return (
    <>
      <h1 className="title">The Collatz Sequence</h1>
      <p>
        The Collatz Sequence is a famous unsolved problem in the study of
        mathematics. <br />
        Take any number. If that number is even, divide it by 2. If it is odd,
        multiply it by 3 and add 1. <br />
        Repeat this sequence over and over again. It will always eventually
        result in 1.
      </p>
      <div className="form">
        <label htmlFor="input">
          Enter any number to simulate the Collatz Sequence!
        </label>
        <br />
        <input
          className="input"
          type="number"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)} // update input state
        />
        <br />
        <button onClick={handleSubmit}>Run Collatz Sequence</button>
      </div>
      <div>
        {sequence.length > 0 && (
          <div>
            <h2>Sequence Steps:</h2>
            <ul className="sequence-steps">
              {sequence.map((step, index) => (
                <li key={index}>
                  {step === 1
                    ? "1."
                    : step % 2 === 0
                    ? step + " / 2 = "
                    : step + " * 3 + 1 ="}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
