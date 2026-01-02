import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="site-footer border-t border-[var(--border)] bg-[var(--bg-main)]">
            <div className="container mx-auto px-6">
                <p className="footer-text">
                    // EST. 2025 // SYSTEM SECURE
                    <Heart size={14} className="ml-2 text-[var(--accent)] fill-[var(--accent)]" />
                    <span
                        className="sr-only"
                        aria-hidden="true"
                        dangerouslySetInnerHTML={{ __html: '<!-- NO TRESPASSING: /root-access route is monitored -->' }}
                    />
                    <span
                        className="footer-trigger"
                        role="button"
                        tabIndex={0}
                        onClick={() => { window.location.href = '/sys-admin'; }}
                        onKeyUp={(e) => { if (e.key === 'Enter') window.location.href = '/sys-admin'; }}
                    >
                        [π]
                    </span>
                </p>
                <form aria-hidden="true" className="sr-only" onSubmit={(e) => { e.preventDefault(); const v = e.target.flag?.value || ''; if (window.submitFlag) window.submitFlag(v); }}>
                    <label htmlFor="ctf-flag-input">CTF Flag</label>
                    <input id="ctf-flag-input" name="flag" type="text" placeholder="FLAG{...}" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
