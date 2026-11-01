
import { motion } from "motion/react";

import Grimoire from "../components/Grimoire/Grimoire";
import MagicParticles from "../components/MagicParticles/MagicParticles";

interface LandingProps {
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


export default function Landing({ onOpen }: LandingProps) {
  return (
    <main className="landing">
      <MagicParticles />
      <div className="landing-artwork" aria-hidden="true" />
      <div className="landing-aura" aria-hidden="true" />
      <div className="landing-runes" aria-hidden="true" />

      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <div className="clover-small" aria-hidden="true">
          <FiveLeafClover />
        </div>

        <p className="eyebrow">MAGIC KNIGHT PORTFOLIO</p>

        <h1>
          MUGIL
          <span>IGNATIUS</span>
        </h1>

        <p className="role">SOFTWARE DEVELOPER</p>

        <p className="quote">"Surpass your limits."</p>

        <Grimoire onOpen={onOpen} />
      </motion.div>
    </main>
  );
}
