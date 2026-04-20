import { useEffect, useState, useRef } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Education', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const clickCount = useRef(0)
  const clickTimer = useRef(null)

  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Dark mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    // Update meta theme-color
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', dark ? '#0f1117' : '#ffffff')
  }, [dark])

  // Scroll + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = links.map(l => l.toLowerCase())
      let current = ''
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          current = ids[i]
          break
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 480) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close menu on Escape
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Easter egg: click logo 5 times
  function handleLogoClick() {
    clickCount.current += 1
    clearTimeout(clickTimer.current)
    if (clickCount.current >= 5) {
      clickCount.current = 0
      document.body.classList.add('party')
      setTimeout(() => document.body.classList.remove('party'), 3000)
    } else {
      clickTimer.current = setTimeout(() => { clickCount.current = 0 }, 1500)
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} onClick={handleLogoClick}>Kevin.</a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`${styles.link} ${active === l.toLowerCase() ? styles.active : ''}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <button
            className={styles.themeBtn}
            onClick={() => setDark(d => !d)}
            aria-label="Toggle dark mode"
          >
            {dark ? '☀︎' : '☽'}
          </button>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={`${styles.mobileLink} ${active === l.toLowerCase() ? styles.mobileLinkActive : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
      </div>
    </>
  )
}
