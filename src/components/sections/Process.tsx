import { motion } from 'framer-motion'
import { process } from '../../data/content'
import { SectionReveal } from '../SectionReveal'

export function Process() {
  return (
    <section id="process" className="wrap process">
      <SectionReveal direction="left">
        <div className="process-layout">
          <div className="process-sticky">
            <p className="eyebrow">Process</p>
            <h2 className="display section-title">How I ship AI products</h2>
            <p className="process-intro">
              From scoping model use to a production handoff another engineer can maintain.
            </p>
          </div>

          <div className="process-steps">
            {process.map((item, i) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="process-card"
              >
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
