'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const items = [
  { cat: 'TIMEPIECES', title: 'Chiron Tourbillon Watch', desc: 'With Jacob & Co. — a W16-inspired mechanical marvel. Limited to 50 pieces.', price: 'From €280,000' },
  { cat: 'HOME', title: 'Home Collection', desc: 'Carbon fibre furniture crafted with Italian artisans for the discerning interior.', price: 'By Commission' },
  { cat: 'FASHION', title: 'Capsule Collection', desc: 'Premium Italian apparel. Minimal, precise, luxurious.', price: 'From €450' },
  { cat: 'YACHTS', title: 'Niniette 66', desc: 'A 66-foot sport yacht with Palmer Johnson. The Bugatti Line on water.', price: 'From €3.2M' },
  { cat: 'LUGGAGE', title: 'Chiron Luggage Set', desc: 'Bespoke leather luggage engineered to fit the Chiron perfectly.', price: 'From €18,000' },
  { cat: 'EXPERIENCES', title: 'Driving Experience', desc: 'Private track days at exclusive circuits. Drive every model.', price: 'By Invitation' },
]

export default function LifestylePage() {
  useEffect(() => {
    gsap.fromTo('#l-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
  }, [])

  return (
    <>
      <NavBar />
      <div style={{ minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)', padding: '8rem 4rem 0' }}>
        <Link id="l-back" href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--col-gold)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '4rem', opacity: 0 }}>← Return to Vault</Link>

        <ScrollReveal y={20}><div className="section-overline" style={{ marginBottom: '1.5rem' }}>Lifestyle · Beyond the Machine</div></ScrollReveal>
        <ScrollReveal y={50} duration={1.8} delay={0.15}><h1 className="section-title" style={{ fontSize: 'clamp(3rem,7vw,8rem)', marginBottom: '2rem' }}>The Bugatti<br /><em>World</em></h1></ScrollReveal>
        <ScrollReveal y={25} delay={0.3}><p className="section-body" style={{ marginBottom: '4rem', maxWidth: '52ch' }}>The Bugatti lifestyle extends beyond the road — from haute horlogerie to bespoke interiors, ocean yachts to exclusive driving experiences.</p></ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px', marginBottom: '5rem' }}>
          {items.map((item, i) => (
            <ScrollReveal key={i} y={35} delay={i * 0.1}>
              <div className="hud-panel" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.4s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.06)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(8,8,7,0.55)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div className="light-sweep" style={{ animationDelay: `${i * 0.9}s` }} />
                <div className="mono-label" style={{ color: 'var(--col-gold)', marginBottom: '1.2rem' }}>{item.cat}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.2 }}>{item.title}</h3>
                <div className="hr-gold" style={{ margin: '0.5rem 0 1rem' }} />
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--col-white-dim)', lineHeight: 1.7, fontWeight: 300, flex: 1 }}>{item.desc}</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--col-gold)', letterSpacing: '0.1em' }}>{item.price}</span>
                  <span className="mono-label" style={{ color: 'var(--col-white-faint)' }}>DISCOVER →</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
