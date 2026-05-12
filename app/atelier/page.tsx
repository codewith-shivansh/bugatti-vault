'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import ScrollReveal from '@/components/ScrollReveal'

const materials = [
  { name: 'Carbon Fibre Weave', detail: 'Aerospace-grade CFRP with visible twill pattern, hand-laid in Molsheim.', icon: '◈' },
  { name: 'Polished Aluminium', detail: 'Mirror-finished aluminium accents, diamond-cut and hand-polished.', icon: '◇' },
  { name: 'Full-Grain Leather', detail: 'Tanneries in southern France, selected hides aged 18 months.', icon: '◎' },
  { name: 'Titanium Hardware', detail: 'Grade 5 titanium fasteners and structural components, 40% lighter than steel.', icon: '⬡' },
  { name: 'Alcantara', detail: 'Italian micro-suede, precision-cut for every surface contour.', icon: '◐' },
  { name: 'Sapphire Crystal', detail: 'Instrument cluster covered in scratch-proof sapphire, polished to 0.2μm.', icon: '◆' },
]

const process_steps = [
  { step: '01', title: 'Consultation', desc: 'Meet our atelier specialists. Define your vision, select your palette.' },
  { step: '02', title: 'Design', desc: '3D rendering of your bespoke specification. Refine every detail.' },
  { step: '03', title: 'Commission', desc: 'Your order enters production at the Molsheim atelier.' },
  { step: '04', title: 'Handcraft', desc: '18 months of meticulous hand-assembly by master artisans.' },
  { step: '05', title: 'Delivery', desc: 'A private ceremony. Your Bugatti is revealed to you alone.' },
]

export default function AtelierPage() {
  useEffect(() => {
    gsap.fromTo('#a-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
  }, [])

  return (
    <>
      <NavBar />
      <div style={{
        minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
        padding: '8rem 4rem 6rem',
      }}>
        <Link id="a-back" href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          color: 'var(--col-gold)', textDecoration: 'none',
          fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          marginBottom: '4rem', opacity: 0,
        }}>← Return to Vault</Link>

        <ScrollReveal y={20}>
          <div className="section-overline" style={{ marginBottom: '1.5rem' }}>Craftsmanship · Materials & Bespoke</div>
        </ScrollReveal>

        <ScrollReveal y={50} duration={1.8} delay={0.15}>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', marginBottom: '2rem' }}>
            The<br /><em>Atelier</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal y={25} delay={0.3}>
          <p className="section-body" style={{ marginBottom: '5rem', maxWidth: '52ch' }}>
            In Molsheim, every Bugatti is born by hand. No two are identical.
            Each owner collaborates with our artisans to specify every detail — 
            from the grain direction of the leather to the finish of each titanium bolt.
          </p>
        </ScrollReveal>

        {/* Materials grid */}
        <ScrollReveal y={20}>
          <div className="section-overline" style={{ marginBottom: '2rem' }}>
            Materials · The Finest on Earth
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', maxWidth: '1000px', marginBottom: '5rem' }}>
          {materials.map((m, i) => (
            <ScrollReveal key={i} y={30} delay={i * 0.08}>
              <div className="hud-panel" style={{
                padding: '2rem', transition: 'all 0.4s ease', height: '100%',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.06)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(8,8,7,0.55)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="light-sweep" style={{ animationDelay: `${i * 0.7}s` }} />
                <div style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--col-gold)', opacity: 0.7 }}>{m.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.6rem', color: 'var(--col-white)' }}>{m.name}</div>
                <div className="hr-gold" style={{ margin: '0.6rem 0' }} />
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--col-white-dim)', lineHeight: 1.7, fontWeight: 300 }}>{m.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Commission process */}
        <ScrollReveal y={30}>
          <div className="section-overline" style={{ marginBottom: '1.5rem' }}>
            The Process · From Vision to Reality
          </div>
        </ScrollReveal>

        <ScrollReveal y={40} delay={0.15}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', marginBottom: '3rem' }}>
            Your <em>Journey</em>
          </h2>
        </ScrollReveal>

        <div style={{ maxWidth: '600px', marginBottom: '5rem' }}>
          {process_steps.map((s, i) => (
            <ScrollReveal key={i} x={-25} delay={i * 0.1}>
              <div style={{
                display: 'flex', gap: '2rem', padding: '1.5rem 0',
                borderBottom: '1px solid rgba(201,169,110,0.08)',
                transition: 'background 0.3s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: 'var(--col-gold)', minWidth: '40px', letterSpacing: '0.15em',
                  paddingTop: '0.3rem',
                }}>{s.step}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.4rem', color: 'var(--col-white)' }}>
                    {s.title}
                  </div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--col-white-dim)', lineHeight: 1.7, fontWeight: 300 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal y={30}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/configure" className="cta-btn" style={{ textDecoration: 'none' }}>
              <span>Begin Your Commission</span>
              <span style={{ fontSize: '0.9rem' }}>→</span>
            </Link>
            <Link href="/login" className="cta-btn" style={{ textDecoration: 'none', borderColor: 'var(--col-white-faint)', color: 'var(--col-white-dim)' }}>
              <span>Sign In for Exclusive Access</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}
