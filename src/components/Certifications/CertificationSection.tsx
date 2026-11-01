
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { certificates } from "../../data/certificates";
import type { Certificate } from "../../data/certificates";
import "./CertificationSection.css";

export default function CertificationSection() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  useEffect(() => {
    if (!selectedCertificate) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <section className="scrolls-section" id="certifications">
      <div className="scrolls-container">
        <motion.header
          className="scrolls-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="scrolls-eyebrow">
            ✦ ACHIEVEMENTS UNLOCKED ✦
          </span>

          <h2>
            MAGIC <span>SCROLLS</span>
          </h2>

          <p>
            Every scroll represents knowledge gained,
            skills developed, and another step forward.
          </p>

          <div className="scrolls-divider">
            <span>☘</span>
          </div>
        </motion.header>

        <div className="scrolls-grid">
          {certificates.map((certificate, index) => (
            <motion.article
              className="scroll-card"
              key={certificate.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.1,
              }}
              whileHover={{ y: -5 }}
            >
              <div className="scroll-card-top">
                <span>MAGIC SCROLL {String(index + 1).padStart(2, "0")}</span>
                <span className="scroll-card-rune" aria-hidden="true">
                  ✧
                </span>
              </div>

              <button
                type="button"
                className="scroll-image-button"
                onClick={() => setSelectedCertificate(certificate)}
                aria-label={`View ${certificate.title} certificate`}
              >
                <img
                  className="scroll-certificate-image"
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                />
                <span className="scroll-image-overlay">
                  VIEW SCROLL ↗
                </span>
              </button>


<div className="scroll-card-info">
  <h3>{certificate.title}</h3>
  <p>{certificate.issuer}</p>
  <span className="scroll-completion-date">
    COMPLETED · {certificate.completionDate}
  </span>
</div>


              <button
                type="button"
                className="scroll-view-button"
                onClick={() => setSelectedCertificate(certificate)}
              >
                VIEW CERTIFICATE <span aria-hidden="true">↗</span>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="scroll-modal-backdrop"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            className="scroll-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="scroll-modal-header">
              <div>
                <span>✦ MAGIC SCROLL ✦</span>
                <h3>{selectedCertificate.title}</h3>
                <p>{selectedCertificate.issuer}</p>
              </div>

              <button
                type="button"
                className="scroll-modal-close"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
              > X
              </button>
            </div>

            <div className="scroll-modal-image-wrap">
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate, full-size preview`}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
