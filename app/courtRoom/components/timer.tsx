"use client";
import { useState, useEffect } from "react";

export default function Timer({ onStart, onFinish }: any) {
  const [minutes, setMinutes] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (secondsLeft <= 0) {
      setRunning(false);
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [running, secondsLeft]);

  const startTimer = () => {
    setSecondsLeft(minutes * 60);
    setRunning(true);
    onStart();
  };

  const stopTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setSecondsLeft(0);
  };

  const display = `${String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:${String(
    secondsLeft % 60
  ).padStart(2, "0")}`;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 className="font-bold mb-2">Countdown Timer</h2>

      <div className="flex gap-2 items-center mb-2">
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="border rounded px-3 py-2"
          min={1}
        />
        <span>minutes</span>
      </div>

      <div className="text-3xl font-semibold mb-3">{display}</div>

      <div className="flex gap-2">
        <button onClick={startTimer} className="px-4 py-2 bg-blue-500 text-white rounded">Start</button>
        <button onClick={stopTimer} className="px-4 py-2 bg-gray-500 text-white rounded">Stop</button>
        <button onClick={resetTimer} className="px-4 py-2 bg-red-500 text-white rounded">Reset</button>
      </div>
    </div>
  );
}
