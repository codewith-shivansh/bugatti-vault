'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollReveal from '@/components/ScrollReveal'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo('#login-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
  }, [])

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    }
  }, [mode])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    gsap.fromTo('#success-msg', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.9rem 1.2rem',
    background: 'rgba(240,237,230,0.04)',
    border: '1px solid rgba(201,169,110,0.15)',
    color: 'var(--col-white)',
    fontFamily: 'var(--font-ui)',
    fontSize: '0.8rem',
    letterSpacing: '0.05em',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--col-bg)', display: 'flex' }}>
      {/* Left decorative panel */}
      <div style={{
        width: '45%', minHeight: '100vh', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #0c0c0a 0%, #141410 50%, #0c0c0a 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        borderRight: '1px solid rgba(201,169,110,0.1)',
      }}>
        {/* Atmospheric light beams */}
        <div style={{
          position: 'absolute', top: '-30%', left: '20%', width: '2px', height: '160%',
          background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.15), transparent)',
          transform: 'rotate(25deg)',
        }} />
        <div style={{
          position: 'absolute', top: '-20%', right: '30%', width: '1px', height: '140%',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)',
          transform: 'rotate(-15deg)',
        }} />

        <ScrollReveal y={30} duration={1.5}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 80, height: 80, border: '1px solid rgba(201,169,110,0.4)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 2rem',
            }}>
              <span style={{ color: '#c9a96e', fontSize: '1.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>EB</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--col-white)', lineHeight: 1.1 }}>
              Enter the<br /><em style={{ color: 'var(--col-chrome)' }}>Inner Circle</em>
            </div>
            <div className="mono-label" style={{ marginTop: '1.5rem', color: 'var(--col-gold-dim)' }}>
              EXCLUSIVE ACCESS · BY INVITATION
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal y={20} delay={0.4}>
          <div style={{ marginTop: '3rem', textAlign: 'center', maxWidth: '28ch' }}>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--col-white-dim)', lineHeight: 1.8, fontWeight: 300 }}>
              Join the exclusive community of Bugatti owners and enthusiasts.
              Access private reveals, commission your own masterpiece, and connect with the atelier.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Right form panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '4rem' }}>
        <Link id="login-back" href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          color: 'var(--col-gold)', textDecoration: 'none',
          fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          marginBottom: '3rem', opacity: 0,
        }}>← Return to Vault</Link>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div ref={formRef} style={{ width: '100%', maxWidth: '400px' }}>
            {!submitted ? (
              <>
                {/* Mode toggle */}
                <div style={{ display: 'flex', gap: '0', marginBottom: '3rem' }}>
                  {(['login', 'register'] as const).map((m) => (
                    <button key={m} onClick={() => setMode(m)} style={{
                      flex: 1, padding: '0.8rem', background: 'transparent',
                      border: '1px solid rgba(201,169,110,0.15)',
                      borderBottom: mode === m ? '2px solid var(--col-gold)' : '1px solid rgba(201,169,110,0.15)',
                      color: mode === m ? 'var(--col-gold)' : 'var(--col-white-dim)',
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      letterSpacing: '0.3em', textTransform: 'uppercase', cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}>{m === 'login' ? 'Sign In' : 'Register'}</button>
                  ))}
                </div>

                <div className="section-overline" style={{ marginBottom: '0.75rem' }}>
                  {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, marginBottom: '2.5rem', color: 'var(--col-white)' }}>
                  {mode === 'login' ? (
                    <>Access Your <em style={{ color: 'var(--col-chrome)' }}>Vault</em></>
                  ) : (
                    <>Join the <em style={{ color: 'var(--col-chrome)' }}>Circle</em></>
                  )}
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {mode === 'register' && (
                    <input
                      type="text" placeholder="Full Name" value={name}
                      onChange={e => setName(e.target.value)} required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')}
                    />
                  )}
                  <input
                    type="email" placeholder="Email Address" value={email}
                    onChange={e => setEmail(e.target.value)} required
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')}
                  />
                  <input
                    type="password" placeholder="Password" value={password}
                    onChange={e => setPassword(e.target.value)} required
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')}
                  />

                  {mode === 'login' && (
                    <div style={{ textAlign: 'right' }}>
                      <button type="button" style={{
                        background: 'none', border: 'none', color: 'var(--col-gold-dim)',
                        fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.15em',
                        cursor: 'pointer', textTransform: 'uppercase',
                      }}>Forgot Password?</button>
                    </div>
                  )}

                  <button type="submit" className="cta-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    <span>{mode === 'login' ? 'Enter the Vault' : 'Request Access'}</span>
                  </button>
                </form>

                <div className="hr-gold" style={{ margin: '2rem 0' }} />
                <div className="mono-label" style={{ textAlign: 'center', color: 'var(--col-white-faint)' }}>
                  SECURED · ENCRYPTED · EXCLUSIVE
                </div>
              </>
            ) : (
              <div id="success-msg" style={{ textAlign: 'center', opacity: 0 }}>
                <div style={{
                  width: 64, height: 64, border: '1px solid rgba(201,169,110,0.5)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 2rem',
                }}>
                  <span style={{ color: 'var(--col-gold)', fontSize: '1.5rem' }}>✓</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>
                  {mode === 'login' ? 'Welcome Back' : 'Access Requested'}
                </div>
                <p className="section-body" style={{ textAlign: 'center', margin: '0 auto 2rem', maxWidth: '30ch' }}>
                  {mode === 'login'
                    ? 'You have entered the vault. Your exclusive experience awaits.'
                    : 'Your application has been received. Our atelier will review your request within 48 hours.'}
                </p>
                <Link href="/" className="cta-btn" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                  <span>Return to Vault</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
