import { useEffect, useRef, useState, type Ref } from 'react'

type Props = {
  items: string[]
  reverse?: boolean
  variant?: 'ink' | 'signal'
  speed?: 'slow' | 'normal' | 'fast'
  label?: string
}

function Set({
  items,
  separator,
  hidden,
  setRef,
}: {
  items: string[]
  separator: string
  hidden?: boolean
  setRef?: Ref<HTMLUListElement>
}) {
  return (
    <ul ref={setRef} className="marquee-set" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <li key={`${hidden ? 'b' : 'a'}-${index}-${item}`} className="marquee-item">
          <span>{item}</span>
          <span className="marquee-sep" aria-hidden>
            {separator}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function MarqueeBand({
  items,
  reverse = false,
  variant = 'ink',
  speed = 'normal',
  label = 'Scrolling keywords',
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLUListElement>(null)
  const [reps, setReps] = useState(4)

  useEffect(() => {
    const update = () => {
      const root = rootRef.current
      const probe = measureRef.current
      if (!root || !probe || items.length === 0) return

      const unit = probe.scrollWidth / Math.max(reps, 1)
      if (unit <= 0) return

      const next = Math.max(4, Math.ceil(root.offsetWidth / unit) + 1)
      setReps((prev) => (prev === next ? prev : next))
    }

    update()
    const ro = new ResizeObserver(update)
    if (rootRef.current) ro.observe(rootRef.current)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [items, reps])

  const sequence = Array.from({ length: reps }, () => items).flat()

  return (
    <div
      ref={rootRef}
      className={`marquee marquee-${variant} marquee-${speed}${reverse ? ' is-reverse' : ''}`}
      role="region"
      aria-label={label}
    >
      <div className="marquee-track">
        <Set items={sequence} separator="✦" setRef={measureRef} />
        <Set items={sequence} separator="✦" hidden />
      </div>
    </div>
  )
}
