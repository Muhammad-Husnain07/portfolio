import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  prefix?: string
  roles: string[]
  intervalMs?: number
  className?: string
}

export function RoleCycle({
  prefix = 'I build',
  roles,
  intervalMs = 3200,
  className = '',
}: Props) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce || roles.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs, reduce, roles.length])

  const current = roles[index] ?? roles[0]

  return (
    <p className={`role-cycle ${className}`.trim()} aria-live="polite">
      <span className="role-cycle-prefix">{prefix}</span>{' '}
      <span className="role-cycle-slot">
        {reduce ? (
          <span className="role-cycle-word text-signal">{roles[0]}</span>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current}
              className="role-cycle-word text-signal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {current}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </p>
  )
}
