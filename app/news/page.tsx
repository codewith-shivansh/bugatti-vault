'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const articles = [
  {
    date: 'May 2026',
    category: 'UNVEILING',
    title: 'The Tourbillon: A New Chapter Begins',
    excerpt: 'Bugatti unveils the successor to the Chiron — a naturally aspirated V16 hybrid masterpiece that redefines the boundaries of automotive engineering.',
    featured: true,
  },
  {
    date: 'April 2026',
    category: 'MOTORSPORT',
    title: 'Bolide Completes First Track Validation',
    excerpt: 'The track-only Bolide achieves a record-breaking lap at the Circuit de la Sarthe during its final validation phase.',
    featured: false,
  },
  {
    date: 'March 2026',
    category: 'HERITAGE',
    title: 'Restoring the Lost Atlantic',
    excerpt: 'Bugatti\'s heritage division embarks on a years-long journey to reconstruct the legendary "La Voiture Noire" Type 57SC Atlantic.',
    featured: false,
  },
  {
    date: 'February 2026',
    category: 'ATELIER',
    title: 'Sur Mesure: The Art of Personalisation',
    excerpt: 'Inside the Molsheim atelier, where each Bugatti is handcrafted to the owner\'s singular vision. A look at the Sur Mesure program.',
    featured: false,
  },
  {
    date: 'January 2026',
    category: 'DESIGN',
    title: 'The Bugatti Line: Form as Philosophy',
    excerpt: 'Chief designer Achim Anscheidt on the evolution of the Bugatti design language from Ettore\'s original vision to the Tourbillon.',
    featured: false,
  },
  {
    date: 'December 2025',
    category: 'LIFESTYLE',
    title: 'Bugatti x Jacob & Co. Timepiece',
    excerpt: 'The Bugatti Chiron Tourbillon watch — a mechanical masterpiece mirroring the W16 engine in miniature, limited to 50 pieces.',
    featured: false,
  },
]

export default function NewsPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    gsap.fromTo('#n-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
  }, [])

  return (
    <>
      <NavBar />
      <div style={{
        minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
        padding: '8rem 4rem 0',
      }}>
        <Link id="n-back" href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          color: 'var(--col-gold)', textDecoration: 'none',
          fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          marginBottom: '4rem', opacity: 0,
        }}>← Return to Vault</Link>

        <ScrollReveal y={20}>
          <div className="section-overline" style={{ marginBottom: '1.5rem' }}>Journal · Latest from Molsheim</div>
        </ScrollReveal>

        <ScrollReveal y={50} duration={1.8} delay={0.15}>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', marginBottom: '4rem' }}>
            The<br /><em>Journal</em>
          </h1>
        </ScrollReveal>

        {/* Featured article */}
        <ScrollReveal y={40}>
          <div className="hud-panel" style={{
            padding: '3rem', marginBottom: '2px', position: 'relative',
            transition: 'background 0.4s ease', cursor: 'pointer',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(8,8,7,0.55)')}
          >
            <div className="light-sweep" />
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span className="mono-label" style={{ color: 'var(--col-gold)' }}>{articles[0].category}</span>
              <div style={{ width: '1px', height: '12px', background: 'var(--col-white-faint)' }} />
              <span className="mono-label">{articles[0].date}</span>
              <div style={{ width: '1px', height: '12px', background: 'var(--col-white-faint)' }} />
              <span className="mono-label" style={{ color: 'var(--col-gold-dim)' }}>FEATURED</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              {articles[0].title}
            </h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'var(--col-white-dim)', lineHeight: 1.8, fontWeight: 300, maxWidth: '60ch' }}>
              {articles[0].excerpt}
            </p>
            <div style={{ marginTop: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--col-gold)', letterSpacing: '0.3em' }}>READ ARTICLE →</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Article grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px', marginBottom: '5rem' }}>
          {articles.slice(1).map((a, i) => (
            <ScrollReveal key={i} y={30} delay={i * 0.1}>
              <div className="hud-panel" style={{
                padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column',
                transition: 'background 0.4s ease', cursor: 'pointer',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(8,8,7,0.55)')}
              >
                <div className="light-sweep" style={{ animationDelay: `${i * 0.8}s` }} />
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}>
                  <span className="mono-label" style={{ color: 'var(--col-gold)' }}>{a.category}</span>
                  <span className="mono-label">{a.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.2, color: 'var(--col-white)' }}>
                  {a.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--col-white-dim)', lineHeight: 1.7, fontWeight: 300, flex: 1 }}>
                  {a.excerpt}
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--col-gold-dim)', letterSpacing: '0.3em' }}>READ MORE →</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter signup */}
        <ScrollReveal y={30}>
          <div style={{
            padding: '4rem', textAlign: 'center',
            borderTop: '1px solid rgba(201,169,110,0.1)',
            borderBottom: '1px solid rgba(201,169,110,0.1)',
            marginBottom: '0',
          }}>
            <div className="section-overline" style={{ marginBottom: '1.5rem' }}>Newsletter · Stay Informed</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, marginBottom: '1rem' }}>
              Join the <em style={{ color: 'var(--col-chrome)' }}>Inner Circle</em>
            </h2>
            <p className="section-body" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
              Receive exclusive news, first-look reveals, and invitations to private events.
            </p>
            {!subscribed ? (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true) }}
                style={{ display: 'flex', gap: '0', maxWidth: '450px', margin: '0 auto' }}>
                <input
                  type="email" placeholder="Your email address" value={email}
                  onChange={e => setEmail(e.target.value)} required
                  style={{
                    flex: 1, padding: '0.9rem 1.2rem',
                    background: 'rgba(240,237,230,0.04)',
                    border: '1px solid rgba(201,169,110,0.15)',
                    borderRight: 'none',
                    color: 'var(--col-white)',
                    fontFamily: 'var(--font-ui)', fontSize: '0.8rem',
                    outline: 'none',
                  }}
                />
                <button type="submit" style={{
                  padding: '0.9rem 2rem', background: 'var(--col-gold)',
                  color: 'var(--col-bg)', border: '1px solid var(--col-gold)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
                }}>Subscribe</button>
              </form>
            ) : (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--col-gold)', letterSpacing: '0.3em' }}>
                ✓ WELCOME TO THE INNER CIRCLE
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
      <Footer />
    </>
  )
}
