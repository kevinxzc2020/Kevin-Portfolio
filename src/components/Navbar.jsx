import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Education', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
    </nav>
  )
}
