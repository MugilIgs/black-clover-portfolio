import "./MagicParticles.css";

const particles = Array.from({ length: 35 }, (_, index) => {
  const seed1 = ((index + 1) * 9301 + 49297) % 233280;
  const rnd1 = seed1 / 233280;
  const seed2 = ((seed1 + 1) * 9301 + 49297) % 233280;
  const rnd2 = seed2 / 233280;
  const seed3 = ((seed2 + 1) * 9301 + 49297) % 233280;
  const rnd3 = seed3 / 233280;

  return {
    left: `${(rnd1 * 100).toFixed(2)}%`,
    animationDelay: `${(rnd2 * 5).toFixed(2)}s`,
    animationDuration: `${(4 + rnd3 * 6).toFixed(2)}s`,
  };
});

export default function MagicParticles() {
  return (
    <div className="magic-particles">
      {particles.map((style, index) => (
        <span
          key={index}
          className="magic-particle"
          style={style}
        />
      ))}
    </div>
  );
}