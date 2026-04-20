import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Education', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>Kevin.</a>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className={styles.link}>{l}</a>
          </li>
        ))}
      </ul>
      <button
        className={styles.themeBtn}
        onClick={() => setDark(d => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? '☀︎' : '☽'}
      </button>
    </nav>
  )
}
