import { useState } from 'react'
import styles from './Contact.module.css'

const WECHAT_ID = 'KevinwenHsu'

// Replace with your Formspree endpoint after signing up at formspree.io
const FORMSPREE = 'https://formspree.io/f/mzdyvgpb'

const links = [
  { label: 'Email',    sub: 'zhichenxuucf@gmail.com',    href: 'mailto:zhichenxuucf@gmail.com' },
  { label: 'Phone',    sub: '321-332-5472',               href: 'tel:3213325472' },
  { label: 'GitHub',   sub: 'kevinxzc2020',               href: 'https://github.com/kevinxzc2020' },
  { label: 'LinkedIn', sub: 'zhichenxu041697',            href: 'https://linkedin.com/in/zhichenxu041697' },
]

export default function Contact() {
  const [copied, setCopied]   = useState(false)
  const [status, setStatus]   = useState('idle') // idle | sending | sent | error
  const [form, setForm]       = useState({ name: '', email: '', message: '' })

  function copyWeChat() {
    navigator.clipboard.writeText(WECHAT_ID).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="reveal" style={{ textAlign: 'center' }}>
        <div className="section-label">Let&apos;s connect</div>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-desc" style={{ margin: '0 auto 40px' }}>
          Have a project in mind, or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className={`${styles.layout} reveal`} style={{ transitionDelay: '0.1s' }}>

        {/* ── Left: info card ── */}
        <div className={styles.card}>
          <div className={styles.cardAccent} />
          <h3 className={styles.cardTitle}>
            Let&apos;s build something<br />great together.
          </h3>
          <p className={styles.cardSub}>
            Open to freelance work and full-time opportunities.
          </p>

          <div className={styles.links}>
            {links.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkSub}>{l.sub}</span>
              </a>
            ))}
            <button onClick={copyWeChat} className={`${styles.linkBtn} ${styles.wechatBtn}`}>
              <span className={styles.linkLabel}>WeChat</span>
              <span className={styles.linkSub}>{copied ? 'Copied!' : WECHAT_ID}</span>
            </button>
          </div>
        </div>

        {/* ── Right: form ── */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input
                className={styles.input}
                type="text" name="name" required
                placeholder="Your name"
                value={form.name} onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                type="email" name="email" required
                placeholder="your@email.com"
                value={form.email} onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              name="message" required rows={5}
              placeholder="Tell me about your project..."
              value={form.message} onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'sending' || status === 'sent'}
          >
            {status === 'sending' ? 'Sending…'
              : status === 'sent'    ? '✓ Message sent!'
              : status === 'error'   ? 'Try again'
              : 'Send Message →'}
          </button>
          {status === 'error' && (
            <p className={styles.errorMsg}>Something went wrong. Email me directly.</p>
          )}
        </form>

      </div>
    </section>
  )
}
