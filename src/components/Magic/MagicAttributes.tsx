
import { motion } from "motion/react";

import { magicAttributes } from "../../data/magicAttributes";
import MagicAttribute from "./MagicAttribute";

export default function MagicAttributes() {
  return (
    <section
      className="magic-attributes-section"
      id="magic"
    >
      <div className="magic-attributes-container">
        <motion.div
          className="magic-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="magic-heading-eyebrow">
            MAGIC ATTRIBUTES
          </span>

          <h2>
           MY MAGIC
          </h2>

          <div className="magic-heading-divider" />
        </motion.div>

        <div className="magic-grid">
          {magicAttributes.map((attribute, index) => (
            <MagicAttribute
              key={attribute.id}
              attribute={attribute}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
