"use client";

export default function DistractionPopup({ message, onClose }: any) {
  return (
    <div
      className="fade-in"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "white",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        zIndex: 999,
        width: "260px",
      }}
    >
      <p className="font-semibold mb-2">{message}</p>

      <div className="flex justify-between mt-3">
        <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={onClose}>Reply</button>
        <button className="px-3 py-1 bg-gray-400 text-white rounded" onClick={onClose}>Ignore</button>
      </div>
    </div>
  );
}
