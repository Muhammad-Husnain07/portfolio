import { motion } from 'framer-motion'
import { experience } from '../../data/content'
import { SectionReveal } from '../SectionReveal'

export function Experience() {
  return (
    <section id="experience" className="wrap experience">
      <SectionReveal direction="up" line>
        <div className="section-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="display section-title">Path so far</h2>
          </div>
          <p className="section-note">
            From software engineering studies to fintech product work and freelance delivery.
          </p>
        </div>
      </SectionReveal>

      <ol className="timeline">
        {experience.map((item, i) => (
          <motion.li
            key={item.year + item.role}
            className="timeline-item"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="timeline-year">{item.year}</span>
            <div className="timeline-card">
              <h3>
                {item.role}
                <span className="timeline-place"> · {item.place}</span>
              </h3>
              <p>{item.detail}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
