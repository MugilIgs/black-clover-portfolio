
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, type Project } from "../../data/projects";
import "./SpellBook.css";

const categories = ["ALL", "FULL STACK", "AI & AUTOMATION", "MOBILE & TOOLS"] as const;
type CategoryTab = (typeof categories)[number];

export default function SpellBook() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter(
          (p) => p.category.toUpperCase() === activeCategory
        );

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="spell-book-section" id="spells">
      <div className="spell-book-container">
        <motion.div
          className="spell-book-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="spell-book-eyebrow">
            ✦ MY GRIMOIRE ✦
          </span>

          <h2>
            SPELL <span>BOOK</span>
          </h2>

          <p>
            Every project is a spell. Every challenge makes
            the magic stronger.
          </p>

          <div className="spell-book-divider">
            <span>☘</span>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div
          className="spell-filter-tabs"
          role="tablist"
          aria-label="Filter spells by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`spell-filter-tab ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat === "ALL" ? "✦ ALL SPELLS" : cat}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="spell-book-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                className="spell-card"
                key={project.id}
                style={
                  {
                    "--spell-color": project.color,
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -8, scale: 1.015 }}
              >
                <div className="spell-card-top">
                  <span className="spell-number">
                    SPELL No. {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="spell-symbol">
                    {project.symbol}
                  </span>
                </div>

                <div className="spell-card-content">
                  <span className="spell-type">
                    {project.magicType}
                  </span>

                  <h3>{project.title}</h3>

                  <p className="spell-subtitle">
                    {project.subtitle}
                  </p>

                  <p className="spell-description">
                    {project.description}
                  </p>

                  <div className="spell-tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="spell-card-bottom">
                  <span
                    className={`spell-status status-${project.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {project.status}
                  </span>

                  <div className="spell-card-actions">
                    <button
                      type="button"
                      className="spell-details-button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                    >
                      <span>DETAILS</span>
                      <span aria-hidden="true">↗</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        className="spell-code-button"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <span>GITHUB</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    {project.liveUrl &&
                    !project.liveUrl.includes(
                      "your-deployed-project-url.com"
                    ) ? (
                      <a
                        className="spell-live-button"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <span>LIVE</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="spell-unavailable">
                        NOT DEPLOYED
                      </span>
                    )}
                  </div>
                </div>

                <div className="spell-card-glow" />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="spell-details-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.section
              className="spell-details-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="spell-details-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              style={
                {
                  "--spell-color": selectedProject.color,
                } as React.CSSProperties
              }
            >
              <div className="spell-details-header">
                <div>
                  <span className="spell-details-eyebrow">
                    {selectedProject.magicType}
                  </span>

                  <h2 id="spell-details-title">
                    {selectedProject.title}
                  </h2>

                  <p>{selectedProject.subtitle}</p>
                </div>

                <button
                  type="button"
                  className="spell-details-close"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  autoFocus
                >
                  ×
                </button>
              </div>

              <div className="spell-details-body">
                <h3>About This Spell</h3>
                <p>{selectedProject.description}</p>

                <h3>Key Features</h3>
                <ul className="spell-details-features">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <h3>Technology Arsenal</h3>
                <div className="spell-details-tech">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="spell-details-footer">
                  <span
                    className={`spell-status status-${selectedProject.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {selectedProject.status}
                  </span>

                  <div className="spell-details-actions">
                    {selectedProject.githubUrl && (
                      <a
                        className="spell-code-button"
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VIEW CODE ↗
                      </a>
                    )}

                    {selectedProject.liveUrl &&
                    !selectedProject.liveUrl.includes(
                      "your-deployed-project-url.com"
                    ) ? (
                      <a
                        className="spell-live-button"
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OPEN PROJECT ↗
                      </a>
                    ) : (
                      <span className="spell-unavailable">
                        DEMO NOT AVAILABLE
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
