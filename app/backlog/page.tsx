import { getSessionLogs } from "@/services/sessionLogService";
import BacklogTable from "./BacklogTable";

export default async function BacklogPage() {
  const logs = await getSessionLogs("test-session-1");

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-semibold mb-6">Session Backlog</h1>
      <BacklogTable logs={logs} />
    </div>
  );
}
