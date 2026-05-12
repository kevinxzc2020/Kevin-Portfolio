import styles from './Services.module.css'

const services = [
  {
    num: '01',
    icon: '🖥️',
    title: 'Static Landing Page',
    desc: 'A clean, responsive static site — no backend, no CMS. Good for a small business homepage, personal portfolio, or event page. Built with HTML/CSS/JS or React.',
    features: ['Fully responsive (mobile + desktop)', 'Contact form (email-based)', 'Fast load, clean code', 'Deployed & live'],
    price: 'Starting from $150',
    cta: 'Get a quote',
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'Full-Stack Web App',
    desc: 'A simple web app with a real backend — user login, a database, and basic CRUD operations. Good for straightforward tools or small internal projects. Built with React, Node.js, and MongoDB.',
    features: ['User registration & login', 'Database (MongoDB)', 'Basic REST API', 'Deployed & hosted'],
    price: 'Discuss scope first',
    cta: 'Tell me what you need',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div className="section-label">What I offer</div>
        <h2 className="section-title">Web Dev Services</h2>
        <p className="section-desc">
          Looking to get a website built? I take on freelance projects — from simple landing pages
          to full marketplace apps. Each project is scoped individually; reach out and we&apos;ll figure out what fits.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`${styles.card} ${s.featured ? styles.featured : ''} reveal`}
            style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
          >
            {s.featured && <div className={styles.featuredBadge}>Most common</div>}
            <div className={styles.cardTop}>
              <span className={styles.num}>{s.num}</span>
              <span className={styles.icon}>{s.icon}</span>
            </div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
            <ul className={styles.features}>
              {s.features.map(f => (
                <li key={f} className={styles.feature}>
                  <span className={styles.check}>✓</span> {f}
                </li>
              ))}
            </ul>
            <div className={styles.footer}>
              <span className={styles.price}>{s.price}</span>
              <a href="#contact" className={`${styles.cta} ${s.featured ? styles.ctaPrimary : ''}`}>
                {s.cta} →
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className={`${styles.note} reveal`}>
        Pricing is always discussed upfront — no surprises. I&apos;ll give you a clear scope before any work starts.
      </p>
    </section>
  )
}
