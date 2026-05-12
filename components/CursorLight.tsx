'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorLight() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    if (!dot || !ring || !glow) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      gsap.to(dot, { x: mx, y: my, duration: 0.1, ease: 'none' })
      gsap.to(ring, { x: mx, y: my, duration: 0.5, ease: 'power2.out' })
      gsap.to(glow, { x: mx, y: my, duration: 0.8, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', onMove)

    // Hover effects
    const links = document.querySelectorAll('button, a, [data-cursor]')
    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(ring, { scale: 2.5, borderColor: 'rgba(201,169,110,0.8)', duration: 0.3 })
        gsap.to(dot, { scale: 0, duration: 0.3 })
      })
      el.addEventListener('mouseleave', () => {
        gsap.to(ring, { scale: 1, borderColor: 'rgba(255,255,255,0.3)', duration: 0.3 })
        gsap.to(dot, { scale: 1, duration: 0.3 })
      })
    })

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const base: React.CSSProperties = {
    position: 'fixed',
    top: 0, left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    willChange: 'transform',
  }

  return (
    <>
      {/* Outer glow */}
      <div ref={glowRef} style={{
        ...base,
        width: 120, height: 120,
        background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        ...base,
        width: 32, height: 32,
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: '50%',
      }} />
      {/* Dot */}
      <div ref={dotRef} style={{
        ...base,
        width: 4, height: 4,
        background: '#c9a96e',
        borderRadius: '50%',
      }} />
    </>
  )
}
