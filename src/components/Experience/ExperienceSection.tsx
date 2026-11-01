
import { motion } from "motion/react";
import { experiences } from "../../data/experience";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <section className="squad-section" id="squad">
      <div className="squad-container">
        <motion.div
          className="squad-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="squad-eyebrow">
  ✦ BLACK BULLS · MAGIC KNIGHT RECORD ✦
</span>

<h2>
  BLACK <span>BULLS</span>
</h2>

<p>
  Unconventional by nature. Relentless in growth.
  Every mission adds a new spell to my grimoire.
</p>
        </motion.div>

        <div className="squad-list">
          {experiences.map((item, index) => (
            <motion.article
              className="squad-card"
              key={item.id}
              style={
  {
    "--squad-color": "#a855f7",
  } as React.CSSProperties
}
              initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="squad-symbol">
                {item.symbol}
              </div>

              <div className="squad-details">
                <div className="squad-meta">
                  <span>{item.category}</span>
                  <span>{item.duration}</span>
                </div>

                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <p>{item.description}</p>

                <div className="squad-skills">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                {item.certificates && item.certificates.length > 0 && (
  <div className="squad-certificates">
    {item.certificates.map((certificate) => (
      <a
        key={certificate.title}
        href={certificate.file}
        target="_blank"
        rel="noopener noreferrer"
        className="squad-certificate-button"
      >
        <span aria-hidden="true">✧</span>
        {certificate.title}
        <span aria-hidden="true">↗</span>
      </a>
    ))}
  </div>
)}
              </div>

              <div className="squad-rune" aria-hidden="true">
                ✧
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
