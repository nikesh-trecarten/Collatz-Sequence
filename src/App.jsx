import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [sequence, setSequence] = useState([]);

  function collatz(number) {
    let seq = [number];

    while (number !== 1) {
      if (number % 2 === 0) {
        number = number / 2;
      } else {
        number = number * 3 + 1;
      }
      seq.push(number);
    }

    return seq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input && input > 1) {
      const num = parseInt(input);
      const result = collatz(num);
      setSequence(result);
    } else {
      alert("Please enter a valid integer higher than 1.");
    }
  };

  const orderedSequence = sequence.toSorted((a, b) => {
    return b - a;
  });

  const highestNumber = orderedSequence[0];

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
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
      </div>
      <button onClick={handleSubmit}>Run Collatz Sequence</button>
      <div>
        {sequence.length > 0 && (
          <>
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
            <div className="breakdown">
              <p>
                This Collatz Sequence went from {sequence[0]} to 1 in{" "}
                {sequence.length} steps.
              </p>
              <p>
                The highest number reached in this sequence was {highestNumber}.
              </p>
              <p>Pretty cool, eh? Feel free to try again!</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
