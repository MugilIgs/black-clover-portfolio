
interface MagicEffectProps {
  type: string;
}

export default function MagicEffect({ type }: MagicEffectProps) {
  switch (type) {
    case "lightning":
      return (
        <div className="magic-effect lightning-effect">
          <div className="lightning-bolt lightning-bolt-one">⚡</div>
          <div className="lightning-bolt lightning-bolt-two">⚡</div>
          <div className="lightning-flash" />
        </div>
      );

    case "fire":
      return (
        <div className="magic-effect fire-effect">
          <div className="fire-glow" />
          <div className="flame flame-one" />
          <div className="flame flame-two" />
          <div className="flame flame-three" />
          <div className="flame flame-four" />
          <div className="flame flame-five" />
          <div className="fire-ember fire-ember-one">✦</div>
          <div className="fire-ember fire-ember-two">✧</div>
          <div className="fire-ember fire-ember-three">•</div>
          <div className="fire-ember fire-ember-four">✦</div>
        </div>
      );

    case "wind":
      return (
        <div className="magic-effect wind-effect">
          <div className="wind-vortex" />
          <span className="wind-trail wind-trail-one" />
          <span className="wind-trail wind-trail-two" />
          <span className="wind-trail wind-trail-three" />
          <span className="wind-trail wind-trail-four" />
          <span className="wind-trail wind-trail-five" />
          <span className="wind-trail wind-trail-six" />
          <span className="wind-particle wind-particle-one">✧</span>
          <span className="wind-particle wind-particle-two">✦</span>
        </div>
      );

    case "dark":
      return (
        <div className="magic-effect dark-effect">
          <div className="dark-orb" />
          <div className="dark-ring" />
        </div>
      );

    case "water":
      return (
        <div className="magic-effect water-effect">
          <div className="water-ring water-ring-one" />
          <div className="water-ring water-ring-two" />
          <div className="water-drop">◇</div>
        </div>
      );

    case "nature":
      return (
        <div className="magic-effect nature-effect">
          <div className="nature-aura" />
          <span className="nature-leaf nature-leaf-one">🍃</span>
          <span className="nature-leaf nature-leaf-two">🍂</span>
          <span className="nature-leaf nature-leaf-three">🍃</span>
          <span className="nature-leaf nature-leaf-four">🌿</span>
          <span className="nature-leaf nature-leaf-five">🍃</span>
          <span className="nature-leaf nature-leaf-six">🍂</span>
          <span className="nature-spark nature-spark-one">✦</span>
          <span className="nature-spark nature-spark-two">✧</span>
          <span className="nature-spark nature-spark-three">✦</span>
        </div>
      );

    case "security":
      return (
        <div className="magic-effect security-effect">
          <div className="security-orb" />
          <div className="security-ring security-ring-one" />
          <div className="security-ring security-ring-two" />

          <div className="security-shield">
            <svg
              viewBox="0 0 64 64"
              aria-hidden="true"
            >
              <path
                d="M32 5 L53 13 V29 C53 43 44 53 32 59 C20 53 11 43 11 29 V13 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M22 32 L29 39 L43 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="security-rune security-rune-one">✦</span>
          <span className="security-rune security-rune-two">◇</span>
          <span className="security-rune security-rune-three">✧</span>
        </div>
      );

    default:
      return null;
  }
}
