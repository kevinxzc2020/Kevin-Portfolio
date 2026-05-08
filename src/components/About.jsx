import { useRef, useState } from 'react'
import styles from './About.module.css'
import { showToast, spawnConfetti, spawnCards, showKillAnnouncement, showWoWAchievement, showDripCheck } from '../utils/easterEggs'

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
    onClick: () => {
      if (!document.getElementById('__killStyle__')) {
        const style = document.createElement('style')
        style.id = '__killStyle__'
        style.textContent = `
          @keyframes __killShot {
            0%   { transform: translate(0, 0) rotate(135deg) scale(1.2); opacity: 1; }
            85%  { opacity: 1; }
            100% { transform: translate(var(--dx), 105vh) rotate(135deg) scale(0.7); opacity: 0; }
          }
          @keyframes __impactRing {
            0%   { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
          }
          @keyframes __smashWord {
            0%   { transform: translateX(-50%) scale(0.5); opacity: 0; }
            20%  { transform: translateX(-50%) scale(1.2); opacity: 1; }
            70%  { transform: translateX(-50%) scale(1); opacity: 1; }
            100% { transform: translateX(-50%) scale(0.9); opacity: 0; }
          }
          @keyframes __screenShake {
            0%,100% { transform: translate(0,0); }
            20%  { transform: translate(-4px, 3px); }
            40%  { transform: translate(4px, -3px); }
            60%  { transform: translate(-3px, 2px); }
            80%  { transform: translate(3px, -2px); }
          }
        `
        document.body.appendChild(style)
      }

      // Fire 3 kill shots in sequence
      [0, 180, 360].forEach((delay, idx) => {
        setTimeout(() => {
          const landX = 30 + Math.random() * 40  // vw
          const startX = landX + 15 + Math.random() * 15 // start more to the right (smash angle)

          // Shuttlecock
          const sc = document.createElement('div')
          sc.textContent = '🏸'
          sc.style.cssText = `
            position: fixed;
            font-size: 28px;
            left: ${startX}vw;
            top: -40px;
            z-index: 9999;
            pointer-events: none;
            --dx: calc(${landX - startX}vw);
            animation: __killShot 0.38s cubic-bezier(0.4,0,1,1) forwards;
          `
          document.body.appendChild(sc)

          // Impact after shuttlecock lands
          setTimeout(() => {
            sc.remove()
            // Screen shake
            document.body.style.animation = '__screenShake 0.3s ease'
            setTimeout(() => { document.body.style.animation = '' }, 320)

            // Impact ring
            const ring = document.createElement('div')
            ring.style.cssText = `
              position: fixed;
              left: ${landX}vw;
              bottom: 8vh;
              width: 40px; height: 40px;
              border-radius: 50%;
              border: 3px solid rgba(0,47,167,0.7);
              z-index: 9999;
              pointer-events: none;
              animation: __impactRing 0.45s ease-out forwards;
            `
            document.body.appendChild(ring)
            setTimeout(() => ring.remove(), 500)

            // SMASH text on last hit
            if (idx === 2) {
              const word = document.createElement('div')
              word.textContent = 'SMASH! 🏸'
              word.style.cssText = `
                position: fixed;
                bottom: 18vh;
                left: ${landX}vw;
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: clamp(1.6rem, 4vw, 2.4rem);
                font-weight: 900;
                color: #002FA7;
                text-shadow: 0 0 20px rgba(0,47,167,0.4);
                letter-spacing: -1px;
                z-index: 9999;
                pointer-events: none;
                animation: __smashWord 1.2s ease forwards;
              `
              document.body.appendChild(word)
              setTimeout(() => word.remove(), 1300)
            }
          }, 360)
        }, delay)
      })
    },
  },
  {
    emoji: '🎮',
    color: '#ede9fe',
    darkColor: '#3b0764aa',
    label: 'League of Legends',
    sub: 'Vayne · ADC',
    onClick: () => { showKillAnnouncement() },
  },
  {
    emoji: '🃏',
    color: '#fee2e2',
    darkColor: '#7f1d1d33',
    label: 'Texas Hold\'em',
    sub: 'All in or fold',
    onClick: () => {
      spawnCards()
      showToast('All in! 🃏 Read \'em and weep.', 2800)
    },
  },
  {
    emoji: '⚔️',
    color: '#fef3c7',
    darkColor: '#78350f33',
    label: 'World of Warcraft',
    sub: 'For the Horde',
    onClick: () => showWoWAchievement(),
  },
  {
    emoji: '👟',
    color: '#f1f5f9',
    darkColor: '#0f172a44',
    label: 'Streetwear',
    sub: 'SUP · OW · BAPE',
    onClick: () => showDripCheck(),
  },
  {
    emoji: '🧠',
    color: '#fce7f3',
    darkColor: '#83174333',
    label: 'ESFJ',
    sub: 'The Consul',
    onClick: () => showToast('The Consul 👑  Warm · Social · Dependable', 2800),
  },
  {
    emoji: '♈',
    color: '#fff1f2',
    darkColor: '#88002233',
    label: 'Aries',
    sub: 'Bold · Fierce · Free',
    onClick: () => showToast('♈ Fire sign — bold, fierce, unstoppable 🔥', 2800),
  },
]

const avatarMessages = [
  "Hey that's me! 👋",
  "Still clicking? 😄",
  "Ok ok I get it 😂",
]

export default function About() {
  const clickCount = useRef(0)
  const clickTimer = useRef(null)
  const [spinning, setSpinning] = useState(false)

  function handleAvatarClick() {
    clickCount.current += 1
    clearTimeout(clickTimer.current)
    if (clickCount.current >= 3) {
      const msg = avatarMessages[Math.min(Math.floor(clickCount.current / 3) - 1, avatarMessages.length - 1)]
      setSpinning(true)
      showToast(msg)
      setTimeout(() => setSpinning(false), 700)
      clickTimer.current = setTimeout(() => { clickCount.current = 0 }, 2000)
    } else {
      clickTimer.current = setTimeout(() => { clickCount.current = 0 }, 1500)
    }
  }

  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>

        {/* Avatar */}
        <div className={`${styles.avatarWrap} reveal`}>
          <div
            className={`${styles.avatar} ${spinning ? styles.avatarSpin : ''}`}
            onClick={handleAvatarClick}
            style={{ cursor: 'pointer' }}
            title="Click me 🤫"
          >
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

          {/* Hobbies */}
          <div className={styles.hobbiesLabel}>Off the clock</div>
          <div className={styles.hobbies}>
            {hobbies.map(h => (
              <button
                key={h.label}
                className={styles.hobbyCard}
                onClick={h.onClick}
                title="Click me 👀"
              >
                <span
                  className={styles.hobbyEmoji}
                  style={{ '--hobbyColor': h.color }}
                >
                  {h.emoji}
                </span>
                <span className={styles.hobbyLabel}>{h.label}</span>
                <span className={styles.hobbySub}>{h.sub}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
