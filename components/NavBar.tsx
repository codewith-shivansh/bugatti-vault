'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  const links = [
    { label: 'Heritage', href: '/heritage' },
    { label: 'Models', href: '/models' },
    { label: 'Atelier', href: '/atelier' },
  ]

  return (
    <nav ref={navRef} style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem 3.5rem',
      opacity: 0,
      background: 'linear-gradient(180deg, var(--col-bg) 0%, transparent 100%)',
    }}>
      {/* Left: Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <div style={{
          width: 36, height: 36,
          border: '1px solid var(--col-gold-dim)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ color: 'var(--col-gold)', fontSize: '0.65rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>EB</span>
        </div>
        <span style={{
          color: 'var(--col-white)',
          fontSize: '0.7rem',
          letterSpacing: '0.35em',
          fontFamily: 'var(--font-ui)',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}>BUGATTI</span>
      </Link>

      {/* Center: Title */}
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        color: 'var(--col-white-dim)',
        fontSize: '0.6rem',
        letterSpacing: '0.5em',
        fontFamily: 'var(--font-ui)',
        textTransform: 'uppercase',
        opacity: 0.5,
      }}>
        Unveiling Ceremony
      </div>

      {/* Right: Links + Login */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map((item) => (
          <Link key={item.label} href={item.href} style={{
            background: 'none', border: 'none',
            color: 'var(--col-white-dim)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            fontFamily: 'var(--font-ui)',
            textTransform: 'uppercase',
            transition: 'color 0.4s ease',
            textDecoration: 'none',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--col-gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--col-white-dim)')}
          >
            {item.label}
          </Link>
        ))}

        {/* Divider */}
        <div style={{ width: '1px', height: '18px', background: 'var(--col-white-faint)' }} />

        {/* Login */}
        <Link href="/login" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.5rem 1.2rem',
          border: '1px solid var(--col-gold-dim)',
          color: 'var(--col-gold)',
          fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'all 0.4s ease',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--col-gold)'
            e.currentTarget.style.color = 'var(--col-bg)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--col-gold)'
          }}
        >
          Sign In
        </Link>
      </div>
    </nav>
  )
}
