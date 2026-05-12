'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

const models = [
  { name: 'Chiron', subtitle: 'The Ultimate Grand Tourer', hp: '1,500', speed: '420 km/h', year: '2016', desc: 'The definitive hypercar. Quad-turbocharged W16, 1,500 horsepower, handcrafted perfection.' },
  { name: 'Chiron Super Sport', subtitle: 'Longtail Velocity', hp: '1,600', speed: '440 km/h', year: '2021', desc: 'Extended body for reduced drag. The fastest road-legal Bugatti ever conceived.' },
  { name: 'Bolide', subtitle: 'Track-Only Weapon', hp: '1,850', speed: '500+ km/h', year: '2022', desc: 'Stripped to its essence. The W16 unleashed without restraint on the track.' },
  { name: 'Tourbillon', subtitle: 'The New Era', hp: '1,800', speed: '380+ km/h', year: '2024', desc: 'V16 hybrid architecture. A naturally aspirated masterpiece joined by three electric motors.' },
]

export default function ModelsPage() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#m-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('#m-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.8, ease: 'power3.out', delay: 0.5 })
      gsap.fromTo('.model-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2, delay: 0.9 })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} style={{
      minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
      padding: '6rem 4rem',
    }}>
      <Link id="m-back" href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
        color: 'var(--col-gold)', textDecoration: 'none',
        fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
        letterSpacing: '0.3em', textTransform: 'uppercase',
        marginBottom: '4rem', opacity: 0,
      }}>← Return to Vault</Link>

      <div className="section-overline" style={{ marginBottom: '1.5rem' }}>Collection · Current Lineup</div>
      <h1 id="m-title" className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', marginBottom: '4rem', opacity: 0 }}>
        The<br /><em>Lineup</em>
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2px' }}>
        {models.map((m, i) => (
          <div key={i} className="model-card hud-panel" style={{
            padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem',
            transition: 'background 0.4s ease', cursor: 'none', opacity: 0,
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(8,8,7,0.55)')}
          >
            <div className="light-sweep" style={{ animationDelay: `${i * 1.2}s` }} />
            <div className="mono-label" style={{ color: 'var(--col-gold)' }}>{m.year}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, lineHeight: 1 }}>{m.name}</div>
            <div className="mono-label" style={{ color: 'var(--col-white-dim)' }}>{m.subtitle}</div>
            <div className="hr-gold" />
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--col-white-dim)', lineHeight: 1.7, fontWeight: 300 }}>{m.desc}</p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: 'auto' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300 }}>{m.hp}</div>
                <div className="mono-label">Horsepower</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300 }}>{m.speed}</div>
                <div className="mono-label">Top Speed</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
