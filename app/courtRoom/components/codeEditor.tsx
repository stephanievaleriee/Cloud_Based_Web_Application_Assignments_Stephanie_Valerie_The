"use client";

import { useState } from "react";

export default function CodeEditor({ starter, onCheck }: any) {
  const [code, setCode] = useState(starter);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Fix the Code</h2>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "240px",
          background: "#171717",
          color: "white",
          fontFamily: "monospace",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "12px",
          border: "1px solid #444",
        }}
      />

      <button
        onClick={() => onCheck(code)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Run Check
      </button>
    </div>
  );
}
