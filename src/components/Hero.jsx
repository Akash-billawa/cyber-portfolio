import React, { useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Github, FileText } from 'lucide-react';
import { personalInfo } from '../data/content';
import Typed from 'typed.js';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid z-0"></div>
            <div className="hero-glow absolute" aria-hidden="true"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl hero-stack">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="font-mono text-[var(--accent)] tracking-widest text-sm mb-4 block hero-intro">
                            &lt; {personalInfo.role} /&gt;
                        </span>
                    </Motion.div>

                    <Motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glitch text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tighter drop-shadow-hero z-10 relative hero-title"
                        data-text={personalInfo.headline}
                    >
                        {personalInfo.headline}
                    </Motion.h1>

                    <Motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed hero-subtext"
                    >
                        <HeroTyped subHeadline={personalInfo.subHeadline} />
                    </Motion.p>

                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 hero-cta-row"
                    >
                        <a href="#projects" className="btn btn-primary group" aria-label="View projects">
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline group" aria-label="Open GitHub profile">
                            <Github size={18} />
                            GitHub
                        </a>
                        <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline group" aria-label="Open resume">
                            <FileText size={18} />
                            Resume
                        </a>
                    </Motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)]"
            >
                <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--accent)] to-transparent"></div>
            </Motion.div>
        </section>
    );
};

export default Hero;

const HeroTyped = ({ subHeadline }) => {
    const elRef = useRef(null);

    useEffect(() => {
        const media = typeof window !== 'undefined' && typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
        if (media.matches || !elRef.current) return;
        const strings = Array.isArray(subHeadline)
            ? subHeadline
            : (typeof subHeadline === 'string' && subHeadline.includes('|'))
                ? subHeadline.split('|').map(s => s.trim())
                : [typeof subHeadline === 'string' ? subHeadline : ''];
        const typed = new Typed(elRef.current, {
            strings,
            typeSpeed: 42,
            backSpeed: 18,
            backDelay: 1200,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: '_',
        });
        return () => typed.destroy();
    }, [subHeadline]);

    return <span ref={elRef}>{typeof subHeadline === 'string' ? subHeadline : ''}</span>;
}
