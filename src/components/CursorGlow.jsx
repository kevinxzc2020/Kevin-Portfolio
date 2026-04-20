import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const move = e => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return <div ref={ref} style={styles.glow} />
}

const styles = {
  glow: {
    position: 'fixed',
    width: 320,
    height: 320,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,47,167,0.05) 0%, transparent 70%)',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'left .12s ease, top .12s ease',
    zIndex: 0,
  },
}
