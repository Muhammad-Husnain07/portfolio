import { motion } from 'framer-motion'
import { services } from '../../data/content'
import { SectionReveal } from '../SectionReveal'

export function Services() {
  return (
    <section id="services" className="wrap services">
      <SectionReveal direction="soft" line>
        <div className="section-head">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="display section-title">What I deliver</h2>
          </div>
          <p className="section-note">
            AI products, full-stack apps, and client websites. Available on Fiverr and Upwork.
          </p>
        </div>
      </SectionReveal>

      <div className="services-list">
        {services.map((item, i) => (
          <motion.article
            key={item.title}
            className="service-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="service-index">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="service-copy">
              <h3 className="display service-title">{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
