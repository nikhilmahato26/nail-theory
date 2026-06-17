import { useEffect, useState } from 'react'

// Tracks normalized mouse offset (-1 → 1) from the viewport centre.
// Used to add a gentle parallax drift to hero collage elements.
export function useMouseParallax(strength = 1) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Skip parallax on touch devices for performance + comfort.
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handle = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2 * strength
      const y = (e.clientY / window.innerHeight - 0.5) * 2 * strength
      setOffset({ x, y })
    }

    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [strength])

  return offset
}
