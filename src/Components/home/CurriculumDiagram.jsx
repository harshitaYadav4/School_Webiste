import React, {useMemo} from 'react'
import siteData from '../../data/siteData'

// Animated rotating wheel layout
export default function CurriculumDiagram({ subjects = siteData.subjects, activities = siteData.activities, rotate=true }){
  const size = 360
  const cx = size/2
  const cy = size/2
  const r = 110
  const n = subjects.length

  const palette = ['#FF7A59','#FFD166','#4CC9F0','#80ED99','#B388EB','#FF6B9A','#FFB86B','#6EE7B7']
  const nodes = useMemo(()=> subjects.map((s,i)=>{
    const angle = (i / n) * Math.PI * 2 - Math.PI/2
    const x = cx + Math.cos(angle) * (r + 80)
    const y = cy + Math.sin(angle) * (r + 80)
    const rot = (angle * 180 / Math.PI)
    const color = palette[i % palette.length]
    return { label: s, x, y, rot, color }
  }),[subjects])

  // small utility to slightly darken a hex color for gradient
  function shadeColor(hex, percent) {
    try {
      const c = hex.replace('#','')
      const num = parseInt(c,16)
      let r = (num >> 16) + percent
      let g = ((num >> 8) & 0x00FF) + percent
      let b = (num & 0x0000FF) + percent
      r = Math.max(Math.min(255, r), 0)
      g = Math.max(Math.min(255, g), 0)
      b = Math.max(Math.min(255, b), 0)
      return `#${(r<<16 | g<<8 | b).toString(16).padStart(6,'0')}`
    } catch(e){
      return hex
    }
  }

  return (
    <div className="curriculum-wheel-wrap">
      <div className={`curriculum-wheel ${rotate ? 'wheel-rotating' : ''}`} style={{width: size, height: size}}>
        <div className="wheel-center">
          <div className="center-circle">
            <div className="center-title">Curriculum</div>
            <div className="center-sub">Core subjects</div>
          </div>
        </div>

        {nodes.map((n,i)=> (
          <div
            key={i}
            className="wheel-node"
            style={{ left: `${n.x - 32}px`, top: `${n.y - 32}px`, transform: `translate(-50%,-50%) rotate(${n.rot}deg)` }}
            aria-hidden
          >
            <div className="node-inner" style={{transform: `rotate(${-n.rot}deg)`}}>
              <div className="node-dot" style={{background: `linear-gradient(135deg, ${n.color}, ${shadeColor(n.color, -12)})`}}>
                <div className="dot-label">{n.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="curriculum-activities">
        {activities.map((a,i)=> (
          <span key={i} className="activity-pill">{a}</span>
        ))}
      </div>
    </div>
  )
}
