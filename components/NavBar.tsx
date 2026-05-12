'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  return (
    <nav ref={navRef} style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2rem 3.5rem',
      opacity: 0,
    }}>
      {/* Left: Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: 36, height: 36,
          border: '1px solid rgba(201,169,110,0.6)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ color: '#c9a96e', fontSize: '0.65rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>EB</span>
        </div>
        <span style={{
          color: '#f0ede6',
          fontSize: '0.7rem',
          letterSpacing: '0.35em',
          fontFamily: 'var(--font-ui)',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}>BUGATTI</span>
      </div>

      {/* Center: Title */}
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(240,237,230,0.4)',
        fontSize: '0.6rem',
        letterSpacing: '0.5em',
        fontFamily: 'var(--font-ui)',
        textTransform: 'uppercase',
      }}>
        Unveiling Ceremony
      </div>

      {/* Right: Links */}
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {['Heritage', 'Models', 'Atelier'].map((item) => (
          <button key={item} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(240,237,230,0.5)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            fontFamily: 'var(--font-ui)',
            textTransform: 'uppercase',
            transition: 'color 0.4s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c9a96e')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,230,0.5)')}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  )
}
