
import { motion } from "motion/react";
import type { CSSProperties } from "react";

import type { MagicAttribute as MagicAttributeData } from "../../data/magicAttributes";
import MagicEffect from "./MagicEffect";
import type { MagicEffectType } from "./PageMagicEffect";

import "./MagicAttribute.css";

interface Props {
  attribute: MagicAttributeData;
  index: number;
  onMagicHover?: (type: MagicEffectType, x?: number) => void;
}

const magicColors: Record<string, string> = {
  java: "#39CFFF",
  javascript: "#FF7A24",
  react: "#61E6C0",
  springboot: "#B78AFF",
  postgresql: "#56A8FF",
  github: "#72E58B",
  security: "#B78AFF",
};

const supportedEffects = [
  "lightning",
  "fire",
  "wind",
  "dark",
  "water",
  "nature",
  "security",
];

export default function MagicAttribute({
  attribute,
  index,
  onMagicHover,
}: Props) {
  const triggerMagic = () => {
    if (!supportedEffects.includes(attribute.effect)) return;

    const element = document.querySelector(
      `[data-magic-id="${attribute.id}"]`
    );

    const rect = element?.getBoundingClientRect();

    if (rect) {
      onMagicHover?.(
        attribute.effect as MagicEffectType,
        rect.left + rect.width / 2
      );
    }
  };

  const skills = attribute.focus
    .split("•")
    .map((skill) => skill.trim())
    .filter(Boolean);

  return (
    <motion.article
      data-magic-id={attribute.id}
      className={`magic-card magic-${attribute.id}`}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      onHoverStart={triggerMagic}
      onTapStart={triggerMagic}
      onHoverEnd={() => onMagicHover?.(null)}
      style={
        {
          "--magic-color": magicColors[attribute.id] ?? "#72E58B",
        } as CSSProperties
      }
    >
      <div className="magic-card-line" />

      <MagicEffect type={attribute.effect} />

      <div className="magic-symbol-container">
        <div className="magic-symbol">{attribute.symbol}</div>
      </div>

      <span className="magic-type">{attribute.magicType}</span>

      <h3>{attribute.technology}</h3>

      <p className="magic-description">{attribute.description}</p>


<div className="magic-focus">
  <div className="magic-skill-tags">
    {skills.map((skill) => (
      <span className="magic-skill-tag" key={skill}>
        {skill}
      </span>
    ))}
  </div>
</div>


      <div className="magic-rune">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>
    </motion.article>
  );
}
