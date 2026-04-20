import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

const rotatingWords = ['Engineering.', 'Products.', 'Experiences.']

export default function Hero() {
  const textRef = useRef(null)
  const [wordIdx, setWordIdx] = useState(0)
  const [fading, setFading] = useState(false)

  // Typewriter for "Available for work" tag
  useEffect(() => {
    const text = 'Available for work'
    const el = textRef.current
    if (!el) return
    let i = 0
    el.textContent = ''
    const timer = setInterval(() => {
      if (i <= text.length) {
        el.textContent = text.slice(0, i++)
      } else {
        clearInterval(timer)
      }
    }, 55)
    return () => clearInterval(timer)
  }, [])

  // Rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setWordIdx(i => (i + 1) % rotatingWords.length)
        setFading(false)
      }, 350)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />
      <div className={styles.heroLine} />

      <div className={styles.tag}>
        <span className={styles.dot} />
        <span ref={textRef} />
      </div>

      <h1 className={styles.title}>
        Design meets<br />
        <span className={`gradient-text ${styles.rotatingWord} ${fading ? styles.fadeOut : styles.fadeIn}`}>
          {rotatingWords[wordIdx]}
        </span>
      </h1>

      <p className={styles.sub}>
        Hi, I&apos;m <strong>Kevin</strong> — a mobile &amp; frontend developer who builds
        apps that feel great on every screen. I turn Figma designs into polished, production-ready code.
      </p>

      <div className={styles.cta}>
        <a href="#projects" className="btn btn-primary">
          View my work <span>→</span>
        </a>
        <a href="#contact" className="btn btn-ghost">Get in touch</a>
        <a
          href="/Kevin_Xu_Resume.pdf"
          download="Kevin_Xu_Resume.pdf"
          className="btn btn-ghost"
        >
          Resume ↓
        </a>
      </div>
    </section>
  )
}
