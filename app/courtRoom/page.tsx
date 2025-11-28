"use client";

import { useState, useEffect } from "react";
import OverlayPanel from "./components/overlayPanel";
import Timer from "./components/timer";
import TaskManager from "./components/taskManager";
import DistractionPopup from "./components/distractionPopup";
import CourtroomPunishment from "./components/courtroomPunishment";

export default function CourtRoomPage() {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [popup, setPopup] = useState("");
  const [punishment, setPunishment] = useState("");

  // RANDOM DISTRACTION POPUPS
  useEffect(() => {
    if (!timerStarted) return;

    const messages = [
      "Boss: Are you done with sprint 1?",
      "Family: Can you pick up the kids?",
      "Agile: Fix the title color to red!",
      "System: Meeting in 10 minutes!"
    ];

    const interval = setInterval(() => {
      setPopup(messages[Math.floor(Math.random() * messages.length)]);
    }, Math.random() * 10000 + 20000);

    return () => clearInterval(interval);
  }, [timerStarted]);

  // WHEN PUNISHMENT TRIGGERS – TAKE OVER ENTIRE SCREEN
  if (punishment) {
    return (
      <CourtroomPunishment
        type={punishment}
        onReset={() => window.location.reload()}
      />
    );
  }

  return (
    <>
      {/* FULL PAGE BACKGROUND */}
      <div
        style={{
          backgroundImage: "url('/workdesk.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <OverlayPanel>
            <Timer
              onStart={() => setTimerStarted(true)}
              onFinish={() => setTimerFinished(true)}
            />

            {timerStarted && (
              <div style={{ marginTop: "20px" }}>
                <TaskManager
                  timerFinished={timerFinished}
                  onPunish={(type: string) => setPunishment(type)}
                />
              </div>
            )}
          </OverlayPanel>
        </div>
      </div>

      {popup && (
        <DistractionPopup
          message={popup}
          onClose={() => setPopup("")}
        />
      )}
    </>
  );
}
