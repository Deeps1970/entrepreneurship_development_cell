"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("edc-loaded")) {
      setDone(true);
      return;
    }
    const started = performance.now();
    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - started) / 1600) * 100));
      setValue(next);
      if (next < 100) {
        requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("edc-loaded", "1");
        setTimeout(() => setDone(true), 280);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  if (done) return null;

  return (
    <div className="loader" aria-label="Loading site">
      <div className="loader-grid" />
      <div className="loader-top">
        <span>EDC / ECOSYSTEM v2.0</span>
        <span>13°04&apos;N · 80°16&apos;E</span>
      </div>
      <div className="loader-main">
        <div className="loader-logo-ring">
          <Image
            src="/edc-logo.png"
            alt="EDC Rocket"
            width={64}
            height={64}
            className="loader-rocket"
            priority
          />
        </div>
        <p>ENTREPRENEURSHIP<br />DEVELOPMENT CELL</p>
        <strong>{String(value).padStart(3, "0")}%</strong>
        <i>
          <b style={{ transform: `scaleX(${value / 100})` }} />
        </i>
        <small>
          {value < 35
            ? "INITIALIZING VENTURE ENGINE"
            : value < 70
            ? "LOADING BOARD OF DIRECTORS"
            : "READY TO LAUNCH"}
        </small>
      </div>
      <div className="loader-foot-badge">
        <span>SRM VADAPALANI</span>
      </div>
    </div>
  );
}
