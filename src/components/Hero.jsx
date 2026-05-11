import { useRef } from 'react'
import styles from './Hero.module.css'
import { showToast } from '../utils/easterEggs'

export default function Hero() {
  const tagRef = useRef(null)

  return (
    <section id="hero" className={styles.hero}>

      {/* Status tag — Easter egg intact */}
      <div
        className={styles.tag}
        style={{ cursor: 'pointer' }}
        onClick={() => showToast('Hire me already! 😤')}
        title="Click me 👀"
      >
        <span className={styles.dot} />
        Open to work
      </div>

      {/* Main headline — personal, not generic */}
      <h1 className={styles.title}>
        <span className={styles.name}>Kevin Xu</span>
        <span className={styles.slash}>/</span>
        <span className={styles.role}>Full-Stack&nbsp;Dev</span>
      </h1>

      {/* One-liner that says something real */}
      <p className={styles.sub}>
        UCF CS grad, based in Orlando. Currently building{' '}
        <a href="https://senyubadminton.com" target="_blank" rel="noreferrer" className={styles.inlineLink}>
          SenYu
        </a>
        {' '}— a C2C marketplace for high-end badminton gear.
        I turn Figma files into production apps that actually ship.
      </p>

      <div className={styles.cta}>
        <a href="#projects" className="btn btn-primary">
          See what I&apos;ve built
        </a>
        <a href="#contact" className="btn btn-ghost">Let&apos;s talk</a>
        <a
          href="/Kevin_Xu_Resume.pdf"
          download="Kevin_Xu_Resume.pdf"
          className="btn btn-ghost"
        >
          Resume ↓
        </a>
        <a
          href="https://github.com/kevinxzc2020"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  )
}
