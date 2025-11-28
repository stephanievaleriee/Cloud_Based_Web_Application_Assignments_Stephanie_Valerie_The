"use client";

import { useState } from "react";
import StageTask from "./stageTask";
import CodeEditor from "./codeEditor";
import { tasks } from "../data/tasks";

export default function TaskManager({ timerFinished, onPunish }: any) {
  const [stage, setStage] = useState(1);
  const [completedReq, setCompletedReq] = useState<any>({});

  const current = tasks[stage - 1];

  // TIMER RAN OUT → punish
  if (timerFinished && stage <= 4) {
    onPunish(current.punishment);
    return null;
  }

  const handleCheck = (code: string) => {
    const pass = current.validator(code);

    if (!pass) {
      alert("Incorrect. Try again!");
      return;
    }

    const update: any = {};
    current.requirements.forEach((r) => (update[r.id] = true));
    setCompletedReq(update);

    setTimeout(() => {
      if (stage === 4) {
        alert("All tasks completed!");
        window.location.reload();
      } else {
        setStage(stage + 1);
        setCompletedReq({});
      }
    }, 800);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
      <StageTask task={current} completedRequirements={completedReq} />
      <CodeEditor starter={current.starterCode} onCheck={handleCheck} />
    </div>
  );
}
