import StopWatch from "./StopWatch";
export default function DurationExercise({ exercise, setMenuScreen }) {
  let { name } = exercise;
  return (
    <div>
      <p style={{ fontSize: "2em" }}>{name}</p>
      <p>
        <StopWatch />
      </p>
      <button style={{ fontSize: "0.7em" }} onClick={setMenuScreen}>
        Back to Menu
      </button>
    </div>
  );
}
