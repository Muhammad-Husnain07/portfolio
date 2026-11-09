import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'left' | 'soft'

type Props = {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  line?: boolean
}

const clips: Record<Direction, { from: string; to: string }> = {
  up: {
    from: 'inset(14% 0 0 0)',
    to: 'inset(0% 0 0 0)',
  },
  left: {
    from: 'inset(0 0 0 18%)',
    to: 'inset(0 0 0 0%)',
  },
  soft: {
    from: 'inset(6% 4% 6% 4%)',
    to: 'inset(0% 0% 0% 0%)',
  },
}

const ease = [0.16, 1, 0.3, 1] as const

export function SectionReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  line = false,
}: Props) {
  const reduce = useReducedMotion()
  const clip = clips[direction]

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={`section-reveal ${className}`.trim()}>
      {line ? (
        <motion.span
          className="section-reveal-line"
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.35, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.9, delay, ease }}
        />
      ) : null}
      <motion.div
        className="section-reveal-mask"
        initial={{ clipPath: clip.from, opacity: 0.28 }}
        whileInView={{ clipPath: clip.to, opacity: 1 }}
        viewport={{ once: false, amount: 0.28, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 1.05, delay: delay + (line ? 0.08 : 0), ease }}
      >
        {children}
      </motion.div>
    </div>
  )
}
