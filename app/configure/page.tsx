'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'

const options = {
  exterior: ['Nocturne Black', 'Atlantic Blue', 'Italian Red', 'Quartz White', 'Jet Grey', 'Racing Green'],
  interior: ['Cognac Leather', 'Beluga Black', 'Gaucho Brown', 'Ivory', 'Deep Blue', 'Crimson'],
  wheels: ['20" Sport Silver', '20" Black Diamond', '21" Forged Carbon', '20" Polished Titanium'],
  trim: ['Exposed Carbon', 'Brushed Aluminium', 'Piano Black', 'Open-Pore Walnut'],
}

const colorSwatches: Record<string, string> = {
  'Nocturne Black': '#0a0a08', 'Atlantic Blue': '#1a2a45', 'Italian Red': '#6b1a1a',
  'Quartz White': '#e8e4da', 'Jet Grey': '#3a3a38', 'Racing Green': '#1a3a24',
  'Cognac Leather': '#8b5a2b', 'Beluga Black': '#1a1a18', 'Gaucho Brown': '#6b4a2a',
  'Ivory': '#e8dcc8', 'Deep Blue': '#1a2a4a', 'Crimson': '#6b1a2a',
}

export default function ConfigurePage() {
  const [selections, setSelections] = useState({
    exterior: options.exterior[0],
    interior: options.interior[0],
    wheels: options.wheels[0],
    trim: options.trim[0],
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    gsap.fromTo('#c-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
  }, [])

  const handleCommission = () => {
    setSubmitted(true)
    setTimeout(() => {
      gsap.fromTo('#commission-success', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' })
    }, 100)
  }

  return (
    <>
      <NavBar />
      <div style={{
        minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
        padding: '8rem 4rem 6rem',
      }}>
        <Link id="c-back" href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          color: 'var(--col-gold)', textDecoration: 'none',
          fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          marginBottom: '4rem', opacity: 0,
        }}>← Return to Vault</Link>

        <ScrollReveal y={20}>
          <div className="section-overline" style={{ marginBottom: '1.5rem' }}>Bespoke · Personal Commission</div>
        </ScrollReveal>

        <ScrollReveal y={50} duration={1.8} delay={0.15}>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', marginBottom: '3rem' }}>
            Configure<br /><em>Your Vision</em>
          </h1>
        </ScrollReveal>

        {!submitted ? (
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            {/* Left: Options */}
            <div style={{ flex: 1, minWidth: '340px' }}>
              {(Object.entries(options) as [keyof typeof options, string[]][]).map(([category, opts], ci) => (
                <ScrollReveal key={category} y={25} delay={ci * 0.1}>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <div className="mono-label" style={{ color: 'var(--col-gold)', marginBottom: '1rem' }}>
                      {category.toUpperCase()}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {opts.map(opt => (
                        <button key={opt} onClick={() => setSelections(p => ({ ...p, [category]: opt }))} style={{
                          padding: '0.6rem 1.2rem',
                          border: `1px solid ${selections[category] === opt ? 'var(--col-gold)' : 'var(--col-white-faint)'}`,
                          background: selections[category] === opt ? 'rgba(201,169,110,0.12)' : 'transparent',
                          color: selections[category] === opt ? 'var(--col-gold)' : 'var(--col-white-dim)',
                          fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                          letterSpacing: '0.1em', cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                        }}>
                          {colorSwatches[opt] && (
                            <div style={{
                              width: 12, height: 12, borderRadius: '50%',
                              background: colorSwatches[opt],
                              border: '1px solid rgba(255,255,255,0.2)',
                            }} />
                          )}
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Right: Summary */}
            <ScrollReveal x={40} delay={0.3}>
              <div className="hud-panel" style={{ width: '360px', alignSelf: 'flex-start', position: 'sticky', top: '8rem' }}>
                <div className="light-sweep" />
                <div className="mono-label" style={{ marginBottom: '1.5rem' }}>YOUR SPECIFICATION</div>
                {Object.entries(selections).map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.7rem 0', borderBottom: '1px solid rgba(201,169,110,0.08)' }}>
                    <span className="mono-label">{k.toUpperCase()}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {colorSwatches[v] && (
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: colorSwatches[v], border: '1px solid rgba(255,255,255,0.15)' }} />
                      )}
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--col-gold)', letterSpacing: '0.1em' }}>{v}</span>
                    </div>
                  </div>
                ))}

                <div className="hr-gold" style={{ margin: '1.5rem 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span className="mono-label">ESTIMATED DELIVERY</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--col-gold)', letterSpacing: '0.1em' }}>18–24 MONTHS</span>
                </div>

                <button onClick={handleCommission} className="cta-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Request Commission</span>
                </button>

                <div className="mono-label" style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--col-white-faint)', fontSize: '0.5rem' }}>
                  PRICE AVAILABLE UPON REQUEST
                </div>
              </div>
            </ScrollReveal>
          </div>
        ) : (
          <div id="commission-success" style={{ textAlign: 'center', maxWidth: '500px', margin: '4rem auto', opacity: 0 }}>
            <div style={{
              width: 80, height: 80, border: '1px solid rgba(201,169,110,0.5)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 2rem',
            }}>
              <span style={{ color: 'var(--col-gold)', fontSize: '2rem' }}>✓</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, marginBottom: '1rem' }}>
              Commission <em style={{ color: 'var(--col-chrome)' }}>Submitted</em>
            </h2>
            <p className="section-body" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
              Your bespoke specification has been received by our atelier in Molsheim.
              A personal specialist will contact you within 48 hours.
            </p>
            <Link href="/" className="cta-btn" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              <span>Return to Vault</span>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
