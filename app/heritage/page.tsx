'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'

const timeline = [
  { year: '1909', event: 'Ettore Bugatti founds the company in Molsheim, Alsace' },
  { year: '1924', event: 'Type 35 dominates Grand Prix racing — over 2,000 victories' },
  { year: '1936', event: 'Type 57SC Atlantic — only four ever made, automotive art' },
  { year: '1991', event: 'EB110 — the first modern supercar to break 340 km/h' },
  { year: '2005', event: 'Veyron 16.4 — 1,001 HP, redefining the hypercar' },
  { year: '2016', event: 'Chiron — 1,500 HP, 420 km/h, the ultimate grand tourer' },
  { year: '2024', event: 'Tourbillon — a new era begins, V16 hybrid powertrain' },
]

const awards = [
  { title: 'Most Beautiful Car Ever Made', source: 'Ralph Lauren on the Type 57SC Atlantic' },
  { title: '304.77 mph World Record', source: 'Chiron Super Sport 300+ · Ehra-Lessien, 2019' },
  { title: 'Art Meets Engineering', source: 'International Design Excellence Award' },
]

export default function HeritagePage() {
  useEffect(() => {
    gsap.fromTo('#h-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
  }, [])

  return (
    <>
      <NavBar />
      <div style={{
        minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
        padding: '8rem 4rem 6rem',
      }}>
        <Link id="h-back" href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          color: 'var(--col-gold)', textDecoration: 'none',
          fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          marginBottom: '4rem', opacity: 0,
        }}>← Return to Vault</Link>

        <ScrollReveal y={20} duration={1}>
          <div className="section-overline" style={{ marginBottom: '1.5rem' }}>
            Legacy · 1909 – Present
          </div>
        </ScrollReveal>

        <ScrollReveal y={50} duration={1.8} delay={0.2}>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', marginBottom: '2rem' }}>
            A Legacy<br /><em>Forged in Speed</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal y={30} delay={0.4}>
          <p className="section-body" style={{ marginBottom: '5rem', maxWidth: '52ch' }}>
            For over a century, Bugatti has stood at the pinnacle of automotive excellence.
            Every era has produced a machine that redefined what was believed to be possible — 
            a relentless pursuit of perfection in speed, luxury, and engineering artistry.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal y={20} delay={0.2}>
          <div className="section-overline" style={{ marginBottom: '2rem' }}>
            Milestones · Through the Decades
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '750px', marginBottom: '5rem' }}>
          {timeline.map((item, i) => (
            <ScrollReveal key={i} x={-30} delay={i * 0.08} duration={0.9}>
              <div style={{
                display: 'flex', gap: '2.5rem', padding: '1.4rem 0',
                borderBottom: '1px solid rgba(201,169,110,0.1)',
                transition: 'background 0.3s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300,
                  color: 'var(--col-gold)', minWidth: '110px',
                }}>{item.year}</span>
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 300,
                  color: 'var(--col-white-dim)', lineHeight: 1.7, paddingTop: '0.7rem',
                }}>{item.event}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Awards section */}
        <ScrollReveal y={30}>
          <div className="section-overline" style={{ marginBottom: '2rem' }}>
            Recognition · Awards & Records
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', maxWidth: '900px', marginBottom: '5rem', alignItems: 'stretch' }}>
          {awards.map((a, i) => (
            <ScrollReveal key={i} y={30} delay={i * 0.12} style={{ height: '100%' }}>
              <div className="hud-panel" style={{ padding: '2rem', transition: 'background 0.4s ease', height: '100%', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(8,8,7,0.55)')}
              >
                <div className="light-sweep" style={{ animationDelay: `${i * 1.5}s` }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, marginBottom: '0.8rem', color: 'var(--col-white)' }}>
                  {a.title}
                </div>
                <div className="hr-gold" />
                <p className="mono-label" style={{ color: 'var(--col-white-dim)', marginTop: '0.8rem' }}>{a.source}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal y={40} duration={1.5}>
          <blockquote style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300,
            color: 'var(--col-chrome)', maxWidth: '36ch', lineHeight: 1.5,
            borderLeft: '2px solid var(--col-gold)', paddingLeft: '2rem',
          }}>
            &ldquo;Nothing is too beautiful, nothing is too expensive.&rdquo;
            <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.8rem', fontStyle: 'normal', letterSpacing: '0.2em', color: 'var(--col-gold-dim)' }}>
              — ETTORE BUGATTI
            </span>
          </blockquote>
        </ScrollReveal>
      </div>
      <Footer />
    </>
  )
}
