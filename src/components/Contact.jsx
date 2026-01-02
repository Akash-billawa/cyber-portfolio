import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/content';
import { encryptPayload } from '../utils/securityProtocol';

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID || 'service_s2e54o7';
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID || 'template_u8tfv1r';
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY || 'P-4bALDsTEENEyfQj';

const Contact = () => {
    const [payload, setPayload] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('IDLE CHANNEL');
    const isTransmitting = status !== 'IDLE CHANNEL';

    const handleChange = (field) => (e) => {
        setPayload((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!payload.name || !payload.message) return;

        setStatus('INITIATING ENCRYPTION…');
        setTimeout(() => {
            const { cipherText, integrityHash } = encryptPayload(payload);
            setStatus('CONNECTING TO RELAY NODE…');

            const templateParams = { encrypted_payload: cipherText };

            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                .then(() => {
                    setStatus(`TRANSMISSION COMPLETE [HASH: ${integrityHash}]`);
                    setPayload({ name: '', email: '', message: '' });
                    setTimeout(() => setStatus('IDLE CHANNEL'), 5000);
                })
                .catch(() => {
                    setStatus('TRANSMISSION ERROR // RETRY');
                });
        }, 800);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-header"
                >
                    <h2 className="section-title contact-title">
                        Initialize<span className="text-neon">.Connection</span>
                    </h2>
                    <p className="contact-subtitle">
                        Secure transmission channel ready. Authenticate sender credentials and dispatch encrypted packet.
                    </p>
                </Motion.div>

                <div className="contact-grid">
                    <Motion.div
                        className="contact-terminal"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="terminal-label">Direct Comms</h3>
                        <ul className="command-list">
                            <li>
                                <span className="command-pointer">&gt;</span>
                                <span className="command-text">
                                    root@email_server --open
                                </span>
                                <a href={`mailto:${personalInfo.email}`} className="command-value">{personalInfo.email}</a>
                            </li>
                            <li>
                                <span className="command-pointer">&gt;</span>
                                <span className="command-text">ssh github_core --handshake</span>
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="command-value">
                                    github/profile
                                </a>
                            </li>
                            <li>
                                <span className="command-pointer">&gt;</span>
                                <span className="command-text">linkd pulse --sync</span>
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="command-value">
                                    linkedin/connect
                                </a>
                            </li>
                        </ul>
                    </Motion.div>

                    <Motion.div
                        className="transmission-panel"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="panel-header">
                            <span>Secure Transmission Link</span>
                            <span className={`status-chip ${status.toLowerCase()}`}>{status}</span>
                        </div>
                        <form className="transmission-form" onSubmit={handleSubmit}>
                            <label className="input-label" htmlFor="trans-name">Sender ID</label>
                            <input
                                id="trans-name"
                                className="terminal-input"
                                placeholder="> type alias..."
                                value={payload.name}
                                onChange={handleChange('name')}
                                disabled={isTransmitting}
                                required
                            />

                            <label className="input-label" htmlFor="trans-email">Return Channel</label>
                            <input
                                id="trans-email"
                                type="email"
                                className="terminal-input"
                                placeholder="> encode email..."
                                value={payload.email}
                                onChange={handleChange('email')}
                                disabled={isTransmitting}
                                required
                            />

                            <label className="input-label" htmlFor="trans-message">Payload</label>
                            <textarea
                                id="trans-message"
                                rows="4"
                                className={`terminal-input message ${isTransmitting ? 'processing' : ''}`}
                                placeholder="> describe mission parameters..."
                                value={payload.message}
                                onChange={handleChange('message')}
                                disabled={isTransmitting}
                                required
                            ></textarea>

                            <div className="status-indicator">
                                <span className={isTransmitting ? 'text-neon blink' : ''}>
                                    {'>'} STATUS: {status}
                                </span>
                            </div>

                            <button type="submit" className="transmit-button" disabled={isTransmitting}>
                                {isTransmitting ? '[ ENCRYPTING... ]' : '[TRANSMIT_ENCRYPTED_PACKET]'}
                                <Send size={16} aria-hidden="true" />
                            </button>
                        </form>
                    </Motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
