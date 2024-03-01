import "./App.css";
import { useCallback, useState } from "react";
import React from "react";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";

const menuScreen = "menu";
const exerciseScreen = "exercise";
const durationExercise = "duration";
const repetitionExercise = "repetition";
let exerciseList = [
  { type: durationExercise, name: "Running" },
  { type: durationExercise, name: "Bicycling" },
  { type: durationExercise, name: "Jump-Roping" },
  { type: repetitionExercise, name: "Push Ups" },
  { type: repetitionExercise, name: "Jumping Jacks" },
  { type: repetitionExercise, name: "Sit Ups" },
  { type: repetitionExercise, name: "Lunges" },
];

function App() {
  let [currentScreen, setCurrentScreen] = useState(menuScreen);
  let [currentExercise, setCurrentExercise] = useState([]);
  let screenComponent = undefined;
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(exerciseScreen);
  });

  if (currentScreen === menuScreen) {
    screenComponent = (
      <div>
        <p style={{ fontSize: "2em" }}>Exercise menu</p>
        <ul>
          {exerciseList.map((exercise) => {
            return (
              <li key={exercise.name}>
                <button
                  style={{ fontSize: "0.5em" }}
                  onClick={() => buttonClick(exercise)}
                >
                  {exercise.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (currentScreen === exerciseScreen) {
    switch (currentExercise.type) {
      case durationExercise:
        screenComponent = (
          <DurationExercise
            setMenuScreen={() => setCurrentScreen(menuScreen)}
            exercise={currentExercise}
          />
        );
        break;
      case repetitionExercise:
        screenComponent = (
          <RepetitionExercise
            setMenuScreen={() => setCurrentScreen(menuScreen)}
            exercise={currentExercise}
          />
        );
        break;

      default:
        screenComponent = undefined;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{screenComponent}</p>
      </header>
    </div>
  );
}

export default App;
