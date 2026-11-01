
import { motion } from "motion/react";
import "./PortfolioHome.css";
import AboutSection from "../components/About/AboutSection";
import EducationSection from "../components/Education/EducationSection";
import MagicAttributes from "../components/Magic/MagicAttributes";
import SpellBook from "../components/Spells/SpellBook";
import ExperienceSection from "../components/Experience/ExperienceSection";
import CertificationSection from "../components/Certifications/CertificationSection";
import ContactSection from "../components/Contact/ContactSection";
import BackToTop from "../components/BackToTop/BackToTop";
import useMagicMode from "../hooks/useMagicMode";
import Clover from "../components/Clover";
export default function PortfolioHome() {
  const { mode, toggleMode } = useMagicMode();

  return (
    <main className="portfolio-home">
      {/* NAVIGATION */}
      <nav className="magic-nav">
        <div className="nav-logo">
          <Clover className="navbar-clover" />
          <strong>MUGIL IGNATIUS</strong>
        </div>

        <div className="nav-links">
          <a href="#about">GRIMOIRE</a>
          <a href="#magic">MAGIC</a>
          <a href="#spells">SPELLS</a>
          <a href="#squad">SQUAD</a>
          <a href="#certifications">CERTIFICATIONS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="nav-actions">
          <a
            href="/documents/Mugil-Ignatius-Resume.pdf"
            download="Mugil_Ignatius_Resume.pdf"
            className="resume-download-button"
            aria-label="Download my resume"
          >
            <span className="resume-icon" aria-hidden="true">↓</span>
            <span>RESUME</span>
          </a>
          <button
            type="button"
            className="nav-theme-toggle"
            onClick={toggleMode}
            aria-label={
              mode === "asta"
                ? "Switch to Yuno light mode"
                : "Switch to Asta dark mode"
            }
            aria-pressed={mode === "yuno"}
          >
            <span aria-hidden="true">
              {mode === "asta" ? "☀" : "☾"}
            </span>
            <span>{mode === "asta" ? "YUNO MODE" : "ASTA MODE"}</span>
          </button>

          <button type="button" className="nav-rank">
            <span>✦</span>
            MAGIC KNIGHT
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-background-circle" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="hero-eyebrow">
            FOUR-LEAF GRIMOIRE • MAGIC KNIGHT
          </p>

          <h1>
            MUGIL
            <span>IGNATIUS</span>
          </h1>

          <div className="hero-divider">
            <span>✦</span>
            <div />
            <span>✦</span>
          </div>

          <h2>
            SOFTWARE
            <span>DEVELOPER</span>
          </h2>

          <p className="hero-description">
            Building scalable applications, exploring new technologies,
            and constantly surpassing my limits.
          </p>

          <div className="hero-actions">
            <a href="#spells" className="magic-button primary">
              <span>✦</span>
              VIEW MY SPELLS
            </a>

            <a href="#about" className="magic-button secondary">
              OPEN GRIMOIRE
            </a>
          </div>
        </motion.div>

        {/* Magic particles */}
        <div className="hero-particle particle-1" />
        <div className="hero-particle particle-2" />
        <div className="hero-particle particle-3" />
        <div className="hero-particle particle-4" />
        <div className="hero-particle particle-5" />
      </section>

      {/* PORTFOLIO SECTIONS */}
      <AboutSection />
      <EducationSection />
      <MagicAttributes />
      <SpellBook />
      <ExperienceSection />
      <CertificationSection />
      <ContactSection />
      <BackToTop />
    </main>
  );
}
