import React, { useState, useEffect } from "react";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = (seconds) => {
    if (!seconds || seconds <= 0) return;
    setTimeLeft(seconds);
    setIsRunning(true);
  };

  const pauseTimer = () => setIsRunning(false);
  const resumeTimer = () => setIsRunning(true);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
  };

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          // optional: browser notification or sound
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="app">
      <p>COUNTDOWN TIMER</p>
      <TimerInput onStart={startTimer} />
      <TimerDisplay timeLeft={timeLeft} />
      <div className="controls">
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
        <button onClick={resumeTimer} disabled={isRunning || timeLeft===0}>Resume</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
