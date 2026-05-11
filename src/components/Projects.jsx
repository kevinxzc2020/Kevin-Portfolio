import styles from './Projects.module.css'

const featured = {
  tags: ['React 19', 'Node.js / Express 5', 'MongoDB', 'Stripe', 'Socket.IO', 'Claude AI', 'Cloudinary'],
  title: 'SenYu',
  subtitle: 'Peer-to-Peer Badminton Racket Marketplace',
  role: 'Full-stack solo project · 2025–2026 · Production',
  desc: 'Built the first US-focused C2C marketplace for secondhand badminton rackets — designed and shipped solo, from database schema to payment infrastructure to admin tooling. The core challenge was modeling three fundamentally different trade flows (self-arranged, Stripe-managed, and physically inspected by the platform) inside one codebase, with correct payout logic under every edge case.',
  highlights: [
    'Three trade modes each with their own order states and confirmation rules — orders auto-confirm after a timer with no background jobs, checked lazily when the API reads the order',
    'Four Stripe checkout paths: single item, cart, offer-based, and VIP subscription — VIP sellers receive a 50% platform fee rebate computed server-side at webhook time; platform fee is never set by the frontend',
    '6 Claude-powered features across Haiku and Sonnet: racket recommendations, listing quality scores (0–100), natural language search, negotiation hints, listing description generation, and dispute analysis for admin review',
    'Real-time messaging via Socket.IO; dispute resolution triggers automatic Stripe refunds and re-lists the item; admin panel with 14 routes covering logistics, payouts, promo codes, user management, and live site settings',
  ],
  scale: '53 frontend pages · 22 API route files · 15 database models · bilingual EN / 中文',
  website: 'https://senyubadminton.com',
  github: null,
}

const academic = [
  {
    num: '01',
    tags: ['Flutter', 'Firebase', 'Google Maps'],
    title: 'Rostro Application',
    role: 'Front End Developer · UCF Team Project · May–Dec 2022',
    award: 'Senior Design Semi-Finalist',
    desc: 'Medical mobile app with facial recognition login, Google Maps navigation, and Flutter animations — converted directly from Figma prototypes. Tested and debugged across Android versions on Android Studio Emulator.',
    github: 'https://github.com/Face-Recognition-App-SD/frontend-Mobile',
  },
  {
    num: '02',
    tags: ['ReactJS', 'Google Maps API', 'CSS'],
    title: 'HandyMan Application',
    role: 'Front End Developer · UCF Team Project · Mar–May 2022',
    award: null,
    desc: 'Handyman service platform with Google Maps provider search, login/email verification UI with inline validation, and responsive layouts for desktop and mobile.',
    github: 'https://github.com/NaimShaqqou/HandyMan-COP4331',
  },
  {
    num: '03',
    tags: ['HTML5', 'CSS', 'ReactJS'],
    title: 'Contact Management App',
    role: 'Front End Developer · UCF Team Project · Jan–Mar 2022',
    award: null,
    desc: 'Responsive web app for managing contacts — built with HTML5 and CSS, with form validation and backend integration for data persistence.',
    github: 'https://github.com/MatthewMcK17/COP4331C-SmallProject',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div className="section-label">What I&apos;ve shipped</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          One real product I&apos;m building end-to-end, and two team projects from UCF.
        </p>
      </div>

      {/* ── Featured: SenYu ── */}
      <div className={`${styles.featured} reveal`} style={{ transitionDelay: '0.1s' }}>
        <div className={styles.featuredInner}>
          <div className={styles.featuredLeft}>
            <div className={styles.featuredBadge}>
              <span className={styles.liveDot} /> Building now
            </div>
            <div className={styles.featuredTags}>
              {featured.tags.map(t => (
                <span key={t} className={styles.featuredTag}>{t}</span>
              ))}
            </div>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredSubtitle}>{featured.subtitle}</p>
            <p className={styles.featuredRole}>{featured.role}</p>
          </div>
          <div className={styles.featuredRight}>
            <p className={styles.featuredDesc}>{featured.desc}</p>

            <ul className={styles.highlights}>
              {featured.highlights.map((h, i) => (
                <li key={i} className={styles.highlightItem}>{h}</li>
              ))}
            </ul>

            <p className={styles.scale}>{featured.scale}</p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '28px' }}>
              <a href={featured.website} target="_blank" rel="noreferrer" className={styles.featuredLink}>
                Visit Site →
              </a>
              {featured.github && (
                <a href={featured.github} target="_blank" rel="noreferrer" className={styles.featuredLink}>
                  GitHub →
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={styles.featuredDeco1} />
        <div className={styles.featuredDeco2} />
      </div>

      {/* ── Academic Projects ── */}
      <div className={`${styles.academicLabel} reveal`} style={{ transitionDelay: '0.15s' }}>
        University Projects
      </div>
      <div className={styles.grid}>
        {academic.map((p, i) => (
          <div
            key={p.title}
            className={`${styles.card} reveal`}
            style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
          >
            <div className={styles.cardTop}>
              <span className={styles.num}>{p.num}</span>
              <div className={styles.cardTags}>
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            {p.award && (
              <span className={styles.award}>✦ {p.award}</span>
            )}
            <p className={styles.cardRole}>{p.role}</p>
            <p className={styles.cardDesc}>{p.desc}</p>
            <a href={p.github} target="_blank" rel="noreferrer" className={styles.cardLink}>
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
