'use client'
import { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  duration?: number
  ease?: string
  stagger?: number
  className?: string
  style?: React.CSSProperties
  as?: 'div' | 'section' | 'span' | 'p' | 'h1' | 'h2' | 'h3'
}

export default function ScrollReveal({
  children, delay = 0, y = 50, x = 0, duration = 1.2,
  ease = 'power3.out', className = '', style = {}, as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.set(el, { opacity: 0, y, x })

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter() {
        gsap.to(el, { opacity: 1, y: 0, x: 0, duration, ease, delay })
      },
    })

    return () => st.kill()
  }, [delay, y, x, duration, ease])

  return (
    <Tag ref={ref as any} className={className} style={{ opacity: 0, ...style }}>
      {children}
    </Tag>
  )
}
