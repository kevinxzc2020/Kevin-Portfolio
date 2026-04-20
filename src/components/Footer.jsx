import { useEffect, useState } from 'react'
import styles from './Footer.module.css'

function getOrlandoTime() {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

const socials = [
  { label: 'GitHub',   href: 'https://github.com/kevinxzc2020' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/zhichenxu041697' },
  { label: 'Email',    href: 'mailto:zhichenxuucf@gmail.com' },
]

export default function Footer() {
  const [time, setTime] = useState(getOrlandoTime)

  useEffect(() => {
    const id = setInterval(() => setTime(getOrlandoTime()), 10000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>Kevin.</span>
          <p className={styles.tagline}>Building things that feel great on every screen.</p>
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.location}>
            <span className={styles.locationDot}>📍</span>
            <span>Orlando, FL</span>
          </div>
          <div className={styles.clock}>
            <span className={styles.clockDot} />
            <span>{time} local time</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Zhichen (Kevin) Xu · All rights reserved.</span>
        <span className={styles.hint}>👾 13 secrets hidden somewhere on this page...</span>
      </div>
    </footer>
  )
}
