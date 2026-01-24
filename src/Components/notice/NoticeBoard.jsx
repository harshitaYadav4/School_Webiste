import siteData from '../../data/siteData'
import NoticeCard from './NoticeCard'

export default function NoticeBoard({ limit = 5 }) {
  const notices = siteData.notices.slice(0, limit)

  return (
    <section className="notice-board container">
      <h3>Notice Board</h3>
      <div className="cards">
        {notices.map(n => (
          <NoticeCard key={n.id} notice={n} />
        ))}
      </div>
    </section>
  )
}
