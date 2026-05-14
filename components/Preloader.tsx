'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const completed = useRef(false)

  useEffect(() => {
    // Simulate loading with smooth progress
    const duration = 3000
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const raw = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - raw, 3)
      setProgress(Math.round(eased * 100))

      if (raw < 1) {
        requestAnimationFrame(tick)
      } else if (!completed.current) {
        completed.current = true
        // Exit animation
        const tl = gsap.timeline({ onComplete })
        tl.to('#preloader-content', { opacity: 0, y: -30, duration: 0.6, ease: 'power2.in' })
          .to(containerRef.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, '-=0.2')
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  useEffect(() => {
    // Entrance animations
    gsap.fromTo('#pre-logo', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 })
    gsap.fromTo('#pre-text', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.6 })
    gsap.fromTo('#pre-bar-wrap', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.8 })
  }, [])

  return (
    <div ref={containerRef} style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      background: '#050504',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <div id="preloader-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
        {/* Logo */}
        <div id="pre-logo" style={{
          width: 70, height: 70,
          border: '1px solid rgba(201,169,110,0.5)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0,
        }}>
          <span style={{ color: '#c9a96e', fontSize: '1.2rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>EB</span>
        </div>

        {/* Text */}
        <div id="pre-text" style={{ textAlign: 'center', opacity: 0 }}>
          <div style={{
            fontFamily: 'var(--font-ui)', fontSize: '0.6rem',
            letterSpacing: '0.5em', color: 'rgba(240,237,230,0.4)',
            textTransform: 'uppercase', marginBottom: '0.5rem',
          }}>Entering the Vault</div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '1.2rem',
            fontWeight: 300, color: 'rgba(240,237,230,0.7)',
            fontStyle: 'italic',
          }}>Bugatti</div>
        </div>

        {/* Progress bar */}
        <div id="pre-bar-wrap" style={{ opacity: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '200px' }}>
          <div style={{
            width: '100%', height: '1px',
            background: 'rgba(201,169,110,0.15)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(90deg, #c9a96e, rgba(201,169,110,0.5))',
              width: `${progress}%`,
              transition: 'width 0.1s linear',
            }} />
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
            color: 'rgba(201,169,110,0.6)', letterSpacing: '0.3em',
          }}>{progress}%</span>
        </div>
      </div>
    </div>
  )
}
