import "./Clover.css";

interface CloverProps {
  className?: string;
}

export default function Clover({ className = "" }: CloverProps) {
  return (
    <span
      className={`magic-clover ${className}`.trim()}
      aria-label="Magic clover"
      role="img"
    >
      <svg
        className="clover-four"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path
          d="M50 49
             C38 42 25 31 28 19
             C31 7 47 10 50 28
             C53 10 69 7 72 19
             C75 31 62 42 50 49
             C58 37 76 31 84 40
             C94 51 80 64 62 57
             C76 69 73 85 61 86
             C50 87 48 68 50 49
             C42 61 31 76 19 70
             C6 64 13 48 32 48
             C17 42 15 27 26 23
             C37 19 47 36 50 49 Z"
          fill="currentColor"
        />
        <path
          d="M50 50 C54 66 53 81 40 91"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="clover-five"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <ellipse cx="50" cy="27" rx="13" ry="21" />
          <ellipse
            cx="72"
            cy="43"
            rx="13"
            ry="21"
            transform="rotate(72 72 43)"
          />
          <ellipse
            cx="64"
            cy="68"
            rx="13"
            ry="21"
            transform="rotate(144 64 68)"
          />
          <ellipse
            cx="36"
            cy="68"
            rx="13"
            ry="21"
            transform="rotate(216 36 68)"
          />
          <ellipse
            cx="28"
            cy="43"
            rx="13"
            ry="21"
            transform="rotate(288 28 43)"
          />
        </g>
        <path
          d="M50 50 C55 67 53 82 39 92"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
