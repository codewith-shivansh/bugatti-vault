'use client'
import { useState, useEffect } from 'react'
import gsap from 'gsap'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('bugatti-cookies')
    if (!accepted) {
      setTimeout(() => {
        setVisible(true)
        gsap.fromTo('#cookie-banner', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      }, 2000)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('bugatti-cookies', 'accepted')
    gsap.to('#cookie-banner', { y: 80, opacity: 0, duration: 0.5, ease: 'power2.in', onComplete: () => setVisible(false) })
  }

  if (!visible) return null

  return (
    <div id="cookie-banner" style={{
      position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
      zIndex: 9000, maxWidth: '600px', width: 'calc(100% - 4rem)', opacity: 0,
      background: 'rgba(8,8,7,0.85)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(201,169,110,0.15)', padding: '1.5rem 2rem',
      display: 'flex', alignItems: 'center', gap: '2rem',
    }}>
      <p style={{
        fontFamily: 'var(--font-ui)', fontSize: '0.7rem',
        color: 'var(--col-white-dim)', lineHeight: 1.6, fontWeight: 300, flex: 1,
      }}>
        We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
        <button onClick={accept} style={{
          padding: '0.6rem 1.5rem', background: 'var(--col-gold)',
          color: 'var(--col-bg)', border: 'none',
          fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
          letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
        }}>Accept</button>
        <button onClick={accept} style={{
          padding: '0.6rem 1.5rem', background: 'transparent',
          color: 'var(--col-white-dim)', border: '1px solid rgba(201,169,110,0.2)',
          fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
          letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
        }}>Decline</button>
      </div>
    </div>
  )
}
