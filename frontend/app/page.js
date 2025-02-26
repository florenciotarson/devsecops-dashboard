"use client";  // ✅ This makes sure the component is client-only
import { useEffect, useState } from "react";

export default function Home() {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    setClientData(`Page rendered at: ${new Date().toLocaleTimeString()}`);
  }, []);

  return (
    <div>
      <h1>Welcome to DevSecOps Dashboard</h1>
      <p>{clientData}</p>
    </div>
  );
}
