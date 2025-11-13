import React, { useState } from "react";

export default function TimerInput({ onStart }) {
  const [h, setH] = useState("");
  const [m, setM] = useState("");
  const [s, setS] = useState("");

  const sanitize = (v) => Math.max(0, parseInt(v || 0));

  const handleStart = () => {
    const total =
      sanitize(h) * 3600 +
      sanitize(m) * 60 +
      sanitize(s);
    onStart(total);
  };

  return (
    <div className="timer-input">
      <input type="number" placeholder="hh" min="0" value={h} onChange={(e)=>setH(e.target.value)} />
      <input type="number" placeholder="mm" min="0" value={m} onChange={(e)=>setM(e.target.value)} />
      <input type="number" placeholder="ss" min="0" value={s} onChange={(e)=>setS(e.target.value)} />
      <button onClick={handleStart}>Start</button>
    </div>
  );
}


