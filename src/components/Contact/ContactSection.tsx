
import { motion } from "motion/react";
import "./ContactSection.css";

const guildLinks = [
  {
    symbol: "✉",
    label: "EMAIL",
    title: "Send a Message",
    detail: "mugilignatius@gmail.com",
   href: "https://mail.google.com/mail/?view=cm&fs=1&to=mugilignatius%40gmail.com",
  },
  {
    symbol: "⌘",
    label: "GITHUB",
    title: "Explore My Grimoires",
    detail: "View my repositories and projects",
    href: "https://github.com/MugilIgs",
  },
  {
    symbol: "in",
    label: "LINKEDIN",
    title: "Connect With Me",
    detail: "Let's grow our professional network",
    href: "https://www.linkedin.com/in/mugil-ignatius",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="guild-section">
      <div className="guild-container">
        <motion.div
          className="guild-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="guild-eyebrow">
            ✦ FINAL QUEST // OPEN INVITATION ✦
          </p>

          <h2>
            JOIN MY <span>GUILD</span>
          </h2>

          <p className="guild-intro">
            Every great adventure begins with a connection.
            Have an opportunity, a project, or an idea?
            Let's create something extraordinary.
          </p>
        </motion.div>

        <div className="guild-grid">
          {guildLinks.map((link, index) => (
            <motion.a
              key={link.label}
              className="guild-card"
              href={link.href}
              target={
                link.href.startsWith("mailto:") ? undefined : "_blank"
              }
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={`${link.label}: ${link.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
            >
              <span className="guild-symbol" aria-hidden="true">
                {link.symbol}
              </span>

              <span className="guild-label">{link.label}</span>
              <span className="guild-title">{link.title}</span>
              <span className="guild-detail">{link.detail}</span>

              <span className="guild-action">
                OPEN LINK <span aria-hidden="true">↗</span>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="guild-resume"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="guild-resume-rune" aria-hidden="true">
            ✧
          </span>

          <div className="guild-resume-copy">
            <p className="guild-label">THE GRIMOIRE</p>
            <h3>Want to know more about my journey?</h3>
            <p>
              Explore my skills, experience, and technical projects
              in my resume.
            </p>
          </div>

          <a
            className="guild-resume-button"
            href="/documents/Mugil-Ignatius-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW RESUME <span aria-hidden="true">↗</span>
          </a>
        </motion.div>

        <footer className="guild-footer">
          <p>
            BUILT WITH <span>✦</span> MAGIC, CODE & DETERMINATION
          </p>
          <p>© {new Date().getFullYear()} MUGIL IGNATIUS</p>
          <p className="guild-footer-motto">
            Surpass your limits.
          </p>
        </footer>
      </div>
    </section>
  );
}
