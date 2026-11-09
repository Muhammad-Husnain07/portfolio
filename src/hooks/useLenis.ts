import Lenis from 'lenis'
import { useEffect } from 'react'

const NAV_GAP = 12

function navOffset(id: string) {
  if (id === 'top') return 0
  const nav = document.querySelector<HTMLElement>('.nav')
  const height = nav?.offsetHeight ?? 64
  return -(height + NAV_GAP)
}

function scrollToHash(hash: string, lenis: Lenis | null, instant = false) {
  const id = hash.replace(/^#/, '')
  if (!id) return
  const el = document.getElementById(id)
  if (!el) return

  const offset = navOffset(id)
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (lenis && !reduce) {
    lenis.scrollTo(el, {
      offset,
      immediate: instant,
      duration: instant ? 0 : 1.05,
    })
    return
  }

  const top = el.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo({ top, behavior: instant || reduce ? 'auto' : 'smooth' })
}

export function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = reduce
      ? null
      : new Lenis({
          duration: 1.1,
          smoothWheel: true,
          anchors: false,
        })

    let frame = 0
    if (lenis) {
      const raf = (time: number) => {
        lenis.raf(time)
        frame = requestAnimationFrame(raf)
      }
      frame = requestAnimationFrame(raf)
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('#') || href === '#') return
      if (anchor.hasAttribute('download') || anchor.getAttribute('target') === '_blank') {
        return
      }

      const id = href.slice(1)
      if (!document.getElementById(id)) return

      event.preventDefault()
      history.pushState(null, '', href)
      scrollToHash(href, lenis)
    }

    const onHashChange = () => {
      if (window.location.hash) scrollToHash(window.location.hash, lenis)
    }

    document.addEventListener('click', onClick)
    window.addEventListener('hashchange', onHashChange)

    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash, lenis, true))
    }

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('hashchange', onHashChange)
      cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])
}
