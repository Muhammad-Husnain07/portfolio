import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'

const HOLD_MS = 2400
const EXIT_MS = 420

type Props = {
  active: boolean
  onComplete: () => void
}

export function IntroLoader({ active, onComplete }: Props) {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(active)
  const done = useRef(false)

  useEffect(() => {
    if (!active) return
    document.documentElement.classList.add('intro-lock')
    return () => document.documentElement.classList.remove('intro-lock')
  }, [active])

  useEffect(() => {
    if (!active || done.current) return

    const finish = () => {
      if (done.current) return
      done.current = true
      setShow(false)
    }

    const delay = reduce ? 120 : HOLD_MS
    const timer = window.setTimeout(finish, delay)

    return () => clearTimeout(timer)
  }, [active, reduce])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          className="intro"
          role="status"
          aria-live="polite"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="intro-stamp">
            <p className="intro-mark display">
              {profile.short}
              <span className="intro-dot">.</span>
            </p>
            <span className="intro-rule" aria-hidden />
            <p className="intro-role">{profile.role}</p>
          </div>

          <button
            type="button"
            className="intro-skip"
            onClick={() => {
              if (done.current) return
              done.current = true
              setShow(false)
            }}
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
