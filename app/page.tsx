'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SequenceEngine from '@/components/SequenceEngine'
import NavBar from '@/components/NavBar'
import CursorLight from '@/components/CursorLight'
import Preloader from '@/components/Preloader'
import CookieConsent from '@/components/CookieConsent'

gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────────────────────
   Section frame ranges (out of 192 total)
   Hero      : 0   → 40
   Reveal    : 40  → 100
   Perf      : 100 → 140
   Design    : 140 → 165
   Eng       : 165 → 185
   Final     : 185 → 192
───────────────────────────────────────── */

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const onPreloadComplete = useCallback(() => setLoading(false), [])

  useEffect(() => {
    // Progress bar
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate(self) {
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${self.progress})`
          progressRef.current.style.width = '100%'
        }
      },
    })

    // ── HERO animations ──
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    })
    heroTl
      .to('#hero-top', { opacity: 0, y: -60, ease: 'power2.in' }, 0.4)
      .to('#hero-bottom', { opacity: 0, y: 60, ease: 'power2.in' }, 0.4)

    // ── HERO intro entrance ──
    const heroIn = gsap.timeline({ delay: 0.3 })
    heroIn
      .fromTo('#hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.6, ease: 'power3.out' })
      .fromTo('#hero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }, '-=1.2')
      .fromTo('#hero-sub', { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.out' }, '-=1')
      .fromTo('#hero-scroll', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }, '-=0.5')

    // ── REVEAL section ──
    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#reveal',
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    })
    revealTl
      .fromTo('#reveal-line', { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power3.out' })
      .fromTo('#reveal-overline', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, '-=0.8')
      .fromTo('#reveal-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' }, '-=0.6')
      .fromTo('#reveal-body', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.8')
      .fromTo('#reveal-hud', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }, '-=0.8')

    // ── PERFORMANCE section ──
    const perfTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#performance',
        start: 'top 75%',
        end: 'top 25%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    })
    perfTl
      .fromTo('#perf-overline', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' })
      .fromTo('#perf-title', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }, '-=0.5')
      .fromTo('.stat-item', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.15 }, '-=0.8')

    // Stat number count-up
    ScrollTrigger.create({
      trigger: '#performance',
      start: 'top 60%',
      once: true,
      onEnter() {
        const stats = [
          { id: 'stat-hp', target: 1800, suffix: '' },
          { id: 'stat-cyl', target: 16, suffix: '' },
          { id: 'stat-speed', target: 380, suffix: '' },
          { id: 'stat-nm', target: 1600, suffix: '' },
        ]
        stats.forEach(({ id, target, suffix }) => {
          const el = document.getElementById(id)
          if (!el) return
          gsap.fromTo({ val: 0 }, { val: target }, {
            duration: 2.5, ease: 'power2.out',
            onUpdate() { el.textContent = Math.round((this as any).targets()[0].val).toLocaleString() + suffix },
          })
        })
      },
    })

    // ── DESIGN section ──
    const designTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#design',
        start: 'top 75%',
        end: 'top 25%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    })
    designTl
      .fromTo('#design-overline', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' })
      .fromTo('#design-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }, '-=0.5')
      .fromTo('#design-body', { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' }, '-=0.8')
      .fromTo('.design-feature', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', stagger: 0.12 }, '-=0.8')

    // ── ENGINEERING section ──
    const engTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#engineering',
        start: 'top 75%',
        end: 'top 25%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    })
    engTl
      .fromTo('#eng-overline', { opacity: 0 }, { opacity: 1, duration: 0.8 })
      .fromTo('#eng-title', { opacity: 0, y: 50, skewY: 2 }, { opacity: 1, y: 0, skewY: 0, duration: 1.5, ease: 'power3.out' }, '-=0.4')
      .fromTo('#eng-body', { opacity: 0 }, { opacity: 1, duration: 1.2 }, '-=0.8')
      .fromTo('.eng-spec', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, '-=0.8')

    // ── FINAL REVEAL section ──
    const finalTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#final',
        start: 'top 80%',
        end: 'top 30%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    })
    finalTl
      .fromTo('#final-line-top', { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power3.out' })
      .fromTo('#final-eyebrow', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.8')
      .fromTo('#final-title', { opacity: 0, y: 70, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 1.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('#final-sub', { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' }, '-=0.9')
      .fromTo('#final-cta', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.7')
      .fromTo('#final-specs', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.7')

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return (
    <>
      {loading && <Preloader onComplete={onPreloadComplete} />}

      {/* Progress Bar */}
      <div ref={progressRef} className="progress-bar" />

      {/* Atmosphere overlays */}
      <div className="vignette" />
      <div className="grain" />
      <div className="letterbox-top" />
      <div className="letterbox-bottom" />

      {/* Fixed UI */}
      <NavBar />
      <CursorLight />

      {/* ── Main scroll container ── */}
      <main ref={containerRef} style={{ position: 'relative', height: '800vh' }}>

        {/* Canvas sequence (fixed, z-index 0) */}
        <SequenceEngine containerRef={containerRef} />

        {/* ══════════════════════════════════
            SECTION 1 — HERO  (0–150vh)
        ══════════════════════════════════ */}
        <section id="hero" style={{ height: '150vh', position: 'relative', zIndex: 10 }}>
          <div style={{
            position: 'sticky', top: 0, height: '100vh',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between', padding: '10vh 4rem 8vh',
          }}>
            {/* Top text block */}
            <div id="hero-top" style={{ paddingTop: '4rem' }}>
              <div id="hero-eyebrow" className="section-overline" style={{ marginBottom: '1.5rem' }}>
                Ettore Bugatti · Est. 1909
              </div>
              <h1 id="hero-title" className="section-title" style={{ fontSize: 'clamp(4rem, 10vw, 11rem)', maxWidth: '14ch' }}>
                Beyond<br /><em>Measure</em>
              </h1>
            </div>

            {/* Bottom block */}
            <div id="hero-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <p id="hero-sub" className="section-body">
                A singular creation.<br />
                A revelation of engineering, beauty, and impossible speed.
              </p>

              {/* Scroll indicator */}
              <div id="hero-scroll" className="scroll-indicator" style={{ alignItems: 'center', gap: '0.75rem' }}>
                <span className="mono-label">Scroll to unveil</span>
                <div className="scroll-line" />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SECTION 2 — MYSTERY REVEAL  (150–300vh)
        ══════════════════════════════════ */}
        <section id="reveal" style={{ height: '150vh', position: 'relative', zIndex: 10 }}>
          <div style={{
            position: 'sticky', top: 0, height: '100vh',
            display: 'flex', alignItems: 'center',
            padding: '0 4rem',
          }}>
            {/* Left content */}
            <div style={{ flex: 1, maxWidth: '44ch' }}>
              <div id="reveal-line" style={{
                width: '60px', height: '1px',
                background: 'linear-gradient(90deg, var(--col-gold), transparent)',
                marginBottom: '2rem', transformOrigin: 'left',
              }} />
              <div id="reveal-overline" className="section-overline" style={{ marginBottom: '1.5rem' }}>
                The Unveiling · Chapter I
              </div>
              <h2 id="reveal-title" className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', marginBottom: '2rem' }}>
                Hidden<br /><em>in Plain Sight</em>
              </h2>
              <p id="reveal-body" className="section-body">
                Beneath the fabric lies a machine that defies the limits of physics.
                Conceived in absolute secrecy. Engineered without compromise.
                Every surface, every edge, a covenant between beauty and velocity.
              </p>
            </div>

            {/* Right HUD Panel */}
            <div id="reveal-hud" className="hud-panel" style={{
              position: 'absolute', right: '4rem', top: '50%',
              transform: 'translateY(-50%)', width: 280,
            }}>
              <div className="light-sweep" />
              <div className="mono-label" style={{ marginBottom: '1.2rem' }}>SYS / REVEAL STATUS</div>
              {[
                ['CHASSIS', 'CARBON MONOCOQUE'],
                ['WEIGHT', '1,240 KG'],
                ['AERO', 'ACTIVE CONFIGURATION'],
                ['STATUS', 'CONCEALED'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid rgba(201,169,110,0.08)' }}>
                  <span className="mono-label">{k}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--col-white-dim)', letterSpacing: '0.1em' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SECTION 3 — PERFORMANCE  (300–450vh)
        ══════════════════════════════════ */}
        <section id="performance" style={{ height: '150vh', position: 'relative', zIndex: 10 }}>
          <div style={{
            position: 'sticky', top: 0, height: '100vh',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', padding: '0 4rem',
          }}>
            {/* Header */}
            <div id="perf-overline" className="section-overline" style={{ marginBottom: '1rem' }}>
              Performance Data · Engine Architecture
            </div>
            <h2 id="perf-title" className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', marginBottom: '4rem' }}>
              Raw<br /><em>Dominance</em>
            </h2>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', maxWidth: '900px' }}>
              {[
                { id: 'stat-hp', value: '1800', unit: 'CV', label: 'Horsepower', initVal: '0' },
                { id: 'stat-cyl', value: '16', unit: 'CYL', label: 'Cylinders', initVal: '0' },
                { id: 'stat-speed', value: '380', unit: 'KM/H', label: 'Top Speed', initVal: '0' },
                { id: 'stat-nm', value: '1600', unit: 'N·M', label: 'Torque', initVal: '0' },
              ].map((s, i) => (
                <div key={s.id} className="stat-item hud-panel" style={{ padding: '1.8rem', position: 'relative', overflow: 'hidden' }}>
                  <div className="light-sweep" style={{ animationDelay: `${i * 0.8}s` }} />
                  <div className="stat-value">
                    <span id={s.id}>0</span>
                  </div>
                  <div className="stat-unit" style={{ marginTop: '0.4rem' }}>{s.unit}</div>
                  <div className="hr-gold" style={{ margin: '0.8rem 0' }} />
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Bottom mono detail */}
            <div style={{ marginTop: '3rem', display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div className="mono-label">W16 QUAD-TURBOCHARGED</div>
              <div style={{ width: '1px', height: '20px', background: 'rgba(201,169,110,0.3)' }} />
              <div className="mono-label">8.0L DISPLACEMENT</div>
              <div style={{ width: '1px', height: '20px', background: 'rgba(201,169,110,0.3)' }} />
              <div className="mono-label">7-SPEED DUAL CLUTCH</div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SECTION 4 — DESIGN  (450–550vh)
        ══════════════════════════════════ */}
        <section id="design" style={{ height: '150vh', position: 'relative', zIndex: 10 }}>
          <div style={{
            position: 'sticky', top: 0, height: '100vh',
            display: 'flex', alignItems: 'center',
            padding: '0 4rem', justifyContent: 'flex-end',
          }}>
            <div style={{ maxWidth: '44ch' }}>
              <div id="design-overline" className="section-overline" style={{ marginBottom: '1.5rem' }}>
                Form & Aerodynamics · Design Philosophy
              </div>
              <h2 id="design-title" className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', marginBottom: '2rem' }}>
                Form<br /><em>Is Function</em>
              </h2>
              <p id="design-body" className="section-body" style={{ marginBottom: '2.5rem' }}>
                Every contour channels air with surgical precision.
                The body is not sculpted for beauty alone —
                it is an instrument of aerodynamic perfection,
                where aesthetics and physics converge into something transcendent.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Active rear wing · 1.35m wing span',
                  'Carbon fibre monocoque body',
                  'Titanium exhaust system',
                  '20" front, 21" rear forged alloys',
                ].map((f, i) => (
                  <div key={i} className="design-feature" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '20px', height: '1px', background: 'var(--col-gold)', flexShrink: 0 }} />
                    <span className="mono-label" style={{ color: 'var(--col-white-dim)', letterSpacing: '0.15em' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SECTION 5 — ENGINEERING  (550–650vh)
        ══════════════════════════════════ */}
        <section id="engineering" style={{ height: '150vh', position: 'relative', zIndex: 10 }}>
          <div style={{
            position: 'sticky', top: 0, height: '100vh',
            display: 'flex', alignItems: 'center',
            padding: '0 4rem',
          }}>
            {/* Left column */}
            <div style={{ flex: 1 }}>
              <div id="eng-overline" className="section-overline" style={{ marginBottom: '1.5rem' }}>
                Engineering Supremacy · Chapter V
              </div>
              <h2 id="eng-title" className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', marginBottom: '2rem' }}>
                Precision<br /><em>Without Limit</em>
              </h2>
              <p id="eng-body" className="section-body" style={{ marginBottom: '2.5rem' }}>
                One thousand and eight hundred horsepower.
                Sixteen cylinders. A machine built not for the road,
                but for the edge of human possibility.
              </p>

              {/* Spec table */}
              <div className="hud-panel" style={{ maxWidth: '380px' }}>
                <div className="light-sweep" />
                <div className="mono-label" style={{ marginBottom: '1.2rem' }}>ENGINEERING / POWERTRAIN</div>
                {[
                  ['0 – 100 KM/H', '2.4 SEC'],
                  ['0 – 200 KM/H', '5.8 SEC'],
                  ['TRANSMISSION', '7-SPEED DCT'],
                  ['DRIVE', 'AWD · ACTIVE TORQUE'],
                  ['COOLING', 'TEN RADIATORS'],
                ].map(([k, v], i) => (
                  <div key={i} className="eng-spec" style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid rgba(201,169,110,0.07)',
                  }}>
                    <span className="mono-label">{k}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--col-gold)', letterSpacing: '0.1em' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right decorative column */}
            <div style={{
              width: '1px', height: '60vh',
              background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.4), transparent)',
              margin: '0 4rem',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              {['I', 'II', 'III', 'IV', 'V', 'VI'].map((n) => (
                <div key={n} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--col-white-faint)', letterSpacing: '0.2em' }}>{n}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SECTION 6 — FINAL REVEAL  (650–800vh)
        ══════════════════════════════════ */}
        <section id="final" style={{ height: '150vh', position: 'relative', zIndex: 10 }}>
          <div style={{
            position: 'sticky', top: 0, height: '100vh',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            textAlign: 'center', padding: '0 4rem',
          }}>
            {/* Top line */}
            <div id="final-line-top" style={{
              width: '200px', height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--col-gold), transparent)',
              marginBottom: '3rem', transformOrigin: 'center',
            }} />

            <div id="final-eyebrow" className="section-overline" style={{ marginBottom: '1.5rem' }}>
              The Revelation · Full Unveiling
            </div>

            <h2 id="final-title" className="section-title" style={{
              fontSize: 'clamp(4rem, 9vw, 10rem)',
              marginBottom: '2rem',
              background: 'linear-gradient(180deg, #f0ede6 0%, rgba(240,237,230,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              The Chiron<br /><em>Revealed</em>
            </h2>

            <p id="final-sub" className="section-body" style={{ textAlign: 'center', margin: '0 auto 3rem', maxWidth: '42ch' }}>
              Uncompromising. Unyielding. Unmatched.<br />
              The pinnacle of automotive creation stands before you.
            </p>

            {/* CTA */}
            <div id="final-cta" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '4rem' }}>
              <Link href="/configure" className="cta-btn" style={{ textDecoration: 'none' }}>
                <span>Configure Yours</span>
                <span style={{ fontSize: '0.9rem' }}>→</span>
              </Link>
              <Link href="/heritage" className="cta-btn" style={{ borderColor: 'rgba(240,237,230,0.25)', color: 'rgba(240,237,230,0.6)', textDecoration: 'none' }}>
                <span>Explore Heritage</span>
              </Link>
            </div>

            {/* Final bottom specs strip */}
            <div id="final-specs" style={{
              display: 'flex', gap: '4rem', justifyContent: 'center',
              borderTop: '1px solid rgba(201,169,110,0.12)',
              paddingTop: '2rem',
            }}>
              {[
                ['1,800', 'Horsepower'],
                ['380', 'KM/H Max'],
                ['2.4S', '0–100 KM/H'],
                ['500', 'Units Only'],
              ].map(([v, l]) => (
                <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--col-white)' }}>{v}</span>
                  <span className="mono-label">{l}</span>
                </div>
              ))}
            </div>

            {/* Bottom line */}
            <div style={{
              position: 'absolute', bottom: '8vh', left: '50%', transform: 'translateX(-50%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            }}>
              <span className="mono-label" style={{ opacity: 0.4 }}>BUGATTI AUTOMOBILES S.A.S</span>
            </div>
          </div>
        </section>

      </main>
      <CookieConsent />
    </>
  )
}
