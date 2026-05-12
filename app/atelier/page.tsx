'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

const materials = [
  { name: 'Carbon Fibre Weave', detail: 'Aerospace-grade CFRP with visible twill pattern, hand-laid in Molsheim' },
  { name: 'Polished Aluminium', detail: 'Mirror-finished aluminium accents, diamond-cut and hand-polished' },
  { name: 'Full-Grain Leather', detail: 'Tanneries in southern France, selected hides aged 18 months' },
  { name: 'Titanium Hardware', detail: 'Grade 5 titanium fasteners and structural components, 40% lighter than steel' },
  { name: 'Alcantara', detail: 'Italian micro-suede, precision-cut for every surface contour' },
  { name: 'Sapphire Crystal', detail: 'Instrument cluster covered in scratch-proof sapphire, polished to 0.2μm' },
]

export default function AtelierPage() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#a-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('#a-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.8, ease: 'power3.out', delay: 0.5 })
      gsap.fromTo('#a-body', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.9 })
      gsap.fromTo('.mat-item', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 1.2 })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} style={{
      minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
      padding: '6rem 4rem',
    }}>
      <Link id="a-back" href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
        color: 'var(--col-gold)', textDecoration: 'none',
        fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
        letterSpacing: '0.3em', textTransform: 'uppercase',
        marginBottom: '4rem', opacity: 0,
      }}>← Return to Vault</Link>

      <div className="section-overline" style={{ marginBottom: '1.5rem' }}>Craftsmanship · Materials & Bespoke</div>
      <h1 id="a-title" className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', marginBottom: '2rem', opacity: 0 }}>
        The<br /><em>Atelier</em>
      </h1>
      <p id="a-body" className="section-body" style={{ marginBottom: '4rem', maxWidth: '52ch', opacity: 0 }}>
        In Molsheim, every Bugatti is born by hand. No two are identical.
        Each owner collaborates with our artisans to specify every detail — 
        from the grain direction of the leather to the finish of each titanium bolt.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', maxWidth: '1000px' }}>
        {materials.map((m, i) => (
          <div key={i} className="mat-item hud-panel" style={{ padding: '2rem', opacity: 0, transition: 'background 0.4s ease' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(8,8,7,0.55)')}
          >
            <div className="light-sweep" style={{ animationDelay: `${i * 0.7}s` }} />
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.6rem' }}>{m.name}</div>
            <div className="hr-gold" style={{ margin: '0.6rem 0' }} />
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--col-white-dim)', lineHeight: 1.7, fontWeight: 300 }}>{m.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
