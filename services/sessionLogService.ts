export async function logSessionEvent(
  sessionId: string,
  event: string,
  details?: string
) {
  await fetch("/api/session-logs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, event, details }),
  });
}

export async function getSessionLogs(sessionId: string) {
  const baseUrl =
    typeof window === "undefined"
      ? "http://localhost:3000"
      : "";

  const url = `${baseUrl}/api/session-logs?sessionId=${sessionId}`;

  const res = await fetch(url, { cache: "no-store" });

  const text = await res.text();

  if (!res.ok || text.startsWith("<")) {
    console.error("❌ API CALL FAILED");
    console.error("URL:", url);
    console.error("RAW RESPONSE:", text);
    return [];
  }

  const data = JSON.parse(text);
  return data.logs;
}
