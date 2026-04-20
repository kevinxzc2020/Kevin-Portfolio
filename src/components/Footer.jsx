import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Designed &amp; built by <strong>Zhichen (Kevin) Xu</strong> · {new Date().getFullYear()} · All rights reserved.</p>
    </footer>
  )
}
