import styles from './Education.module.css'

const schools = [
  {
    name: 'University of Central Florida (UCF)',
    location: 'Orlando, FL',
    period: '2019 — 2022',
    detail: 'B.S. Computer Science',
    note: null,
    tier: 'university',
  },
  {
    name: 'Valencia Community College',
    location: 'Orlando, FL',
    period: '2015 — 2018',
    detail: 'A.A. Electrical & Computer Engineering',
    note: 'Transfer pathway to UCF',
    tier: 'college',
  },
]

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div className="section-label">Academic background</div>
        <h2 className="section-title">Education</h2>
        <p className="section-desc">
          Computer Science at UCF, after transferring from Valencia College in Orlando.
        </p>
      </div>

      <div className={styles.timeline}>
        {schools.map((s, i) => (
          <div
            key={s.name}
            className={`${styles.item} reveal`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className={styles.lineCol}>
              <div className={`${styles.dot} ${styles[`dot_${s.tier}`]}`} />
              {i < schools.length - 1 && <div className={styles.connector} />}
            </div>

            <div className={`${styles.card} ${styles[`card_${s.tier}`]}`}>
              <div className={styles.cardLeft}>
                <span className={styles.period}>{s.period}</span>
                {s.note && <span className={styles.noteTag}>{s.note}</span>}
              </div>
              <div className={styles.cardRight}>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.location}>{s.location}</p>
                {s.detail && <p className={styles.detail}>{s.detail}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
