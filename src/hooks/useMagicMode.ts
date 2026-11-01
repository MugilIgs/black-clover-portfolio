
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
