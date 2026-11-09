import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { manifesto } from '../../data/content'

export function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.85],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
  )
  const y = useTransform(scrollYProgress, [0, 1], [36, -24])

  return (
    <section id="manifesto" ref={ref} className="manifesto">
      <div className="wrap manifesto-inner">
        <div className="manifesto-type">
          <motion.p style={{ y }} className="display manifesto-outline" aria-hidden>
            {manifesto.outline}
          </motion.p>
          <motion.p style={{ y, clipPath }} className="display manifesto-fill">
            {manifesto.outline}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="manifesto-body"
        >
          {manifesto.body}
        </motion.p>
      </div>
    </section>
  )
}
