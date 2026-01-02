import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Terminal } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SecretConsole from './components/SecretConsole';
import { about } from './data/content';

const PortfolioShell = ({ ctfUnlocked, showTerminal, setShowTerminal, canvasRef, termInputRef, terminalLines, cmd, setCmd, handleCommand, setCtfUnlocked }) => {
  return (
    <div className="bg-[var(--bg-main)] min-h-screen text-white selection:bg-[var(--accent)] selection:text-black">
      <canvas ref={canvasRef} aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
      <div className="bg-grid-fixed" aria-hidden="true"></div>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <button className="terminal-toggle" onClick={() => setShowTerminal(true)} aria-label="Open terminal">
        <Terminal size={22} />
      </button>
      <main id="main">
        <Hero />
        <About />
        <Projects unlocked={ctfUnlocked} />
        <Skills />
        <Contact />
      </main>
      {showTerminal && (
        <div className="terminal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowTerminal(false); }}>
          <div className="terminal-window" role="dialog" aria-modal="true" aria-label="Interactive terminal">
            <div className="terminal-header">
              <div className="terminal-lights">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="mono terminal-title">bash --restricted-shell</span>
              <button className="terminal-close" onClick={() => setShowTerminal(false)} aria-label="Close terminal">×</button>
            </div>
            <div className="terminal-output" id="terminal-output">
              {terminalLines.map((line, i) => {
                const entry = typeof line === 'string' ? { text: line } : line;
                return (
                  <div key={i} className={`terminal-line mono ${entry.variant || ''}`}>
                    {entry.text}
                  </div>
                );
              })}
            </div>
            <form className="terminal-input-row" onSubmit={(e) => { e.preventDefault(); handleCommand(cmd); setCmd(''); }}>
              <span className="terminal-prompt mono">user@cyber:~$</span>
              <input
                ref={termInputRef}
                value={cmd}
                onChange={(e) => setCmd(e.target.value)}
                className="terminal-input"
                type="text"
                aria-label="Terminal input"
                placeholder="Enter command"
              />
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

function AppContent() {
  const canvasRef = useRef(null);
  const [ctfUnlocked, setCtfUnlocked] = useState(() => {
    try { return localStorage.getItem('ctfUnlocked') === '1' } catch { return false }
  });
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [cmd, setCmd] = useState('');
  const termInputRef = useRef(null);

  useEffect(() => {
    try {
      const media = typeof window !== 'undefined' && 'matchMedia' in window ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
      if (media.matches) return;
      const canvas = canvasRef.current;
      if (!canvas || !canvas.getContext) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let animationId;
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      let width = 0, height = 0;
      let fontSize = 16;
      let columns = 0;
      let drops = [];
      const chars = '01';

      const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        fontSize = Math.max(14, Math.min(18, Math.floor(width / 80)));
        columns = Math.floor(width / fontSize);
        drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * height / fontSize));
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fillRect(0, 0, width, height);
      };

      const step = () => {
        ctx.fillStyle = 'rgba(0,0,0,0.06)';
        ctx.fillRect(0, 0, width, height);
        ctx.font = `${fontSize}px var(--font-mono)`;
        ctx.fillStyle = '#00ff41';
        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          ctx.fillText(text, x, y);
          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        animationId = requestAnimationFrame(step);
      };

      resize();
      step();
      window.addEventListener('resize', resize);
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resize);
      };
    } catch (e) { void e }
  }, []);
  useEffect(() => {
    window.setCtfUnlocked = (v) => {
      try { localStorage.setItem('ctfUnlocked', v ? '1' : '0') } catch (e) { void e }
      setCtfUnlocked(!!v)
      if (v) {
        try { document.documentElement.style.setProperty('--accent', '#00ff9b') } catch (e) { void e }
      }
    }
    return () => { delete window.setCtfUnlocked }
  }, [])

  const normalizeLine = (line) => (typeof line === 'string' ? { text: line } : line);

  useEffect(() => {
    if (showTerminal) {
      setTerminalLines([
        'Initializing secure connection...',
        'access_granted: guest',
        "Type 'help' for options."
      ].map(normalizeLine));
      if (termInputRef.current) {
        setTimeout(() => termInputRef.current?.focus(), 100);
      }
    }
  }, [showTerminal]);

  const append = (lines) => {
    const payload = (Array.isArray(lines) ? lines : [lines]).map(normalizeLine);
    setTerminalLines((prev) => [...prev, ...payload]);
  };

  const handleCommand = (raw) => {
    const normalizedInput = raw.trim();
    if (!normalizedInput) return;
    const command = normalizedInput.toLowerCase();
    append(`$ ${normalizedInput}`);
    if (command === 'help') {
      append([
        'Available commands:',
        '  help                - List commands',
        "  cat about.txt      - Show bio",
        "  ./projects.sh      - Navigate to projects",
        "  ping google.com    - Fake ping",
      ]);
      return;
    }
    if (command === 'cat about.txt') {
      append(about.description);
      return;
    }
    if (command === 'sudo' || command.startsWith('sudo ')) {
      append({ text: 'PERMISSION DENIED: You are not root.', variant: 'error' });
      return;
    }
    if (command === 'decrypt') {
      append({ text: 'Opening secure decrypt console…', variant: 'info' });
      window.location.href = '/sys-admin';
      return;
    }
    if (command === './projects.sh') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      append('Navigating to projects…');
      return;
    }
    if (command.startsWith('ping')) {
      append([
        'PING google.com (142.250.72.14): 56 data bytes',
        '64 bytes from google.com: icmp_seq=0 ttl=56 time=18.3 ms',
        '64 bytes from google.com: icmp_seq=1 ttl=56 time=19.1 ms',
        '64 bytes from google.com: icmp_seq=2 ttl=56 time=17.8 ms',
        '64 bytes from google.com: icmp_seq=3 ttl=56 time=18.9 ms',
        '--- google.com ping statistics ---',
        '4 packets transmitted, 4 received, 0% packet loss',
      ]);
      return;
    }
    append(`command not found: ${normalizedInput}`);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PortfolioShell
            ctfUnlocked={ctfUnlocked}
            showTerminal={showTerminal}
            setShowTerminal={setShowTerminal}
            canvasRef={canvasRef}
            termInputRef={termInputRef}
            terminalLines={terminalLines}
            cmd={cmd}
            setCmd={setCmd}
            handleCommand={handleCommand}
            setCtfUnlocked={setCtfUnlocked}
          />
        }
      />
      <Route path="/sys-admin" element={<SecretConsole />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
