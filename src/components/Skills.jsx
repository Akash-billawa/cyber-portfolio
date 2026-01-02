import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
    FaPython,
    FaReact,
    FaLinux,
    FaNetworkWired,
    FaShieldAlt,
    FaDocker,
    FaGitAlt,
    FaJs,
    FaHtml5
} from 'react-icons/fa';
import { SiBurpsuite, SiWireshark, SiCisco } from 'react-icons/si';
import { RiShieldKeyholeFill, RiRadarLine } from 'react-icons/ri';
import { TbDeviceDesktopCode } from 'react-icons/tb';

const skillZones = [
    {
        id: 'offense',
        label: 'Offensive Protocols',
        status: 'Monitoring',
        accent: 'offensive',
        skills: [
            { label: 'Pen Testing', icon: <SiBurpsuite /> },
            { label: 'Nmap Recon', icon: <RiRadarLine /> },
            { label: 'Wireshark', icon: <SiWireshark /> },
            { label: 'Ethical Hack', icon: <RiShieldKeyholeFill /> },
            { label: 'Network Scan', icon: <FaNetworkWired /> }
        ]
    },
    {
        id: 'defense',
        label: 'Defensive Systems',
        status: 'Fortified',
        accent: 'defensive',
        skills: [
            { label: 'Network Sec', icon: <FaShieldAlt /> },
            { label: 'TCP / IP', icon: <FaNetworkWired /> },
            { label: 'OSI Layers', icon: <FaShieldAlt /> },
            { label: 'Subnetting', icon: <TbDeviceDesktopCode /> },
            { label: 'Cisco Stack', icon: <SiCisco /> },
            { label: 'Linux / Kali', icon: <FaLinux /> }
        ]
    },
    {
        id: 'core',
        label: 'Core Development',
        status: 'Deployed',
        accent: 'core',
        skills: [
            { label: 'Python', icon: <FaPython /> },
            { label: 'JavaScript', icon: <FaJs /> },
            { label: 'React', icon: <FaReact /> },
            { label: 'HTML / CSS', icon: <FaHtml5 /> },
            { label: 'Git Ops', icon: <FaGitAlt /> },
            { label: 'Docker', icon: <FaDocker /> },
            { label: 'VS Code', icon: <TbDeviceDesktopCode /> }
        ]
    }
];

const hexVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: (index) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: index * 0.08, type: 'spring', stiffness: 120 }
    })
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="skills-header"
                >
                    <h2 className="section-title skills-title">
                        Active<span className="text-neon">.Protocols</span>
                    </h2>
                    <div className="skills-underline" />
                    <p className="skills-subtitle">
                        Real-time diagnostics of offensive, defensive, and core development modules.
                    </p>
                </Motion.div>

                <div className="skills-grid">
                    {skillZones.map((zone) => (
                        <div className={`skills-zone ${zone.accent}`} key={zone.id}>
                            <div className="zone-header">
                                <span className="zone-label">{zone.label}</span>
                                <span className="zone-status">STATUS: {zone.status.toUpperCase()}</span>
                            </div>
                            <div className="hex-grid">
                                {zone.skills.map((skill, index) => (
                                    <Motion.div
                                        key={skill.label}
                                        className={`hex-shell ${zone.accent}`}
                                        custom={index}
                                        variants={hexVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        <div className="hex-inner">
                                            <span className="hex-icon" aria-hidden="true">{skill.icon}</span>
                                            <span className="hex-text">{skill.label}</span>
                                        </div>
                                    </Motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
