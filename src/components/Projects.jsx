import styles from './Projects.module.css'

const featured = {
  tags: ['React Native', 'Expo', 'MongoDB Atlas', 'Node.js'],
  title: 'SenYu Badminton Marketplace',
  role: 'Lead Developer · Independent Product',
  desc: 'A C2C mobile marketplace I\'m building for high-end badminton equipment trading. Architecting the full product from scratch — database schemas, real-time listings, user auth, and a mobile-first UI designed for serious players who care about gear quality.',
  why: 'This isn\'t a class project. I\'m building SenYu because the market for premium secondhand badminton gear has no good dedicated platform — and I want to be the one who builds it.',
  website: 'https://senyubadminton.com',
  github: 'https://github.com/kevinxzc2020',
}

const academic = [
  {
    num: '01',
    tags: ['Flutter', 'Firebase', 'Google Maps'],
    title: 'Rostro Application',
    role: 'Front End Developer · UCF Team Project',
    desc: 'Medical mobile app with facial recognition login, Flutter animations, and Google Maps navigation — built from Figma prototypes.',
    github: 'https://github.com/kevinxzc2020',
  },
  {
    num: '02',
    tags: ['ReactJS', 'Google Maps API', 'Node.js'],
    title: 'HandyMan Application',
    role: 'Front End Developer · UCF Team Project',
    desc: 'Local handyman service platform with Google Maps provider search, ReactJS UI components, and login/email verification flow.',
    github: 'https://github.com/kevinxzc2020',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div className="section-label">Selected work</div>
        <h2 className="section-title">Projects I&apos;m proud of</h2>
        <p className="section-desc">
          One real venture I&apos;m building to ship, and two team projects from UCF that sharpened my skills.
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
            <p className={styles.featuredRole}>{featured.role}</p>
          </div>
          <div className={styles.featuredRight}>
            <p className={styles.featuredDesc}>{featured.desc}</p>
            <p className={styles.featuredWhy}>&ldquo;{featured.why}&rdquo;</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href={featured.website} target="_blank" rel="noreferrer" className={styles.featuredLink}>
                Visit Site →
              </a>
              <a href={featured.github} target="_blank" rel="noreferrer" className={styles.featuredLink}>
                GitHub →
              </a>
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
