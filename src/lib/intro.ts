/** Play on every visit/refresh. Opt out with ?intro=0. */
export function shouldPlayIntro() {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  if (params.get('intro') === '0') return false
  return true
}
