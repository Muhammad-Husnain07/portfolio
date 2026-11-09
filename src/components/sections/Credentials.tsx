import { motion } from 'framer-motion'
import { credentials } from '../../data/content'

export function Credentials() {
  return (
    <section className="wrap credentials" aria-label="Credentials">
      <motion.p
        className="credentials-lead"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {credentials.lead}
      </motion.p>

      <ul className="credentials-list">
        {credentials.items.map((item, i) => (
          <motion.li
            key={item.platform}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.05 + i * 0.06,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <a
              className="credentials-link"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="credentials-platform">{item.platform}</span>
              <span className="credentials-meta">{item.meta}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
