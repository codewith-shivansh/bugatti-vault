'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function HeritagePage() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#h-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('#h-overline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.4 })
      gsap.fromTo('#h-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.8, ease: 'power3.out', delay: 0.6 })
      gsap.fromTo('#h-body', { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.out', delay: 1 })
      gsap.fromTo('.timeline-item', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15, delay: 1.2 })
      gsap.fromTo('#h-quote', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 2 })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  const timeline = [
    { year: '1909', event: 'Ettore Bugatti founds the company in Molsheim, Alsace' },
    { year: '1924', event: 'Type 35 dominates Grand Prix racing — over 2,000 victories' },
    { year: '1936', event: 'Type 57SC Atlantic — only four ever made, automotive art' },
    { year: '1991', event: 'EB110 — the first modern supercar to break 340 km/h' },
    { year: '2005', event: 'Veyron 16.4 — 1,001 HP, redefining the hypercar' },
    { year: '2016', event: 'Chiron — 1,500 HP, 420 km/h, the ultimate grand tourer' },
    { year: '2024', event: 'Tourbillon — a new era begins, V16 hybrid powertrain' },
  ]

  return (
    <div ref={mainRef} style={{
      minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
      display: 'flex', flexDirection: 'column', padding: '6rem 4rem',
    }}>
      {/* Back button */}
      <Link id="h-back" href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
        color: 'var(--col-gold)', textDecoration: 'none',
        fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
        letterSpacing: '0.3em', textTransform: 'uppercase',
        marginBottom: '4rem', opacity: 0,
      }}>
        ← Return to Vault
      </Link>

      <div id="h-overline" className="section-overline" style={{ marginBottom: '1.5rem', opacity: 0 }}>
        Legacy · 1909 – Present
      </div>
      <h1 id="h-title" className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', marginBottom: '2rem', opacity: 0 }}>
        A Legacy<br /><em>Forged in Speed</em>
      </h1>
      <p id="h-body" className="section-body" style={{ marginBottom: '4rem', maxWidth: '52ch', opacity: 0 }}>
        For over a century, Bugatti has stood at the pinnacle of automotive excellence.
        Every era has produced a machine that redefined what was believed to be possible — 
        a relentless pursuit of perfection in speed, luxury, and engineering artistry.
      </p>

      {/* Timeline */}
      <div style={{ maxWidth: '700px', marginBottom: '5rem' }}>
        {timeline.map((item, i) => (
          <div key={i} className="timeline-item" style={{
            display: 'flex', gap: '2rem', padding: '1.2rem 0',
            borderBottom: '1px solid rgba(201,169,110,0.1)', opacity: 0,
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300,
              color: 'var(--col-gold)', minWidth: '100px',
            }}>{item.year}</span>
            <span style={{
              fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 300,
              color: 'var(--col-white-dim)', lineHeight: 1.7, paddingTop: '0.6rem',
            }}>{item.event}</span>
          </div>
        ))}
      </div>

      {/* Quote */}
      <blockquote id="h-quote" style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic',
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300,
        color: 'var(--col-chrome)', maxWidth: '36ch', lineHeight: 1.5,
        borderLeft: '2px solid var(--col-gold)', paddingLeft: '2rem',
        opacity: 0,
      }}>
        "Nothing is too beautiful, nothing is too expensive."
        <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.8rem', fontStyle: 'normal', letterSpacing: '0.2em', color: 'var(--col-gold-dim)' }}>
          — ETTORE BUGATTI
        </span>
      </blockquote>
    </div>
  )
}
