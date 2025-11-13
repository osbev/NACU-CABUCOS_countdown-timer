import React from "react";

function pad(n){ return String(n).padStart(2,'0'); }

export default function TimerDisplay({ timeLeft }) {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer-display">
      <h2>{pad(hours)}:{pad(minutes)}:{pad(seconds)}</h2>
    </div>
  );
}
