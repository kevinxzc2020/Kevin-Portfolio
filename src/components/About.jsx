import styles from './About.module.css'

// ✏️ Edit your stats here
const stats = [
  { num: '3', label: 'Apps Built', emoji: '📱' },
  { num: 'FL', label: 'Based in Orlando', emoji: '📍' },
  { num: 'UCF', label: "CS Graduate '22", emoji: '🎓' },
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
        </div>

        {/* Text */}
        <div className={`${styles.text} reveal`} style={{ transitionDelay: '0.15s' }}>
          <div className="section-label">About me</div>
          <h2 className={styles.heading}>
            Mobile Dev. Designer.<br />Problem Solver.
          </h2>
          {/* ✏️ Edit your bio here */}
          <p className={styles.bio}>
            I&apos;m <strong>Zhichen (Kevin) Xu</strong> — a mobile &amp; frontend developer
            based in Orlando, FL. I studied Computer Science and Software Engineering at UCF
            and specialize in building cross-platform apps with React Native, Flutter, and ReactJS.
          </p>
          <p className={styles.bio}>
            From facial recognition login systems to C2C marketplaces, I love turning
            real problems into polished products. I convert Figma designs into pixel-perfect
            components and integrate APIs to bring full experiences to life.
          </p>

          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNum}>{s.emoji} {s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
