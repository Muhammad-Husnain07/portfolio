import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { marquees } from '../../data/content'
import { MarqueeBand } from '../MarqueeBand'

export function CtaTicker() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rotate = useTransform(scrollYProgress, [0, 1], [1.8, 2.6])

  return (
    <section ref={ref} className="ticker ticker-cta" aria-label="Call to action">
      <motion.div className="ticker-tilt ticker-tilt-alt" style={{ rotate }}>
        <MarqueeBand
          items={marquees.cta}
          variant="signal"
          speed="slow"
          reverse
          label="Availability"
        />
      </motion.div>
    </section>
  )
}
