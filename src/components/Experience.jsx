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
      'Designed and built the company\'s business website on Shopify from scratch — facility overview, services, customization offerings, and contact page. Handled layout, design, and Liquid template development end-to-end. Live at 3h.life.',
    ],
  },
  {
    role: 'Certified Tutor',
    company: 'Freedom High School (OCPS)',
    location: 'Orlando, FL',
    period: '2023 — 2024',
    type: 'Part-time',
    current: false,
    bullets: [
      'Provided targeted instructional support and facilitated learning sessions for students at Freedom High School.',
      'Collaborated with educators to deliver curriculum-aligned academic assistance.',
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
          Work since graduating from UCF Computer Science in 2022.
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
