import styles from './Experience.module.css'

const jobs = [
  {
    role: 'Operations Support & Data Specialist',
    company: '3H Pharmaceuticals LLC',
    location: 'Orlando, FL',
    period: 'Jul 2025 — Present',
    type: 'Full-time',
    current: true,
    bullets: [
      'Manage and maintain the ERP system to ensure data integrity and operational accuracy across departments.',
      'Support leadership with technical documentation, system updates, and internal reporting.',
      'Coordinate inventory records and provide on-call technical support for daily pharmaceutical operations.',
    ],
  },
  {
    role: 'Certified Tutor',
    company: 'Orange County Public Schools (OCPS)',
    location: 'Orlando, FL',
    period: '2023 — 2024',
    type: 'Part-time',
    current: false,
    bullets: [
      'Provided targeted instructional support and facilitated learning sessions for students across the district.',
      'Collaborated with educators to deliver curriculum-aligned academic assistance.',
    ],
  },
  {
    role: 'Front of House',
    company: 'Purple Ocean Superfood Bar',
    location: 'Orlando, FL',
    period: '2022 — 2023',
    type: 'Part-time',
    current: false,
    bullets: [
      'Managed front-of-house operations including customer service, order flow, and team coordination.',
    ],
  },
  {
    role: 'Front Desk',
    company: 'Hunan Taste (湘之味)',
    location: 'Orlando, FL',
    period: '2021 — 2022',
    type: 'Part-time',
    current: false,
    bullets: [
      'Handled front desk operations, customer reception, and coordination between kitchen and dining floor.',
    ],
  },
  {
    role: 'Front Desk & Server',
    company: 'China Hut — College Park',
    location: 'Orlando, FL',
    period: '2019 — 2021',
    type: 'Part-time',
    current: false,
    bullets: [
      'Managed front desk and served customers across a busy dining environment.',
      'Balanced multiple responsibilities during rush hours while maintaining quality of service.',
    ],
  },
  {
    role: 'Front Desk (Computer & Admin)',
    company: 'Local Barbershop',
    location: 'Orlando, FL',
    period: '2018 · 1 month',
    type: 'Short-term',
    current: false,
    bullets: [
      'Managed front desk reception and handled computer file organization and administrative tasks.',
    ],
  },
  {
    role: 'Cashier',
    company: '1st Oriental Supermarket',
    location: 'Orlando, FL',
    period: '2015 — 2018',
    type: 'Part-time',
    current: false,
    bullets: [
      'Operated checkout and handled customer transactions throughout college years at Valencia.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div className="section-label">Where I&apos;ve worked</div>
        <h2 className="section-title">Experience</h2>
        <p className="section-desc">
          Every job since 2015 — from the register to the ERP system.
          Each one taught me something different about how people and systems work.
        </p>
      </div>

      <div className={styles.timeline}>
        {jobs.map((job, i) => (
          <div
            key={`${job.company}-${i}`}
            className={`${styles.item} reveal`}
            style={{ transitionDelay: `${Math.min(i * 0.08, 0.4)}s` }}
          >
            <div className={styles.lineCol}>
              <div className={`${styles.dot} ${job.current ? styles.dotCurrent : ''}`} />
              {i < jobs.length - 1 && <div className={styles.connector} />}
            </div>

            <div className={`${styles.content} ${job.current ? styles.contentCurrent : ''}`}>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
                <span className={`${styles.badge} ${job.current ? styles.badgeCurrent : ''} ${job.type === 'Short-term' ? styles.badgeShort : ''}`}>
                  {job.current && <span className={styles.badgeDot} />}
                  {job.type}
                </span>
              </div>
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.company}>{job.company} · {job.location}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j} className={styles.bullet}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
