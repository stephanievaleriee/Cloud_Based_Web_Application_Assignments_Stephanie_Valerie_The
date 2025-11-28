"use client";

export default function CourtroomPunishment({ type, onReset }: any) {
  const messages: any = {
    disability: "You broke the Disability Act!",
    bankruptcy: "You are bankrupt due to login failure!",
    tort: "You broke Tort Law! Your system was hacked!",
  };

  return (
    <div
      style={{
        backgroundImage: "url('/courtroom.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        padding: "40px 20px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
      className="fade-in"
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "420px",
          marginTop: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
        }}
      >
        <h1 className="text-3xl font-bold mb-4">{messages[type]}</h1>

        <button
          onClick={onReset}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Back to Start
        </button>
      </div>
    </div>
  );
}
