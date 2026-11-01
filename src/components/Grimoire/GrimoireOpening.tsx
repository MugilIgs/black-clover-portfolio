
import { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  useReducedMotion,
} from "motion/react";

import "./GrimoireOpening.css";

interface GrimoireOpeningProps {
  onComplete: () => void;
}

type MagicMode = "asta" | "yuno";

export default function GrimoireOpening({
  onComplete,
}: GrimoireOpeningProps) {
  const [scope, animate] = useAnimate();
  const prefersReducedMotion = useReducedMotion();

  const [magicMode] = useState<MagicMode>(() => {
    return document.documentElement.dataset.magicMode === "yuno"
      ? "yuno"
      : "asta";
  });

  const isAsta = magicMode === "asta";

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        const timer = window.setTimeout(resolve, duration);
        timers.push(timer);
      });

    const sequence = async () => {
      if (prefersReducedMotion) {
        onComplete();
        return;
      }

      try {
        await animate(
          ".opening-overlay",
          { opacity: 1 },
          { duration: 0.5 }
        );

        if (cancelled) return;

        // Magic circles awaken.
        await animate(
          ".magic-circle-outer",
          { opacity: 1, scale: 1, rotate: 360 },
          { duration: 1.2, ease: "easeOut" }
        );

        if (cancelled) return;

        await animate(
          ".magic-circle-inner",
          { opacity: 1, scale: 1, rotate: -360 },
          { duration: 1, ease: "easeOut" }
        );

        if (cancelled) return;

        // Clover awakens for Yuno; devil emblem awakens for Asta.
        await animate(
          ".opening-clover",
          {
            opacity: 1,
            scale: 1,
            rotate: isAsta ? 0 : 0,
          },
          { duration: 0.7, ease: "easeOut" }
        );

        if (cancelled) return;

        // A powerful mode-specific energy burst.
        await animate(
          ".energy-burst",
          {
            opacity: [0, 1, 0],
            scale: [0.4, 1.5, 2.5],
          },
          { duration: 0.9 }
        );

        if (cancelled) return;

        // Reveal the floating grimoire.
        await animate(
          ".activation",
          { opacity: 0, scale: 1.2 },
          { duration: 0.5 }
        );

        if (cancelled) return;

        await animate(
          ".grimoire-stage",
          { opacity: 1, scale: 1, rotateY: 0 },
          { duration: 1.2, ease: "easeOut" }
        );

        if (cancelled) return;

        await animate(
          ".book-glow",
          {
            opacity: [0.2, 0.8, 0.3],
            scale: [0.9, 1.15, 1],
          },
          { duration: 1.5 }
        );

        if (cancelled) return;

        await wait(900);

        // Open the left cover.
        await animate(
          ".book-left",
          { rotateY: -165 },
          { duration: 1.4, ease: "easeInOut" }
        );

        if (cancelled) return;

        // Open the right cover.
        await animate(
          ".book-right",
          { rotateY: 165 },
          { duration: 1.4, ease: "easeInOut" }
        );

        if (cancelled) return;

        // Reveal the pages.
        await animate(
          ".book-pages",
          { opacity: 1, scale: 1.08 },
          { duration: 0.8 }
        );

        if (cancelled) return;

        await wait(800);

        // Finish the opening sequence.
        await animate(
          ".grimoire-stage",
          {
            scale: 1.15,
            opacity: 0,
            filter: "blur(10px)",
          },
          { duration: 1, ease: "easeInOut" }
        );

        if (!cancelled) {
          onComplete();
        }
      } catch (error) {
        if (!cancelled) {
          console.error(
            "Grimoire opening animation failed:",
            error
          );
          onComplete();
        }
      }
    };

    void sequence();

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
    };
  }, [animate, onComplete, prefersReducedMotion, isAsta]);

  return (
    <main
      ref={scope}
      className={`grimoire-opening mode-${magicMode}`}
    >
      <div className="opening-overlay" />

      {/* Atmospheric effects */}
      <div className="grimoire-atmosphere" aria-hidden="true">
        <div className="atmosphere-aura" />
        <div className="atmosphere-aura atmosphere-aura-two" />

        {Array.from({ length: 22 }, (_, index) => (
          <span
            key={index}
            className={`grimoire-particle particle-${(index % 6) + 1}`}
          />
        ))}
      </div>

      {/* Magic activation */}
      <div className="activation">
        <motion.div
          className="magic-circle magic-circle-outer"
          initial={{ opacity: 0, scale: 0.2 }}
        />

        <motion.div
          className="magic-circle magic-circle-inner"
          initial={{ opacity: 0, scale: 0.2 }}
        />

        <motion.div
          className="opening-clover"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
        >
          {isAsta ? "☘" : "🍀"}
        </motion.div>

        <motion.div
          className="energy-burst"
          initial={{ opacity: 0, scale: 0.4 }}
        />
      </div>

      {/* Opening grimoire */}
      <div className="grimoire-stage">
        <div className="book-glow" />

        <div className="book">
          <motion.div className="book-left">
            <div className="book-cover-content">
              <span className="book-clover">
                {isAsta ? "☘" : "🍀"}
              </span>

              <h2>{isAsta ? "ANTI-MAGIC" : "MUGIL"}</h2>

              <p>
                {isAsta ? "DEVIL'S GRIMOIRE" : "MAGIC KNIGHT"}
              </p>
            </div>
          </motion.div>

          <motion.div className="book-right">
            <div className="book-cover-content">
              <span className="book-symbol">
                {isAsta ? "✦" : "✧"}
              </span>

              <h2>GRIMOIRE</h2>

              <p>
                {isAsta
                  ? "AWAKEN THE DEVIL"
                  : "WIND OF DESTINY"}
              </p>
            </div>
          </motion.div>

          <div className="book-pages">
            <span>
              {isAsta ? "ANTI-MAGIC AWAKENING" : "YOUR JOURNEY"}
            </span>

            <strong>
              {isAsta ? "SURPASS" : "BEGINS"}
            </strong>

            <span>
              {isAsta ? "YOUR LIMITS" : "YOUR DESTINY"}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
