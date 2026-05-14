import styles from './About.module.css'

const stats = [
  { num: '3', label: 'Apps Built', emoji: '📱' },
  { num: 'FL', label: 'Based in Orlando', emoji: '📍' },
  { num: 'UCF', label: "CS Graduate '22", emoji: '🎓' },
]

const hobbies = [
  {
    emoji: '🏸',
    color: '#dcfce7',
    darkColor: '#14532d33',
    label: 'Badminton',
    sub: 'SenYu founder',
  },
  {
    emoji: '💪',
    color: '#fed7aa',
    darkColor: '#7c2d1244',
    label: 'Fitness',
    sub: 'Strength training',
  },
  {
    emoji: '📷',
    color: '#dbeafe',
    darkColor: '#1e3a8a44',
    label: 'Photography',
    sub: 'Landscapes & portraits',
  },
  {
    emoji: '🇪🇸',
    color: '#fef3c7',
    darkColor: '#78350f44',
    label: 'Spanish',
    sub: 'Currently learning',
  },
  {
    emoji: '✈️',
    color: '#ede9fe',
    darkColor: '#3b076444',
    label: 'Travel',
    sub: 'Japan · Hawaii',
  },
  {
    emoji: '💡',
    color: '#fce7f3',
    darkColor: '#83174344',
    label: 'Side Projects',
    sub: 'Quick builds with AI',
  },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>

        {/* Avatar */}
        <div className={`${styles.avatarWrap} reveal`}>
          <div className={styles.avatar}>
            <span className={styles.initial}>K</span>
            <div className={styles.avatarDeco1} />
            <div className={styles.avatarDeco2} />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Open to opportunities
          </div>
          <p className={styles.caption}>
            Haven&apos;t had the chance to take a proper headshot yet — coming soon!
          </p>
        </div>

        {/* Text */}
        <div className={`${styles.text} reveal`} style={{ transitionDelay: '0.15s' }}>
          <div className="section-label">About me</div>
          <h2 className={styles.heading}>
            Full-Stack Dev.<br />Problem Solver.
          </h2>
          <p className={styles.bio}>
            I&apos;m <strong>Zhichen (Kevin) Xu</strong> — a full-stack developer
            based in Orlando, FL. I studied Computer Science at UCF and build with
            the MERN stack: React, Node.js, Express, and MongoDB.
          </p>
          <p className={styles.bio}>
            From facial recognition apps to C2C marketplaces, I like taking a product
            from idea to something real people can use — working across UI, APIs,
            database design, and integrations like Stripe and Claude AI.
          </p>

          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <div className={styles.hobbiesLabel}>Outside of work</div>
          <div className={styles.hobbies}>
            {hobbies.map(h => (
              <div
                key={h.label}
                className={styles.hobbyCard}
              >
                <span
                  className={styles.hobbyEmoji}
                  style={{ '--hobbyColor': h.color }}
                >
                  {h.emoji}
                </span>
                <span className={styles.hobbyLabel}>{h.label}</span>
                <span className={styles.hobbySub}>{h.sub}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
