import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Fragment, useEffect, useRef, useState } from 'react'
import { hero, marquees, profile } from '../../data/content'
import { MarqueeBand } from '../MarqueeBand'
import { RoleCycle } from '../RoleCycle'

const ease = [0.22, 1, 0.36, 1] as const

/** Quicker beat sheet: white → black → content */
const T = {
  whiteDelay: 0.08,
  whiteDur: 0.72,
  blackDelay: 0.72,
  blackDur: 0.72,
  contentDelay: 1.38,
} as const

const cluster = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: T.contentDelay,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

const titleParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.02,
    },
  },
}

const titleWord = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.028,
    },
  },
}

const titleLetter = {
  hidden: { opacity: 0, y: '0.55em', rotateX: 55 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.48, ease },
  },
}

const nameWords = profile.name.split(' ')

type Props = {
  /** When false, hero stays parked until intro finishes */
  ready?: boolean
}

export function Hero({ ready = true }: Props) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const play = reduce || ready
  const [compact, setCompact] = useState(false)
  const tilt = compact ? 2.1 : 3.2
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.5])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const sync = () => setCompact(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <section id="top" ref={ref} className="hero hero-framed">
      <motion.div
        className="hero-band hero-band-top"
        initial={reduce ? false : { x: '75%', rotate: -tilt, opacity: 0 }}
        animate={
          play
            ? { x: '-50%', rotate: -tilt, opacity: 1 }
            : { x: '75%', rotate: -tilt, opacity: 0 }
        }
        transition={{
          duration: reduce || !ready ? 0 : T.whiteDur,
          delay: reduce || !ready ? 0 : T.whiteDelay,
          ease,
        }}
      >
        <div className="hero-band-tilt">
          <MarqueeBand
            items={marquees.skills}
            variant="ink"
            speed="slow"
            label="Core skills"
          />
        </div>
      </motion.div>

      <motion.div
        className="hero-band hero-band-bot"
        initial={reduce ? false : { x: '-175%', rotate: tilt, opacity: 0 }}
        animate={
          play
            ? { x: '-50%', rotate: tilt, opacity: 1 }
            : { x: '-175%', rotate: tilt, opacity: 0 }
        }
        transition={{
          duration: reduce || !ready ? 0 : T.blackDur,
          delay: reduce || !ready ? 0 : T.blackDelay,
          ease,
        }}
      >
        <div className="hero-band-tilt hero-band-tilt-alt">
          <MarqueeBand
            items={marquees.cta}
            variant="signal"
            speed="slow"
            reverse
            label="Availability"
          />
        </div>
      </motion.div>

      <motion.div className="hero-stage" style={{ opacity }}>
        <motion.div
          className="hero-cluster"
          variants={reduce ? undefined : cluster}
          initial={reduce ? false : 'hidden'}
          animate={play ? 'show' : 'hidden'}
        >
          <motion.div
            className="hero-top"
            variants={reduce ? undefined : fadeUp}
          >
            <p className="eyebrow hero-eyebrow">
              {profile.role} · {profile.location}
            </p>
            <RoleCycle
              prefix={hero.rolePrefix}
              roles={hero.roles}
              className="hero-role"
            />
          </motion.div>

          <motion.h1
            className="display hero-title"
            aria-label={profile.name}
            variants={reduce ? undefined : titleParent}
          >
            {reduce
              ? profile.name
              : nameWords.map((word, wi) => (
                  <Fragment key={`${word}-${wi}`}>
                    <motion.span className="hero-title-word" variants={titleWord}>
                      {word.split('').map((char, ci) => (
                        <motion.span
                          key={`${char}-${ci}`}
                          className="hero-title-char"
                          variants={titleLetter}
                          aria-hidden
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                    {wi < nameWords.length - 1 ? ' ' : null}
                  </Fragment>
                ))}
          </motion.h1>

          <motion.div
            className="hero-bottom"
            variants={reduce ? undefined : fadeUp}
          >
            <p className="hero-lead">{hero.line}</p>
            <div className="hero-actions">
              <a href="#work" className="btn-primary">
                View selected work
                <span aria-hidden>↓</span>
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost hero-email">
                <span className="hero-email-full">{profile.email}</span>
                <span className="hero-email-short">Email me</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
