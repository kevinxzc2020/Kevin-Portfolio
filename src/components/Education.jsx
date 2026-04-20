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
  {
    name: 'Maynard Evans High School',
    location: 'Pine Hills, Orlando, FL',
    period: '— 2015',
    detail: 'High School Diploma',
    note: null,
    tier: 'school',
  },
  {
    name: 'Meadowbrook Middle School',
    location: 'Pine Hills, Orlando, FL',
    period: '8th Grade',
    detail: null,
    note: null,
    tier: 'school',
  },
  {
    name: 'IS 237',
    location: 'Flushing, Queens, NYC',
    period: '7th Grade',
    detail: null,
    note: 'First school in the U.S.',
    tier: 'school',
  },
  {
    name: '徐汇区教师进修学院附属实验中学',
    location: 'Xuhui District, Shanghai',
    period: 'Up to 6th Grade',
    detail: 'Xuhui District Teachers\' College Affiliated Experimental Middle School',
    note: 'Left for America after this',
    tier: 'china',
  },
  {
    name: '上海小学',
    location: 'Xuhui District, Shanghai',
    period: 'Primary Years',
    detail: 'Shanghai Primary School',
    note: 'Born and raised in Shanghai',
    tier: 'china',
  },
]

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div className="section-label">The journey</div>
        <h2 className="section-title">Education</h2>
        <p className="section-desc">
          From Shanghai to New York City to Orlando — every school that shaped how I think and build.
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
