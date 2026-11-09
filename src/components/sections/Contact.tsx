import { profile } from '../../data/content'
import { SectionReveal } from '../SectionReveal'

const YEAR = 2026

export function Contact() {
  return (
    <section id="contact" className="wrap contact">
      <SectionReveal direction="soft">
        <div className="contact-shell">
          <div className="contact-shell-glow" aria-hidden />
          <div className="contact-card">
            <p className="eyebrow light">Contact</p>
            <h2 className="display contact-title">
              Need a full-stack AI product built?
              <span className="text-signal"> Let’s talk.</span>
            </h2>

            <div className="contact-row">
              <a href={`mailto:${profile.email}`} className="contact-email">
                {profile.email}
              </a>
              <div className="contact-socials">
                {profile.socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <footer className="site-footer">
        <p>
          © {YEAR} {profile.name}
        </p>
        <p>Software engineer · Fiverr · Upwork</p>
      </footer>
    </section>
  )
}
