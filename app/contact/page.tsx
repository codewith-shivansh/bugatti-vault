'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const dealers = [
  { city: 'Molsheim', country: 'France', type: 'Atelier & Headquarters' },
  { city: 'London', country: 'United Kingdom', type: 'Showroom' },
  { city: 'Dubai', country: 'UAE', type: 'Showroom' },
  { city: 'Monaco', country: 'Monaco', type: 'Boutique' },
  { city: 'New York', country: 'USA', type: 'Showroom' },
  { city: 'Tokyo', country: 'Japan', type: 'Showroom' },
  { city: 'Singapore', country: 'Singapore', type: 'Showroom' },
  { city: 'Riyadh', country: 'Saudi Arabia', type: 'Showroom' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    gsap.fromTo('#c-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
  }, [])

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.9rem 1.2rem',
    background: 'rgba(240,237,230,0.04)', border: '1px solid rgba(201,169,110,0.15)',
    color: 'var(--col-white)', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  return (
    <>
      <NavBar />
      <div style={{ minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)', padding: '8rem 4rem 0' }}>
        <Link id="c-back" href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--col-gold)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '4rem', opacity: 0 }}>← Return to Vault</Link>

        <ScrollReveal y={20}><div className="section-overline" style={{ marginBottom: '1.5rem' }}>Contact · Get in Touch</div></ScrollReveal>
        <ScrollReveal y={50} duration={1.8} delay={0.15}><h1 className="section-title" style={{ fontSize: 'clamp(3rem,7vw,7rem)', marginBottom: '3rem' }}>Reach<br /><em>Molsheim</em></h1></ScrollReveal>

        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          {/* Contact form */}
          <ScrollReveal y={30} style={{ flex: 1, minWidth: '340px' }}>
            {!sent ? (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
                <input placeholder="Full Name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required style={inputStyle} onFocus={e => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')} onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')} />
                <input type="email" placeholder="Email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required style={inputStyle} onFocus={e => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')} onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')} />
                <input placeholder="Subject" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} required style={inputStyle} onFocus={e => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')} onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')} />
                <textarea placeholder="Your message" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required rows={5} style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')} onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')} />
                <button type="submit" className="cta-btn" style={{ alignSelf: 'flex-start' }}><span>Send Message</span></button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ width: 56, height: 56, border: '1px solid rgba(201,169,110,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}><span style={{ color: 'var(--col-gold)', fontSize: '1.5rem' }}>✓</span></div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, marginBottom: '0.8rem' }}>Message Sent</div>
                <p className="section-body" style={{ textAlign: 'center', margin: '0 auto' }}>Our team will respond within 48 hours.</p>
              </div>
            )}
          </ScrollReveal>

          {/* Info panel */}
          <ScrollReveal x={40} delay={0.2}>
            <div className="hud-panel" style={{ width: '320px' }}>
              <div className="light-sweep" />
              <div className="mono-label" style={{ marginBottom: '1.5rem' }}>HEADQUARTERS</div>
              {[['ADDRESS', '1 Château St Jean, 67120 Molsheim'], ['PHONE', '+33 3 88 04 94 00'], ['EMAIL', 'contact@bugatti.com'], ['HOURS', 'Mon–Fri 09:00–18:00 CET']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(201,169,110,0.08)' }}>
                  <span className="mono-label">{k}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--col-white-dim)', letterSpacing: '0.05em', textAlign: 'right', maxWidth: '180px' }}>{v}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Dealer network */}
        <ScrollReveal y={25}><div className="section-overline" style={{ marginBottom: '2rem' }}>Global Network · Find a Dealer</div></ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', marginBottom: '5rem' }}>
          {dealers.map((d, i) => (
            <ScrollReveal key={i} y={20} delay={i * 0.06}>
              <div className="hud-panel" style={{ padding: '1.5rem', transition: 'background 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(8,8,7,0.55)')}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 300, marginBottom: '0.3rem' }}>{d.city}</div>
                <div className="mono-label" style={{ marginBottom: '0.5rem' }}>{d.country}</div>
                <div className="mono-label" style={{ color: 'var(--col-gold-dim)' }}>{d.type}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
