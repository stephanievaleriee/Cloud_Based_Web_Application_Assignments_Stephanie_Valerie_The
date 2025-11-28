"use client";

export default function OverlayPanel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overlay-panel fade-in"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(6px)",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        padding: "20px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
