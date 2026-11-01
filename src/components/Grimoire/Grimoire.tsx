
import { motion } from "motion/react";
import "./Grimoire.css";

interface GrimoireProps {
  onOpen: () => void;
}


function FiveLeafClover() {
  return (
    <svg
      className="five-leaf-clover"
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="gothic-clover-fill"
          x1="18"
          y1="10"
          x2="80"
          y2="85"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--clover-highlight)" />
          <stop offset="55%" stopColor="var(--clover-color)" />
          <stop offset="100%" stopColor="var(--clover-shadow)" />
        </linearGradient>
      </defs>

      <g
        fill="url(#gothic-clover-fill)"
        stroke="var(--clover-outline)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      >
        <path d="M50 54 C43 43 28 35 29 21 C30 10 41 3 49 12 C56 20 53 37 50 54Z" />
        <path d="M50 54 C43 43 28 35 29 21 C30 10 41 3 49 12 C56 20 53 37 50 54Z" transform="rotate(72 50 54)" />
        <path d="M50 54 C43 43 28 35 29 21 C30 10 41 3 49 12 C56 20 53 37 50 54Z" transform="rotate(144 50 54)" />
        <path d="M50 54 C43 43 28 35 29 21 C30 10 41 3 49 12 C56 20 53 37 50 54Z" transform="rotate(216 50 54)" />
        <path d="M50 54 C43 43 28 35 29 21 C30 10 41 3 49 12 C56 20 53 37 50 54Z" transform="rotate(288 50 54)" />
      </g>

      <path
        d="M50 54 C45 70 53 86 67 99"
        stroke="var(--clover-stem)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <circle
        cx="50"
        cy="54"
        r="3"
        fill="var(--clover-center)"
      />
    </svg>
  );
}


export default function Grimoire({ onOpen }: GrimoireProps) {
  return (
    <motion.div
      className="grimoire-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="grimoire"
        whileHover={{
          rotateY: -5,
          rotateX: 3,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="book-cover">
          <div className="book-border">
            <div className="clover-symbol" aria-hidden="true">
              <FiveLeafClover />
            </div>

            <div className="book-title">MUGIL</div>

            <div className="book-subtitle">MAGIC KNIGHT</div>
          </div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        className="open-grimoire"
        whileHover={{
          boxShadow: "0 0 24px var(--grimoire-button-glow)",
        }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        aria-label="Open Mugil's developer portfolio grimoire"
      >
        <span aria-hidden="true">✦</span>
        <span>OPEN GRIMOIRE</span>
        <span aria-hidden="true">✦</span>
      </motion.button>
    </motion.div>
  );
}
