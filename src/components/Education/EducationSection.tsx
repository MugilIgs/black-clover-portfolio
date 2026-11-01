import { motion } from "motion/react";
import { education } from "../../data/education";
import "./EducationSection.css";

export default function EducationSection() {
  return (
    <section className="education-section" id="education">

      <div className="education-container">

        {/* Heading */}
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>THE GRIMOIRE</span>

          <h2>
            EDUCATION
          </h2>

          <div className="education-divider" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          <div className="education-year">
            <span>GRADUATED</span>
            <strong>{education.year}</strong>
          </div>

          <div className="education-line" />

          <div className="education-content">

            <span className="education-type">
              BACHELOR OF ENGINEERING
            </span>

            <h3>
              {education.degree}
            </h3>

            <h4>
              {education.branch}
            </h4>

            <p className="education-institution">
              {education.institution}
            </p>

            <p className="education-university">
              Affiliated to {education.university}
            </p>

            <div className="education-meta">

              <div>
                <span>CGPA</span>
                <strong>{education.cgpa}</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>COMPLETED</strong>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}