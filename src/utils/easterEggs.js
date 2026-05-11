/* ── Easter Egg Utilities ── */

// Toast notification
export function showToast(message, duration = 2600) {
  const existing = document.getElementById('__toast__')
  if (existing) existing.remove()

  const el = document.createElement('div')
  el.id = '__toast__'
  el.textContent = message
  el.style.cssText = `
    position: fixed;
    bottom: 88px;
    left: 50%;
    transform: translateX(-50%) translateY(16px);
    background: #002FA7;
    color: #fff;
    padding: 11px 22px;
    border-radius: 12px;
    font-size: 0.88rem;
    font-weight: 700;
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s, transform 0.25s;
    font-family: 'Plus Jakarta Sans', sans-serif;
    box-shadow: 0 8px 32px rgba(0,47,167,0.35);
    white-space: nowrap;
  `
  document.body.appendChild(el)
  requestAnimationFrame(() => {
    el.style.opacity = '1'
    el.style.transform = 'translateX(-50%) translateY(0)'
  })
  setTimeout(() => {
    el.style.opacity = '0'
    el.style.transform = 'translateX(-50%) translateY(16px)'
    setTimeout(() => el.remove(), 300)
  }, duration)
}

// Blue/white confetti + shuttlecocks burst
export function spawnConfetti() {
  const colors = ['#002FA7', '#1240c4', '#4d7cff', '#c8d6ff', '#ffffff', '#e8eeff']

  // Confetti particles
  for (let i = 0; i < 70; i++) {
    const el = document.createElement('div')
    const size = Math.random() * 9 + 5
    el.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size * 0.55}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -20px;
      border-radius: 2px;
      z-index: 9998;
      pointer-events: none;
      opacity: 0.9;
      animation: __confettiFall ${(Math.random() * 1.8 + 1.4).toFixed(2)}s ease-in ${(Math.random() * 0.6).toFixed(2)}s forwards;
    `
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 3800)
  }

  // Shuttlecocks
  for (let i = 0; i < 10; i++) {
    const el = document.createElement('div')
    el.textContent = '🏸'
    el.style.cssText = `
      position: fixed;
      font-size: ${(Math.random() * 18 + 18).toFixed(0)}px;
      left: ${(10 + Math.random() * 80).toFixed(0)}vw;
      bottom: -60px;
      z-index: 9999;
      pointer-events: none;
      animation: __shuttleRise ${(Math.random() * 1.2 + 1.8).toFixed(2)}s ease-out ${(Math.random() * 0.4).toFixed(2)}s forwards;
    `
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 3500)
  }

  // Inject keyframes once
  if (!document.getElementById('__eggStyles__')) {
    const style = document.createElement('style')
    style.id = '__eggStyles__'
    style.textContent = `
      @keyframes __confettiFall {
        0%   { transform: rotate(${Math.random()*360}deg) translateY(0); opacity: 1; }
        80%  { opacity: 0.8; }
        100% { transform: rotate(${Math.random()*720 + 360}deg) translateY(105vh); opacity: 0; }
      }
      @keyframes __shuttleRise {
        0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
        60%  { opacity: 1; }
        100% { transform: translateY(-110vh) rotate(${Math.random() > 0.5 ? '' : '-'}${Math.floor(Math.random()*180 + 90)}deg); opacity: 0; }
      }
      @keyframes __hackerIn {
        from { filter: none; }
        to   { filter: hue-rotate(100deg) saturate(3) brightness(0.85); }
      }
    `
    document.body.appendChild(style)
  }
}

// Konami code listener — pass callback for what to do on success
const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a'
]

let _konamiIdx = 0
let _konamiAttached = false

export function attachKonami(callback) {
  if (_konamiAttached) return
  _konamiAttached = true
  document.addEventListener('keydown', (e) => {
    if (e.key === KONAMI[_konamiIdx]) {
      _konamiIdx++
      if (_konamiIdx === KONAMI.length) {
        _konamiIdx = 0
        callback()
      }
    } else {
      _konamiIdx = e.key === KONAMI[0] ? 1 : 0
    }
  })
}

// Hacker mode: green matrix tint
export function triggerHackerMode() {
  document.body.classList.add('__hacker__')
  showToast('🖥️ DEVELOPER MODE ACTIVATED', 3000)
  setTimeout(() => document.body.classList.remove('__hacker__'), 4000)
}

// ── Pentakill radial burst ──
export function spawnGoldBurst() {
  const colors = ['#f59e0b', '#fbbf24', '#fde68a', '#fff7d6', '#f97316']

  // Inject styles once
  if (!document.getElementById('__pentaStyles__')) {
    const style = document.createElement('style')
    style.id = '__pentaStyles__'
    style.textContent = `
      @keyframes __radialBurst {
        0%   { transform: translate(-50%,-50%) translate(0,0) scale(1); opacity: 1; }
        100% { transform: translate(-50%,-50%) translate(var(--tx),var(--ty)) scale(0); opacity: 0; }
      }
      @keyframes __goldFlash {
        0%   { opacity: 0; }
        15%  { opacity: 0.35; }
        100% { opacity: 0; }
      }
    `
    document.body.appendChild(style)
  }

  // Full-screen gold flash
  const flash = document.createElement('div')
  flash.style.cssText = `
    position: fixed; inset: 0;
    background: radial-gradient(ellipse at center, #fbbf24 0%, #f59e0b 40%, transparent 75%);
    z-index: 9997; pointer-events: none;
    animation: __goldFlash 0.7s ease-out forwards;
  `
  document.body.appendChild(flash)
  setTimeout(() => flash.remove(), 750)

  // Radial particle burst from center
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  const count = 48

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * 2 * Math.PI
    const dist = Math.random() * 280 + 120
    const tx = Math.cos(angle) * dist
    const ty = Math.sin(angle) * dist
    const size = Math.random() * 8 + 4
    const isLong = Math.random() > 0.5

    const el = document.createElement('div')
    el.style.cssText = `
      position: fixed;
      left: ${cx}px; top: ${cy}px;
      width: ${isLong ? size * 0.4 : size}px;
      height: ${isLong ? size * 2.5 : size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${isLong ? '2px' : '50%'};
      z-index: 9998; pointer-events: none;
      --tx: ${tx.toFixed(1)}px;
      --ty: ${ty.toFixed(1)}px;
      animation: __radialBurst ${(Math.random() * 0.4 + 0.5).toFixed(2)}s cubic-bezier(0.2,0,0.8,1) ${(Math.random() * 0.1).toFixed(2)}s forwards;
      transform-origin: center;
    `
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 1000)
  }
}

// ── LoL kill announcement ──
const _killStreak = ['FIRST BLOOD! 🩸', 'DOUBLE KILL! ⚔️', 'TRIPLE KILL! 🔥', 'QUADRA KILL! 💥', 'PENTAKILL! 🏆']
let _killIdx = 0
let _killTimer = null

export function showKillAnnouncement() {
  clearTimeout(_killTimer)
  const text = _killStreak[_killIdx]
  const isPenta = _killIdx === 4

  const el = document.createElement('div')
  el.textContent = text
  el.style.cssText = `
    position: fixed;
    top: 38%;
    left: 50%;
    transform: translateX(-50%) scale(0.6);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2rem, 6vw, 3.6rem);
    font-weight: 900;
    color: ${isPenta ? '#f59e0b' : '#fff'};
    text-shadow: 0 0 40px ${isPenta ? 'rgba(245,158,11,0.8)' : 'rgba(0,47,167,0.9)'}, 0 2px 8px rgba(0,0,0,0.6);
    letter-spacing: -1px;
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    white-space: nowrap;
    transition: opacity 0.15s, transform 0.15s;
  `
  document.body.appendChild(el)
  requestAnimationFrame(() => {
    el.style.opacity = '1'
    el.style.transform = 'translateX(-50%) scale(1)'
  })
  setTimeout(() => {
    el.style.opacity = '0'
    el.style.transform = 'translateX(-50%) scale(1.15)'
    setTimeout(() => el.remove(), 300)
  }, isPenta ? 2200 : 1400)

  if (isPenta) {
    spawnGoldBurst()
    _killIdx = 0
  } else {
    _killIdx++
    _killTimer = setTimeout(() => { _killIdx = 0 }, 4000)
  }
}

// ── WoW: Achievement Unlocked ──
const _wowAchievements = [
  { title: 'Gamer', desc: 'You clicked something you weren\'t supposed to.' },
  { title: 'Leeroy Jenkins', desc: 'At least you have chicken.' },
  { title: 'For the Horde!', desc: 'A true warrior has been found.' },
  { title: 'The Explorer', desc: 'You\'ve uncovered a hidden secret.' },
]
let _wowIdx = 0

export function showWoWAchievement() {
  if (document.getElementById('__wowAchievement__')) return

  const ach = _wowAchievements[_wowIdx % _wowAchievements.length]
  _wowIdx++

  const el = document.createElement('div')
  el.id = '__wowAchievement__'
  el.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.85);
    background: linear-gradient(135deg, #1a1208 0%, #2e2010 50%, #1a1208 100%);
    border: 2px solid #c8a84b;
    border-radius: 6px;
    padding: 18px 28px 18px 22px;
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    box-shadow: 0 0 40px rgba(200,168,75,0.35), 0 8px 32px rgba(0,0,0,0.6);
    min-width: 280px;
    max-width: 90vw;
  `

  const icon = document.createElement('div')
  icon.textContent = '🏆'
  icon.style.cssText = `
    font-size: 2.4rem;
    flex-shrink: 0;
    filter: drop-shadow(0 0 8px rgba(200,168,75,0.7));
  `

  const textWrap = document.createElement('div')

  const label = document.createElement('div')
  label.textContent = 'Achievement Unlocked!'
  label.style.cssText = `
    font-family: Georgia, serif;
    font-size: 0.7rem;
    color: #c8a84b;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 3px;
  `

  const name = document.createElement('div')
  name.textContent = ach.title
  name.style.cssText = `
    font-family: Georgia, serif;
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 3px;
  `

  const desc = document.createElement('div')
  desc.textContent = ach.desc
  desc.style.cssText = `
    font-family: Georgia, serif;
    font-size: 0.75rem;
    color: #a89060;
    font-style: italic;
  `

  textWrap.appendChild(label)
  textWrap.appendChild(name)
  textWrap.appendChild(desc)
  el.appendChild(icon)
  el.appendChild(textWrap)
  document.body.appendChild(el)

  requestAnimationFrame(() => {
    el.style.opacity = '1'
    el.style.transform = 'translate(-50%, -50%) scale(1)'
  })

  setTimeout(() => {
    el.style.opacity = '0'
    el.style.transform = 'translate(-50%, -50%) scale(0.9)'
    setTimeout(() => el.remove(), 350)
  }, 3200)
}

// ── Poker cards burst ──
export function spawnCards() {
  const cards = ['🃏','♠️','♥️','♦️','♣️','🂡','🂱','🃁','🃑']
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div')
    el.textContent = cards[Math.floor(Math.random() * cards.length)]
    const startX = 20 + Math.random() * 60
    const endX = startX + (Math.random() - 0.5) * 40
    el.style.cssText = `
      position: fixed;
      font-size: ${(Math.random() * 16 + 20).toFixed(0)}px;
      left: ${startX.toFixed(0)}vw;
      bottom: -60px;
      z-index: 9999;
      pointer-events: none;
      animation: __cardFly ${(Math.random() * 1 + 1.6).toFixed(2)}s ease-out ${(Math.random() * 0.5).toFixed(2)}s forwards;
      --end-x: ${endX.toFixed(0)}vw;
    `
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 3500)
  }
  if (!document.getElementById('__cardStyles__')) {
    const style = document.createElement('style')
    style.id = '__cardStyles__'
    style.textContent = `
      @keyframes __cardFly {
        0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
        50%  { opacity: 1; }
        100% { transform: translateY(-105vh) rotate(${Math.random() > 0.5 ? '' : '-'}${Math.floor(Math.random()*180+90)}deg); opacity: 0; }
      }
    `
    document.body.appendChild(style)
  }
}

// ── Streetwear: Drip Check ──
export function showDripCheck() {
  if (document.getElementById('__drip__')) return

  const wrap = document.createElement('div')
  wrap.id = '__drip__'
  wrap.style.cssText = `
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    z-index: 9999;
    pointer-events: none;
  `

  // Supreme — italic Futura style
  const supreme = document.createElement('div')
  supreme.textContent = 'Supreme'
  supreme.style.cssText = `
    background: #e8111a;
    color: #fff;
    font-family: 'Times New Roman', serif;
    font-size: clamp(1.6rem, 4.5vw, 2.2rem);
    font-weight: bold;
    font-style: italic;
    letter-spacing: 1px;
    padding: 10px 36px;
    border-radius: 4px;
    opacity: 0; transform: translateY(10px);
    transition: opacity 0.25s 0s, transform 0.25s 0s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  `

  // Off-White — quotation mark helvetica style
  const offwhite = document.createElement('div')
  offwhite.textContent = '"OFF-WHITE™"'
  offwhite.style.cssText = `
    background: #fff;
    color: #000;
    font-family: Arial Black, Helvetica Neue, sans-serif;
    font-size: clamp(1rem, 3vw, 1.4rem);
    font-weight: 900;
    letter-spacing: 2px;
    padding: 10px 28px;
    border-radius: 0;
    border: 3px solid #000;
    opacity: 0; transform: translateY(10px);
    transition: opacity 0.25s 0.15s, transform 0.25s 0.15s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  `

  // Bape — ape logo + text
  const bape = document.createElement('div')
  bape.style.cssText = `
    background: #111;
    color: #fff;
    font-family: Arial Black, sans-serif;
    letter-spacing: 4px;
    padding: 12px 32px;
    border-radius: 4px;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    opacity: 0; transform: translateY(10px);
    transition: opacity 0.25s 0.3s, transform 0.25s 0.3s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  `
  const apeIcon = document.createElement('div')
  apeIcon.textContent = '🦍'
  apeIcon.style.cssText = 'font-size: 2rem; line-height: 1;'
  const bapeText = document.createElement('div')
  bapeText.textContent = 'BAPE'
  bapeText.style.cssText = 'font-size: clamp(1.2rem, 3vw, 1.6rem); font-weight: 900;'
  bape.appendChild(apeIcon)
  bape.appendChild(bapeText)

  ;[supreme, offwhite, bape].forEach(el => wrap.appendChild(el))

  const check = document.createElement('div')
  check.textContent = 'DRIP CHECK ✅'
  check.style.cssText = `
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    color: #888;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.3s 0.5s;
    margin-top: 4px;
  `
  wrap.appendChild(check)
  document.body.appendChild(wrap)

  requestAnimationFrame(() => {
    wrap.querySelectorAll('div').forEach(el => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  })

  setTimeout(() => {
    wrap.style.transition = 'opacity 0.4s'
    wrap.style.opacity = '0'
    setTimeout(() => wrap.remove(), 450)
  }, 2800)
}

// ── Aries constellation ──
export function showAriesConstellation() {
  if (document.getElementById('__aries__')) return

  // Inject keyframes once
  if (!document.getElementById('__ariesKF__')) {
    const kf = document.createElement('style')
    kf.id = '__ariesKF__'
    kf.textContent = `
      @keyframes __aDrawLine { to { stroke-dashoffset: 0; } }
      @keyframes __aFlowLine { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
      @keyframes __aLabelIn  { to { opacity: 1; } }
    `
    document.body.appendChild(kf)
  }

  // ── Overlay ──
  const overlay = document.createElement('div')
  overlay.id = '__aries__'
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:9999;pointer-events:none;
    opacity:0;transition:opacity 0.5s ease;
    background:radial-gradient(circle at center, #0b1220 0%, #020617 70%);
    overflow:hidden;
  `

  // CSS dot starfield
  const dotBg = document.createElement('div')
  dotBg.style.cssText = `
    position:absolute;inset:0;
    background-image:
      radial-gradient(white 1px, transparent 1px),
      radial-gradient(rgba(255,255,255,.7) 1px, transparent 1px);
    background-size:140px 140px,220px 220px;
    background-position:0 0,60px 90px;
    opacity:.4;
  `
  overlay.appendChild(dotBg)

  // ── SVG ──
  const NS = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(NS, 'svg')
  svg.setAttribute('viewBox', '0 0 1400 800')
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;'

  // Gradients
  const defs = document.createElementNS(NS, 'defs')
  defs.innerHTML = `
    <linearGradient id="__aMainGrad__" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#ffffff"/>
      <stop offset="50%"  stop-color="#9ad8ff"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <linearGradient id="__aGlowGrad__" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#7fd3ff"/>
      <stop offset="50%"  stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ffe9a8"/>
    </linearGradient>
  `
  svg.appendChild(defs)

  const PTS = '430,250 760,340 930,430 980,610'

  // Glow line (thick + blurred underlay)
  const glowLine = document.createElementNS(NS, 'polyline')
  glowLine.setAttribute('points', PTS)
  glowLine.setAttribute('fill', 'none')
  glowLine.setAttribute('stroke', 'url(#__aGlowGrad__)')
  glowLine.setAttribute('stroke-width', '8')
  glowLine.setAttribute('stroke-linecap', 'round')
  glowLine.setAttribute('stroke-dasharray', '1000')
  glowLine.setAttribute('stroke-dashoffset', '1000')
  glowLine.style.cssText = 'opacity:.45;filter:blur(4px);animation:__aDrawLine 3s ease forwards;'
  svg.appendChild(glowLine)

  // Main line
  const mainLine = document.createElementNS(NS, 'polyline')
  mainLine.setAttribute('points', PTS)
  mainLine.setAttribute('fill', 'none')
  mainLine.setAttribute('stroke', 'url(#__aMainGrad__)')
  mainLine.setAttribute('stroke-width', '2.2')
  mainLine.setAttribute('stroke-linecap', 'round')
  mainLine.setAttribute('stroke-dasharray', '1000')
  mainLine.setAttribute('stroke-dashoffset', '1000')
  mainLine.style.cssText = `
    filter:drop-shadow(0 0 8px rgba(255,255,255,.9)) drop-shadow(0 0 18px rgba(120,180,255,.5));
    animation:__aDrawLine 3s ease forwards;
  `
  svg.appendChild(mainLine)

  // Energy flow dot
  const energyLine = document.createElementNS(NS, 'polyline')
  energyLine.setAttribute('points', PTS)
  energyLine.setAttribute('fill', 'none')
  energyLine.setAttribute('stroke', 'white')
  energyLine.setAttribute('stroke-width', '1.2')
  energyLine.setAttribute('stroke-linecap', 'round')
  energyLine.setAttribute('stroke-dasharray', '100 900')
  energyLine.style.cssText = 'opacity:.9;animation:__aFlowLine 4s linear infinite;'
  svg.appendChild(energyLine)

  // Star aura rings
  ;[
    { cx: 430, cy: 250, r: 28 },
    { cx: 760, cy: 340, r: 40 },
    { cx: 930, cy: 430, r: 24 },
    { cx: 980, cy: 610, r: 45 },
  ].forEach(a => {
    const c = document.createElementNS(NS, 'circle')
    c.setAttribute('cx', a.cx); c.setAttribute('cy', a.cy); c.setAttribute('r', a.r)
    c.setAttribute('fill', 'none')
    c.setAttribute('stroke', 'rgba(255,255,255,.35)')
    c.setAttribute('stroke-width', '2')
    c.style.filter = 'blur(1px)'
    svg.appendChild(c)
  })

  // 5-pointed star polygons
  ;[
    '430,236 435,247 447,249 438,257 441,269 430,262 419,269 422,257 413,249 425,247',
    '760,310 770,331 793,334 776,350 781,373 760,361 739,373 744,350 727,334 750,331',
    '930,417 936,428 948,430 939,438 942,450 930,444 918,450 921,438 912,430 924,428',
    '980,575 992,602 1020,605 998,625 1005,652 980,638 955,652 962,625 940,605 968,602',
  ].forEach(pts => {
    const poly = document.createElementNS(NS, 'polygon')
    poly.setAttribute('points', pts)
    poly.setAttribute('fill', 'white')
    poly.style.filter = 'drop-shadow(0 0 10px white) drop-shadow(0 0 25px rgba(255,255,255,.9))'
    svg.appendChild(poly)
  })

  overlay.appendChild(svg)

  // ARIES label
  const label = document.createElement('div')
  label.textContent = 'ARIES'
  label.style.cssText = `
    position:absolute;bottom:70px;left:0;right:0;
    text-align:center;color:white;
    font-size:28px;letter-spacing:12px;font-weight:200;
    font-family:'Plus Jakarta Sans',system-ui,sans-serif;
    text-shadow:0 0 10px rgba(255,255,255,.8),0 0 20px rgba(120,180,255,.4);
    opacity:0;animation:__aLabelIn 2s ease 2.5s forwards;
  `
  overlay.appendChild(label)

  document.body.appendChild(overlay)
  requestAnimationFrame(() => { overlay.style.opacity = '1' })

  // ── Fade out after 4.2 s ──
  setTimeout(() => {
    overlay.style.transition = 'opacity 0.8s ease'
    overlay.style.opacity = '0'
    setTimeout(() => overlay.remove(), 900)
  }, 4200)
}

// ── Tab visibility: title flips when you switch away ──
let _origTitle = ''
let _tabAttached = false
export function attachTabEgg() {
  if (_tabAttached) return
  _tabAttached = true
  _origTitle = document.title
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = 'come back... 👀'
    } else {
      document.title = _origTitle
      setTimeout(() => showToast('Welcome back! 👋', 2000), 400)
    }
  })
}

// ── Type "hire" anywhere ──
let _hireBuffer = ''
let _hireAttached = false
export function attachHireEgg() {
  if (_hireAttached) return
  _hireAttached = true
  document.addEventListener('keydown', (e) => {
    if (e.key.length !== 1) { _hireBuffer = ''; return }
    _hireBuffer = (_hireBuffer + e.key.toLowerCase()).slice(-4)
    if (_hireBuffer === 'hire') {
      _hireBuffer = ''
      spawnConfetti()
      showToast('Smart choice! 🎉 Let\'s talk → #contact', 3000)
    }
  })
}

// ── Idle 25s: subtle SenYu nudge ──
let _idleTimer = null
let _idleAttached = false
export function attachIdleEgg() {
  if (_idleAttached) return
  _idleAttached = true
  const reset = () => {
    clearTimeout(_idleTimer)
    _idleTimer = setTimeout(() => {
      showToast('Psst... check out SenYu 🏸 → senyubadminton.com', 4000)
    }, 25000)
  }
  reset()
  ;['mousemove','keydown','scroll','click','touchstart'].forEach(ev =>
    document.addEventListener(ev, reset, { passive: true })
  )
}
