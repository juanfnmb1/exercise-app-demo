import { useState } from "react";
export default function RepetitionExercise({ exercise, setMenuScreen }) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p style={{ fontSize: "2em" }}>{exercise.name}</p>
      <p style={{ fontSize: "4em" }}>{count}</p>
      <button
        style={{ fontSize: "1em" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        style={{ fontSize: "1em" }}
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <br></br>
      <button style={{ fontSize: "0.7em" }} onClick={setMenuScreen}>
        Back to Menu
      </button>
    </div>
  );
}
