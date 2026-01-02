
import React from 'react';
import { motion } from 'framer-motion';
import { about, personalInfo } from '../data/content';
import { MapPin, Cpu, Terminal, Github, Linkedin, Mail, Download, File } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Network_Defense', ext: '.exe' },
        { name: 'Pen_Testing', ext: '.exe' },
        { name: 'Python_Auto', ext: '.py' },
        { name: 'React_Dev', ext: '.jsx' },
        { name: 'Web_Security', ext: '.sh' },
        { name: 'Linux_Admin', ext: '.conf' },
    ];

    const highlightKeywords = ['Cybersecurity', 'Python', 'network defense'];
    const highlightText = (text) => {
        const escapedKeywords = highlightKeywords.map((word) =>
            word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );
        const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');

        return text.split(regex).map((segment, index) => {
            const match = highlightKeywords.find(
                (word) => word.toLowerCase() === segment.toLowerCase()
            );

            if (match) {
                return (
                    <span key={`highlight-${index}`} className="highlight-text">
                        {segment}
                    </span>
                );
            }

            return <span key={`text-${index}`}>{segment}</span>;
        });
    };

    return (
        <section id="about" className="about-section">
            <div className="about-section-container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glitch-header-wrapper"
                >
                    <h2
                        className="glitch-header"
                        data-text="System.Identity"
                    >
                        System.Identity
                    </h2>
                    <span className="glitch-divider" aria-hidden="true"></span>
                </motion.div>

                <motion.div
                    className="command-deck"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="profile-panel">
                        <div className="profile-avatar">
                            <div className="avatar-frame">
                                <div className="avatar-image">
                                    <div className="avatar-placeholder">
                                        <span className="avatar-icon">👤</span>
                                    </div>
                                </div>
                                <div className="avatar-scanlines"></div>
                            </div>
                            <div className="avatar-status">
                                <span className="status-dot"></span>
                                <span className="status-text">ONLINE</span>
                            </div>
                        </div>

                        <div className="profile-meta">
                            <h3 className="profile-name">{personalInfo.name}</h3>

                            <div className="profile-stat">
                                <MapPin size={16} />
                                <span>{personalInfo.location}</span>
                            </div>
                            <div className="profile-stat">
                                <Cpu size={16} />
                                <span>Network Defense & Automation</span>
                            </div>
                            <div className="profile-stat">
                                <Terminal size={16} />
                                <span>Shell: ZSH // Python</span>
                            </div>
                        </div>

                        <div className="profile-links">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="profile-link">
                                <Github size={18} />
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="profile-link">
                                <Linkedin size={18} />
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className="profile-link">
                                <Mail size={18} />
                            </a>
                        </div>

                        <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="resume-btn">
                            <Download size={16} />
                            <span>Download Resume</span>
                        </a>
                    </div>

                    <div className="terminal-panel">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <span className="terminal-btn terminal-btn-red"></span>
                                <span className="terminal-btn terminal-btn-yellow"></span>
                                <span className="terminal-btn terminal-btn-green"></span>
                            </div>
                            <span className="terminal-title">root@identity:~</span>
                            <div className="terminal-spacer"></div>
                        </div>

                        <div className="terminal-body">
                            <div className="terminal-line">
                                <span className="terminal-prompt">➜</span>
                                <span className="terminal-path">~</span>
                                <span className="terminal-command">whoami --verbose</span>
                            </div>

                            <div className="terminal-output">
                                <p className="terminal-text">
                                    {highlightText(about.description)}
                                </p>
                                <p className="terminal-comment">
                                    # Status: Active & Scanning for Opportunities...
                                </p>
                            </div>

                            <div className="terminal-line">
                                <span className="terminal-prompt">➜</span>
                                <span className="terminal-path">~</span>
                                <span className="terminal-command">ls -la ./skills/</span>
                            </div>

                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-pill">
                                        <File size={14} className="skill-icon" />
                                        <span className="skill-name">{skill.name}{skill.ext}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="terminal-line terminal-cursor-line">
                                <span className="terminal-prompt">➜</span>
                                <span className="terminal-path">~</span>
                                <span className="terminal-cursor"></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
