import siteData from '../../data/siteData'

import '../styles/noticeTicker.css'
export default function NoticeTicker() {
  return (
    <div className="notice-ticker">
      <div className="ticker-track">
        {siteData.notices.map(n => (
          <span key={n.id} className="ticker-item">
            📢 {n.title}
          </span>
        ))}
      </div>
    </div>
  )
}
