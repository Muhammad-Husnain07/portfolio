import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export function Nav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0.12 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`nav${visible ? ' is-visible' : ''}`}
      aria-hidden={!visible}
      {...(!visible ? { inert: true } : {})}
    >
      <div className="wrap nav-inner">
        <a href="#top" className="display brand">
          {profile.short}
          <span className="text-signal">.</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="nav-cta">
            Email
          </a>
        </nav>
      </div>
    </header>
  )
}
