import React, { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
import { User, Mail, Globe } from 'lucide-react';

const SecretConsole = () => {
    const [cipherInput, setCipherInput] = useState('');
    const [keyInput, setKeyInput] = useState('');
    const [output, setOutput] = useState(null);
    const [error, setError] = useState('');

    const handleDecrypt = (e) => {
        e.preventDefault();
        setError('');
        setOutput(null);

        try {
            const bytes = CryptoJS.AES.decrypt(cipherInput.trim(), keyInput.trim());
            const decoded = bytes.toString(CryptoJS.enc.Utf8);
            if (!decoded) {
                throw new Error('Invalid cipher');
            }
            const parsed = JSON.parse(decoded);
            setOutput(parsed);
        } catch (err) {
            setError('ACCESS DENIED: INVALID KEY OR HASH');
            console.error(err);
        }
    };

    useEffect(() => {
        document.body.classList.add('admin-mode-active');
        document.documentElement.classList.add('admin-mode-active');
        return () => {
            document.body.classList.remove('admin-mode-active');
            document.documentElement.classList.remove('admin-mode-active');
        };
    }, []);

    return (
        <div className="secret-console admin-zone">
            <div className="secret-noise" aria-hidden="true" />
            <div className="secret-panel" role="main">
                <h1 className="secret-title">⚠ RESTRICTED ACCESS // DECRYPTION NODE</h1>
                <p className="secret-subtitle">Paste encrypted packets, authenticate with the master key, and reveal recruiter intel.</p>
                <form className="secret-form" onSubmit={handleDecrypt}>
                    <label htmlFor="cipher-input">Cipher Input</label>
                    <textarea
                        id="cipher-input"
                        className="secret-textarea"
                        rows="6"
                        placeholder="Paste Encrypted Transmission here..."
                        value={cipherInput}
                        onChange={(e) => setCipherInput(e.target.value)}
                        required
                    ></textarea>

                    <label htmlFor="key-input">Decryption Key</label>
                    <input
                        id="key-input"
                        type="password"
                        className="secret-input"
                        placeholder="Enter Master Key"
                        value={keyInput}
                        onChange={(e) => setKeyInput(e.target.value)}
                        required
                    />

                    <button type="submit" className="secret-button">[ DECRYPT_PAYLOAD ]</button>
                </form>

                {error && <p className="secret-error" role="alert">ACCESS_DENIED // INTEGRITY FAILURE</p>}

                {output && (
                    <div className="secret-output" role="region" aria-live="polite">
                        <div className="secret-banner">[ ACCESS GRANTED: INTEGRITY VERIFIED ]</div>
                        <div className="secret-metadata-grid">
                            <div className="intel-tile">
                                <span className="label"><User size={16} /> SENDER</span>
                                <p>{output.sender}</p>
                            </div>
                            <div className="intel-tile">
                                <span className="label"><Mail size={16} /> CONTACT</span>
                                <p>{output.contact}</p>
                            </div>
                            <div className="intel-tile">
                                <span className="label"><Globe size={16} /> ORIGIN NODE</span>
                                <p>{output.origin_ip}</p>
                            </div>
                        </div>
                        <div className="intel-timestamp">
                            <span>TIME STAMP</span>
                            <p>{output.timestamp}</p>
                        </div>
                        <hr className="intel-divider" />
                        <div className="secret-message">
                            <span>&gt;&gt; DECRYPTED_CONTENT_STREAM:</span>
                            <p className="typewriter">{output.message}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SecretConsole;
