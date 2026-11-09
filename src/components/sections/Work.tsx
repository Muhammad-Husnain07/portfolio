import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../../data/content'
import { SectionReveal } from '../SectionReveal'

function CaseCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])

  return (
    <div ref={ref} className="case-pin" style={{ zIndex: index + 1 }}>
      <motion.article
        className={`case tone-${project.tone}`}
        style={{ scale }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.04, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="case-panel" aria-hidden>
          <div className="case-panel-sheen" />
          <span className="case-panel-index">{project.index}</span>
          <span className="case-panel-title">{project.title}</span>
        </div>

        <div className="case-body">
          <p className="case-meta">
            {project.tag}
            <span aria-hidden> · </span>
            {project.year}
          </p>
          <h3 className="display case-title">{project.title}</h3>
          <p className="case-outcome">{project.outcome}</p>
          <p className="case-text">{project.text}</p>
          <ul className="case-stack-list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href={project.href}
            className="case-link"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub <span aria-hidden>→</span>
          </a>
        </div>
      </motion.article>
    </div>
  )
}

export function Work() {
  return (
    <section className="wrap work">
      <SectionReveal direction="up" line>
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2 className="display section-title">Shipped systems</h2>
          </div>
          <p className="section-note">
            Selected full-stack and AI systems from my public work. Open the repos for implementation detail.
          </p>
        </div>
      </SectionReveal>

      <div className="case-stack">
        {projects.map((project, index) => (
          <CaseCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
