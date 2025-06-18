import React, { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Resume Builder SaaS</h1>
      <p>Welcome to your simple resume builder app!</p>
      <p>
        You are viewing this on a{" "}
        <strong>{isMobile ? "mobile" : "desktop"}</strong> device.
      </p>
    </div>
  );
}
