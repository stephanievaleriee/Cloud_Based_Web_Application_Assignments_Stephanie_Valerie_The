"use client";

export default function StageTask({ task, completedRequirements }: any) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">{task.title}</h2>

      {task.requirements.map((req: any) => {
        const complete = completedRequirements[req.id];

        return (
          <div key={req.id} className="flex justify-between items-center mb-2">
            <span>
              {complete ? "✔️" : "❌"} {req.label}
            </span>

            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => alert(req.hint)}
            >
              Hint
            </span>
          </div>
        );
      })}
    </div>
  );
}
