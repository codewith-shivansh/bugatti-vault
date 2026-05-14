'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  const primaryLinks = [
    { label: 'Heritage', href: '/heritage' },
    { label: 'Models', href: '/models' },
    { label: 'Atelier', href: '/atelier' },
  ]

  const moreLinks = [
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ]

  const linkStyle: React.CSSProperties = {
    color: 'var(--col-white-dim)',
    fontSize: '0.6rem',
    letterSpacing: '0.2em',
    fontFamily: 'var(--font-ui)',
    textTransform: 'uppercase',
    transition: 'color 0.4s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }

  return (
    <nav ref={navRef} style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.4rem 2.5rem',
      opacity: 0,
      background: 'linear-gradient(180deg, rgba(8,8,7,0.95) 0%, transparent 100%)',
    }}>
      {/* Left: Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', flexShrink: 0 }}>
        <div style={{
          width: 32, height: 32,
          border: '1px solid var(--col-gold-dim)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: 'var(--col-gold)', fontSize: '0.6rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>EB</span>
        </div>
        <span style={{
          color: 'var(--col-white)',
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          fontFamily: 'var(--font-ui)',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}>BUGATTI</span>
      </Link>

      {/* Center: primary nav links */}
      <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        {primaryLinks.map((item) => (
          <Link key={item.label} href={item.href} style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--col-gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--col-white-dim)')}
          >
            {item.label}
          </Link>
        ))}

        {/* More dropdown */}
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <button style={{
            ...linkStyle, background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '0.3rem', padding: 0,
          }}>
            More <span style={{ fontSize: '0.45rem', opacity: 0.6 }}>▾</span>
          </button>
          {menuOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
              paddingTop: '0.8rem',
            }}>
              <div style={{
                background: 'rgba(8,8,7,0.95)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(201,169,110,0.15)',
                padding: '0.8rem 0', minWidth: '140px',
                display: 'flex', flexDirection: 'column',
              }}>
                {moreLinks.map((item) => (
                <Link key={item.label} href={item.href} style={{
                  ...linkStyle, padding: '0.6rem 1.2rem',
                  display: 'block', fontSize: '0.55rem',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--col-gold)'; e.currentTarget.style.background = 'rgba(201,169,110,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--col-white-dim)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {item.label}
                </Link>
              ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Login */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: '1px', height: '16px', background: 'var(--col-white-faint)' }} />
        <Link href="/login" style={{
          display: 'inline-flex', alignItems: 'center',
          padding: '0.45rem 1rem',
          border: '1px solid var(--col-gold-dim)',
          color: 'var(--col-gold)',
          fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'all 0.4s ease',
          whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--col-gold)'; e.currentTarget.style.color = 'var(--col-bg)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--col-gold)' }}
        >
          Sign In
        </Link>
      </div>
    </nav>
  )
}
