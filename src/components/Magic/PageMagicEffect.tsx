
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

import "./PageMagicEffect.css";

export type MagicEffectType =
  | "lightning"
  | "fire"
  | "wind"
  | "dark"
  | "water"
  | "nature"
  | null;

interface Props {
  type: MagicEffectType;
  trigger: number;
  originX: number;
}

export default function PageMagicEffect({
  type,
  trigger,
  originX,
}: Props) {
  const [prevTrigger, setPrevTrigger] = useState(trigger);
  const [visible, setVisible] = useState(false);

  if (trigger !== prevTrigger) {
    setPrevTrigger(trigger);
    setVisible(Boolean(type && trigger > 0));
  }

  useEffect(() => {
    if (!type || !visible) return;

    const duration =
      type === "lightning"
        ? 750
        : type === "fire"
          ? 1400
          : type === "dark"
            ? 1200
            : type === "nature"
              ? 1800
              : 1500;

    const timeoutId = window.setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => window.clearTimeout(timeoutId);
  }, [type, visible]);

  if (!type || !visible) {
    return null;
  }

  const effectStyle = {
    "--origin-x": `${originX}px`,
  } as CSSProperties;

  return (
    <div
      key={`${type}-${trigger}`}
      className={`page-magic-effect page-magic-${type}`}
      style={effectStyle}
      aria-hidden="true"
    >
      {type === "lightning" && (
        <>
          <div className="page-lightning-flash" />

          <svg
            className="page-lightning-bolt"
            viewBox="0 0 200 700"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M110 -20 L85 125 L120 105 L65 255 L105 220 L35 400 L75 365 L50 720" />
            <path d="M88 125 L35 190 L65 180 L20 265" />
            <path d="M95 250 L150 205 L125 280 L175 245" />
            <path d="M75 365 L125 330 L105 395" />
          </svg>
        </>
      )}

      {type === "fire" && (
        <>
          <div className="page-fire-glow" />

          {Array.from({ length: 24 }, (_, i) => (
            <span
              className="page-fire-ember"
              key={i}
              style={{
                left: `calc(var(--origin-x) + ${
                  ((i * 37 + 11) % 240) - 120
                }px)`,
                animationDelay: `${(i % 8) * 0.09}s`,
                animationDuration: `${
                  0.8 + (i % 5) * 0.16
                }s`,
              }}
            />
          ))}
        </>
      )}

      {type === "wind" && (
        <div className="page-wind">
          {Array.from({ length: 12 }, (_, i) => (
            <span
              key={i}
              style={{
                top: `${12 + ((i * 23) % 76)}%`,
                animationDelay: `${(i % 6) * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}

      {type === "dark" && (
        <div className="page-dark">
          <div className="page-dark-aura" />
          <div className="page-dark-ring" />

          <div className="page-dark-sigil">
            <span>✦</span>
            <span>◇</span>
            <span>✧</span>
            <span>◇</span>
          </div>
        </div>
      )}

      {type === "water" && (
        <div className="page-water">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}

      {type === "nature" && (
        <div className="page-nature">
          {Array.from({ length: 18 }, (_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 37 + 13) % 100}%`,
                animationDelay: `${(i % 9) * 0.12}s`,
                animationDuration: `${
                  1 + (i % 5) * 0.2
                }s`,
              }}
            >
              🍃
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
