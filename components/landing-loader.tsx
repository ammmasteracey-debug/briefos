"use client";

import { useEffect, useState } from "react";

export function LandingLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(false);
      return;
    }

    const timer = window.setTimeout(() => setIsVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="landing-loader">
      <div aria-hidden="true" className="landing-loader-orbit">
        <span>黒</span>
      </div>
      <p className="landing-loader-wordmark">
        KUROGAMI <span>/ BRIEFOS</span>
      </p>
      <p aria-live="polite" className="landing-loader-message" role="status">
        Initializing the signal
      </p>
      <div aria-hidden="true" className="landing-loader-progress">
        <span />
      </div>
      <button
        className="landing-loader-skip"
        onClick={() => setIsVisible(false)}
        type="button"
      >
        Skip intro <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
