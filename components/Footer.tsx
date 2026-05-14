'use client'
import Link from 'next/link'

const footerLinks = {
  Models: [
    { label: 'Chiron', href: '/models' },
    { label: 'Chiron Super Sport', href: '/models' },
    { label: 'Bolide', href: '/models' },
    { label: 'Tourbillon', href: '/models' },
  ],
  World: [
    { label: 'Heritage', href: '/heritage' },
    { label: 'Atelier', href: '/atelier' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'News', href: '/news' },
  ],
  Services: [
    { label: 'Configure', href: '/configure' },
    { label: 'Contact', href: '/contact' },
    { label: 'Find a Dealer', href: '/contact' },
    { label: 'Newsletter', href: '/news' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Cookie Settings', href: '#' },
    { label: 'Imprint', href: '#' },
  ],
}

const socials = [
  { label: 'Instagram', icon: '◎', href: 'https://instagram.com/bugatti' },
  { label: 'YouTube', icon: '▷', href: 'https://youtube.com/bugatti' },
  { label: 'Facebook', icon: 'ƒ', href: 'https://facebook.com/bugatti' },
  { label: 'X', icon: '✕', href: 'https://x.com/bugaborti' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#050504',
      borderTop: '1px solid rgba(201,169,110,0.1)',
      padding: '5rem 4rem 3rem',
      position: 'relative',
      zIndex: 20,
    }}>
      {/* Top section: Logo + tagline */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: 32, height: 32,
              border: '1px solid rgba(201,169,110,0.4)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#c9a96e', fontSize: '0.55rem', fontFamily: 'var(--font-display)' }}>EB</span>
            </div>
            <span style={{
              color: 'var(--col-white)',
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
            }}>BUGATTI</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: '1.1rem', color: 'var(--col-chrome)',
            fontWeight: 300, maxWidth: '30ch',
          }}>
            &ldquo;Nothing is too beautiful,<br />nothing is too expensive.&rdquo;
          </p>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.label}
              style={{
                width: 36, height: 36,
                border: '1px solid rgba(201,169,110,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--col-white-dim)',
                fontSize: '0.75rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--col-gold)'; e.currentTarget.style.color = 'var(--col-gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)'; e.currentTarget.style.color = 'var(--col-white-dim)' }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Link columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        marginBottom: '4rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid rgba(201,169,110,0.08)',
      }}>
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
              letterSpacing: '0.35em', color: 'var(--col-gold)',
              textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>{category}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {links.map((link) => (
                <Link key={link.label} href={link.href} style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.75rem',
                  color: 'var(--col-white-dim)', textDecoration: 'none',
                  fontWeight: 300, transition: 'color 0.3s ease',
                  letterSpacing: '0.02em',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--col-white)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--col-white-dim)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
          color: 'rgba(240,237,230,0.25)', letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          © 2026 BUGATTI AUTOMOBILES S.A.S. ALL RIGHTS RESERVED.
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
          color: 'rgba(240,237,230,0.2)', letterSpacing: '0.15em',
        }}>
          MOLSHEIM · ALSACE · FRANCE
        </span>
      </div>
    </footer>
  )
}
