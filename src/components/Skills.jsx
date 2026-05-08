import styles from './Skills.module.css'

// ✏️ Edit your skill groups here
const groups = [
  {
    mark: '/ 01',
    emoji: '📱',
    title: 'Mobile & Frontend',
    pills: ['React Native', 'Flutter', 'ReactJS', 'Expo', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
  },
  {
    mark: '/ 02',
    emoji: '⚙️',
    title: 'Backend & Database',
    pills: ['Node.js', 'MongoDB Atlas', 'Firebase', 'Python', 'REST APIs'],
  },
  {
    mark: '/ 03',
    emoji: '🎨',
    title: 'Design & Tools',
    pills: ['Figma', 'Android Studio', 'Google Maps API', 'Prototyping', 'UI/UX'],
  },
  {
    mark: '/ 04',
    emoji: '💻',
    title: 'Languages',
    pills: ['JavaScript', 'Dart', 'Java', 'Python', 'C++', 'HTML5', 'CSS3'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div className="section-label">What I work with</div>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <p className="section-desc">
          Technologies I reach for when building products — from cross-platform mobile apps to pixel-perfect UIs.
        </p>
      </div>

      <div className={styles.grid}>
        {groups.map((g, i) => (
          <div
            key={g.title}
            className={`${styles.group} reveal`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.mark}>{g.mark}</div>
            <div className={styles.title}>{g.emoji} {g.title}</div>
            <div className={styles.pills}>
              {g.pills.map(p => (
                <span key={p} className={styles.pill}>{p}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
