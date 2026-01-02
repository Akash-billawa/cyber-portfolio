import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)

try {
  const banner = '\n%cCTF Challenge:%c Find the hidden FLAG and submit it.\n%cHint:%c View source (index.html) or check console.\n%cSubmit:%c submitFlag(\'FLAG{...}\')\n'
  console.log(banner, 'color:#00ff41;font-weight:700;', 'color:#a0a0a0;', 'color:#00ff41;font-weight:700;', 'color:#a0a0a0;', 'color:#00ff41;font-weight:700;', 'color:#a0a0a0;')
  window.submitFlag = (value) => {
    const ok = typeof value === 'string' && value.trim() === 'FLAG{matrix_unlocked}'
    if (ok) {
      localStorage.setItem('ctfUnlocked', '1')
      if (typeof window.setCtfUnlocked === 'function') window.setCtfUnlocked(true)
      console.log('%cFlag accepted. Secret unlocked.', 'color:#00ff41;font-weight:700;')
    } else {
      console.log('%cIncorrect flag. Try again.', 'color:#ff0000;font-weight:700;')
    }
  }
} catch (e) { void e }
