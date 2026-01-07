export default function DebugPage() {
  return (
    <div
      style={{ padding: 50, background: "red", color: "white", fontSize: 24 }}
    >
      <h1>CRITICAL DEBUG: Middleware Skipped!</h1>
      <p>If you see this red screen, the Middleware did NOT rewrite the URL.</p>
      <p>This means the system failed to match the domain to a Port ID.</p>
    </div>
  );
}
