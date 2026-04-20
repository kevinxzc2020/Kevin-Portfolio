import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 👀 Console easter egg
console.log(
  '%c🏸 Hey, you opened the console.',
  'color: #002FA7; font-size: 1.1rem; font-weight: bold;'
)
console.log(
  '%cCurious, aren\'t you?\nThere are 13 easter eggs hidden somewhere on this site.\nCan you find them all?',
  'color: #6b7280; font-size: 0.85rem; line-height: 1.8;'
)
console.log(
  '%c💡 Hint: one involves a sequence, one needs patience, one needs the right words.',
  'color: #1240c4; font-size: 0.8rem; font-style: italic;'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
