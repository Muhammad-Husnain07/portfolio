import { about, profile } from '../../data/content'
import { SectionReveal } from '../SectionReveal'

export function About() {
  return (
    <section className="wrap about">
      <SectionReveal direction="soft">
        <div className="about-grid">
          <h2 className="display section-title">{about.lead}</h2>

          <div>
            <p className="about-body">{about.body}</p>
            <dl className="about-meta">
              <div>
                <dt className="eyebrow">Focus</dt>
                <dd>Software Engineer · RAG · Agents</dd>
              </div>
              <div>
                <dt className="eyebrow">Based</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
