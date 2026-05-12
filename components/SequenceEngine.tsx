'use client'
import { useEffect, useRef, useCallback, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TOTAL_FRAMES = 192

function frameSrc(n: number) {
  return `/frames/${String(n).padStart(5, '0')}.png`
}

interface Props {
  containerRef: RefObject<HTMLDivElement | null>
}

export default function SequenceEngine({ containerRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frames = useRef<HTMLImageElement[]>([])
  const currentFrame = useRef(0)
  const rafId = useRef<number>(0)

  const draw = useCallback((index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const img = frames.current[index]
    if (!ctx || !img?.complete || img.naturalWidth === 0) return

    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight
    const scale = Math.max(cw / iw, ch / ih)
    const w = iw * scale
    const h = ih * scale
    const x = (cw - w) / 2
    const y = (ch - h) / 2

    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, x, y, w, h)
  }, [])

  const setSize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    draw(currentFrame.current)
  }, [draw])

  useEffect(() => {
    setSize()
    window.addEventListener('resize', setSize)

    // Preload all frames
    frames.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image()
      img.src = frameSrc(i + 1)
      img.onload = () => {
        if (i === 0) draw(0)
      }
      return img
    })

    const container = containerRef.current
    if (!container) return

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5,
      onUpdate(self) {
        const idx = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(self.progress * (TOTAL_FRAMES - 1))
        )
        if (idx !== currentFrame.current) {
          currentFrame.current = idx
          cancelAnimationFrame(rafId.current)
          rafId.current = requestAnimationFrame(() => draw(idx))
        }
      },
    })

    return () => {
      window.removeEventListener('resize', setSize)
      cancelAnimationFrame(rafId.current)
      st.kill()
    }
  }, [setSize, draw, containerRef])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
