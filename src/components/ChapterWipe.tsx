import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  label: string
  title: string
  id?: string
}

export function ChapterWipe({ label, title, id }: Props) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0.05, 0.45],
    ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
  )
  const veil = useTransform(scrollYProgress, [0.35, 0.85], [0.18, 0])
  const y = useTransform(scrollYProgress, [0.1, 0.7], [28, 0])

  if (reduce) {
    return (
      <section id={id} className="chapter-wipe" aria-label={title}>
        <div className="wrap chapter-wipe-inner">
          <p className="eyebrow">{label}</p>
          <h2 className="display chapter-wipe-title">{title}</h2>
        </div>
      </section>
    )
  }

  return (
    <section id={id} ref={ref} className="chapter-wipe" aria-label={title}>
      <div className="wrap chapter-wipe-inner">
        <motion.div className="chapter-wipe-veil" style={{ opacity: veil }} aria-hidden />
        <motion.div style={{ clipPath, y }} className="chapter-wipe-content">
          <p className="eyebrow">{label}</p>
          <h2 className="display chapter-wipe-title">{title}</h2>
          <span className="chapter-wipe-rule" aria-hidden />
        </motion.div>
      </div>
    </section>
  )
}
