import React from 'react';
import { motion as Motion } from 'framer-motion';
import { projects } from '../data/content';
import { Github, ExternalLink, Lock, FolderLock } from 'lucide-react';

const Projects = ({ unlocked = false }) => {
    const secret = {
        id: 999,
        title: "Secret: Intrusion Detection Playground",
        description: "Unlocked challenge: simulate traffic, craft rules, and visualize alerts in a mini IDS lab.",
        features: [
            "PCAP replay with adjustable rates",
            "Rule authoring with live feedback",
            "Alert stream and severity filtering",
            "Heatmap visualization"
        ],
        tech: ["React", "Web Workers", "Regex", "Charts"],
        github: "https://github.com",
        demo: "#",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=800"
    };
    const list = unlocked ? [...projects, secret] : projects;
    return (
        <section id="projects" className="projects-section" aria-labelledby="projects-title">
            <div className="projects-container">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="projects-header"
                >
                    <h2 id="projects-title" className="section-title projects-title">
                        Encrypted<span className="text-neon">.Projects</span>
                    </h2>
                    <p className="projects-subtitle">
                        Access logs of completed operations, decrypted for briefing eyes only.
                    </p>
                </Motion.div>

                <ul className="classified-grid" role="list" aria-label="Projects list">
                    {list.map((project, index) => (
                        <Motion.li
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="classified-card"
                        >
                            <div className="card-top-bar">
                                <span className="file-label">FILE // {project.title}</span>
                                <Lock size={16} className="lock-icon" aria-hidden="true" />
                            </div>

                            <div className={`card-image-wrapper ${project.image ? 'has-image' : ''}`}>
                                <div className="pattern-placeholder">
                                    <FolderLock size={48} aria-hidden="true" />
                                </div>
                                {project.image && (
                                    <>
                                        <div className="image-overlay"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            decoding="async"
                                            referrerPolicy="no-referrer"
                                            fetchPriority="low"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.closest('.card-image-wrapper')?.classList.remove('has-image');
                                            }}
                                            className="card-image"
                                        />
                                    </>
                                )}
                            </div>

                            <div className="card-body">
                                <p className="project-index">&gt; Project_0{index + 1}</p>
                                <h3 className="project-title">{project.title}</h3>
                                <p id={`project-desc-${project.id}`} className="project-description">
                                    {project.description}
                                </p>

                                <div className="card-separator" aria-hidden="true"></div>

                                <div className="card-features">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="feature-line">
                                            <span className="feature-pointer">&gt;</span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="card-tech">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="tech-pill">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="card-actions">
                                {project.github !== '#' && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="execute-button"
                                        aria-label={`Open ${project.title} source code on GitHub`}
                                        aria-describedby={`project-desc-${project.id}`}
                                    >
                                        [ VIEW SOURCE ]
                                    </a>
                                )}
                                {project.demo !== '#' && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="execute-button"
                                        aria-label={`Open ${project.title} live demo`}
                                        aria-describedby={`project-desc-${project.id}`}
                                    >
                                        [ LAUNCH DEMO ]
                                    </a>
                                )}
                            </div>
                        </Motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
