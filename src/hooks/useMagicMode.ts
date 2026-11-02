
import { useEffect, useState } from "react";

export type MagicMode = "asta" | "yuno";

const STORAGE_KEY = "black-clover-magic-mode";

export default function useMagicMode() {
  const [mode, setMode] = useState<MagicMode>(() => {
    try {
      const savedMode = localStorage.getItem(STORAGE_KEY);
      return savedMode === "yuno" ? "yuno" : "asta";
    } catch {
      return "asta";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.magicMode = mode;

    // Swap favicon to match the active magic mode
    const favicon = document.getElementById("app-favicon") as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = mode === "yuno" ? "/favicon-yuno.svg" : "/favicon-asta.svg";
    }

    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // The theme still works if storage is unavailable.
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((current) => (current === "asta" ? "yuno" : "asta"));
  };

  return { mode, setMode, toggleMode };
}
