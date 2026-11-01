import { motion } from "motion/react";
import "./AboutSection.css";

const stats = [
  {
    value: "2026",
    label: "GRADUATION",
  },
  {
    value: "8.07",
    label: "CGPA",
  },
  {
    value: "04+",
    label: "PROJECTS",
  },
  {
    value: "02",
    label: "INTERNSHIPS",
  },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">
            THE GRIMOIRE
          </span>

          <h2>
            ABOUT <span>ME</span>
          </h2>

          <div className="about-divider" />
        </motion.div>

        {/* Main Grimoire Card */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          {/* Magic Seal */}
          <div className="about-seal">
            <div className="seal-ring">
              <span>🍀</span>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content">

            <span className="about-label">
              MAGIC KNIGHT PROFILE
            </span>

            <h3>
              A DEVELOPER WHO
              <br />
              <span>KEEPS LEARNING.</span>
            </h3>

            <p>
              I'm a Computer Science and Engineering graduate focused on
              building practical software applications and continuously
              learning modern technologies.
            </p>

            <p>
              My interests span full-stack development, backend engineering,
              automation, cloud technologies, AI and cybersecurity. I enjoy
              turning ideas into working systems and solving problems through
              code.
            </p>

            <p>
              I believe every project is an opportunity to learn something
              new, improve my skills and surpass my limits.
            </p>

          </div>

        </motion.div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <motion.div
              className="about-stat"
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}