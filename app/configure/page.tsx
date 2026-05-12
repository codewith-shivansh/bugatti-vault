'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

const options = {
  exterior: ['Nocturne Black', 'Atlantic Blue', 'Italian Red', 'Quartz White', 'Jet Grey'],
  interior: ['Cognac Leather', 'Beluga Black', 'Gaucho Brown', 'Ivory', 'Deep Blue'],
  wheels: ['20" Sport Silver', '20" Black Diamond', '21" Forged Carbon', '20" Polished Titanium'],
  trim: ['Exposed Carbon', 'Brushed Aluminium', 'Piano Black', 'Open-Pore Walnut'],
}

export default function ConfigurePage() {
  const mainRef = useRef<HTMLDivElement>(null)
  const [selections, setSelections] = useState({
    exterior: options.exterior[0],
    interior: options.interior[0],
    wheels: options.wheels[0],
    trim: options.trim[0],
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#c-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('#c-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.8, ease: 'power3.out', delay: 0.5 })
      gsap.fromTo('.config-section', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, delay: 0.9 })
      gsap.fromTo('#c-summary', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1.2, delay: 1.4 })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} style={{
      minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
      padding: '6rem 4rem',
    }}>
      <Link id="c-back" href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
        color: 'var(--col-gold)', textDecoration: 'none',
        fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
        letterSpacing: '0.3em', textTransform: 'uppercase',
        marginBottom: '4rem', opacity: 0,
      }}>← Return to Vault</Link>

      <div className="section-overline" style={{ marginBottom: '1.5rem' }}>Bespoke · Personal Commission</div>
      <h1 id="c-title" className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', marginBottom: '3rem', opacity: 0 }}>
        Configure<br /><em>Your Vision</em>
      </h1>

      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        {/* Left: Options */}
        <div style={{ flex: 1, minWidth: '340px' }}>
          {(Object.entries(options) as [keyof typeof options, string[]][]).map(([category, opts]) => (
            <div key={category} className="config-section" style={{ marginBottom: '2.5rem', opacity: 0 }}>
              <div className="mono-label" style={{ color: 'var(--col-gold)', marginBottom: '1rem' }}>
                {category.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {opts.map(opt => (
                  <button key={opt} onClick={() => setSelections(p => ({ ...p, [category]: opt }))} style={{
                    padding: '0.6rem 1.2rem',
                    border: `1px solid ${selections[category] === opt ? 'var(--col-gold)' : 'rgba(240,237,230,0.12)'}`,
                    background: selections[category] === opt ? 'rgba(201,169,110,0.12)' : 'transparent',
                    color: selections[category] === opt ? 'var(--col-gold)' : 'var(--col-white-dim)',
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    letterSpacing: '0.1em', cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}>{opt}</button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div id="c-summary" className="hud-panel" style={{ width: '340px', alignSelf: 'flex-start', opacity: 0 }}>
          <div className="light-sweep" />
          <div className="mono-label" style={{ marginBottom: '1.5rem' }}>YOUR SPECIFICATION</div>
          {Object.entries(selections).map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7rem 0', borderBottom: '1px solid rgba(201,169,110,0.08)' }}>
              <span className="mono-label">{k.toUpperCase()}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--col-gold)', letterSpacing: '0.1em' }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop: '2rem' }}>
            <button className="cta-btn" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Request Commission</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
