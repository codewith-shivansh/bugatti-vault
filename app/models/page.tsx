'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import ScrollReveal from '@/components/ScrollReveal'

const models = [
  { name: 'Chiron', subtitle: 'The Ultimate Grand Tourer', hp: '1,500', speed: '420 km/h', year: '2016', desc: 'The definitive hypercar. Quad-turbocharged W16, 1,500 horsepower, handcrafted perfection.', accel: '2.4s 0-100', img: '/models/chiron.png' },
  { name: 'Chiron Super Sport', subtitle: 'Longtail Velocity', hp: '1,600', speed: '440 km/h', year: '2021', desc: 'Extended body for reduced drag. The fastest road-legal Bugatti ever conceived.', accel: '2.3s 0-100', img: '/models/chiron-ss.png' },
  { name: 'Bolide', subtitle: 'Track-Only Weapon', hp: '1,850', speed: '500+ km/h', year: '2022', desc: 'Stripped to its essence. The W16 unleashed without restraint on the track.', accel: '2.1s 0-100', img: '/models/bolide.png' },
  { name: 'Tourbillon', subtitle: 'The New Era', hp: '1,800', speed: '380+ km/h', year: '2024', desc: 'V16 hybrid architecture. A naturally aspirated masterpiece joined by three electric motors.', accel: '2.0s 0-100', img: '/models/tourbillon.png' },
]

const comparisons = [
  { label: 'Combined Heritage HP', value: '6,750+' },
  { label: 'Cylinders Across Lineup', value: '64' },
  { label: 'Total World Records', value: '12' },
]

export default function ModelsPage() {
  useEffect(() => {
    gsap.fromTo('#m-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
  }, [])

  return (
    <>
      <NavBar />
      <div style={{
        minHeight: '100vh', background: 'var(--col-bg)', color: 'var(--col-white)',
        padding: '8rem 4rem 6rem',
      }}>
        <Link id="m-back" href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          color: 'var(--col-gold)', textDecoration: 'none',
          fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          marginBottom: '4rem', opacity: 0,
        }}>← Return to Vault</Link>

        <ScrollReveal y={20}>
          <div className="section-overline" style={{ marginBottom: '1.5rem' }}>Collection · Current Lineup</div>
        </ScrollReveal>

        <ScrollReveal y={50} duration={1.8} delay={0.15}>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', marginBottom: '2rem' }}>
            The<br /><em>Lineup</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal y={25} delay={0.3}>
          <p className="section-body" style={{ marginBottom: '4rem', maxWidth: '48ch' }}>
            Every Bugatti is a statement of absolute supremacy. Four machines, each representing a different facet of automotive perfection.
          </p>
        </ScrollReveal>

        {/* Model cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2px', marginBottom: '5rem' }}>
          {models.map((m, i) => (
            <ScrollReveal key={i} y={40} delay={i * 0.12}>
              <div className="hud-panel" style={{
                padding: '0', display: 'flex', flexDirection: 'column',
                transition: 'background 0.4s ease, transform 0.4s ease', cursor: 'default', height: '100%',
                overflow: 'hidden',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.06)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(8,8,7,0.55)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="light-sweep" style={{ animationDelay: `${i * 1.2}s` }} />

                {/* Image */}
                <div style={{
                  width: '100%', height: '220px', position: 'relative', overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(10,10,8,0.3) 0%, rgba(10,10,8,0.8) 100%)',
                }}>
                  <Image
                    src={m.img}
                    alt={`Bugatti ${m.name}`}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Year badge */}
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'rgba(8,8,7,0.7)', backdropFilter: 'blur(8px)',
                    padding: '0.3rem 0.8rem', border: '1px solid rgba(201,169,110,0.2)',
                  }}>
                    <span className="mono-label" style={{ color: 'var(--col-gold)' }}>{m.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem 2.5rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, lineHeight: 1, color: 'var(--col-white)' }}>{m.name}</div>
                  <div className="mono-label" style={{ color: 'var(--col-white-dim)' }}>{m.subtitle}</div>
                  <div className="hr-gold" />
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--col-white-dim)', lineHeight: 1.7, fontWeight: 300 }}>{m.desc}</p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: 'auto', paddingTop: '1rem' }}>
                    {[
                      { val: m.hp, lbl: 'Horsepower' },
                      { val: m.speed, lbl: 'Top Speed' },
                      { val: m.accel, lbl: 'Acceleration' },
                    ].map(s => (
                      <div key={s.lbl}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--col-white)' }}>{s.val}</div>
                        <div className="mono-label">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison strip */}
        <ScrollReveal y={25}>
          <div className="section-overline" style={{ marginBottom: '2rem' }}>
            Combined Lineup · By the Numbers
          </div>
        </ScrollReveal>
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {comparisons.map((c, i) => (
            <ScrollReveal key={i} y={20} delay={i * 0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--col-white)' }}>{c.value}</span>
                <span className="mono-label">{c.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal y={30} delay={0.2}>
          <Link href="/configure" className="cta-btn" style={{ textDecoration: 'none' }}>
            <span>Configure Your Bugatti</span>
            <span style={{ fontSize: '0.9rem' }}>→</span>
          </Link>
        </ScrollReveal>
      </div>
    </>
  )
}
