export default function NoticeCard({ notice }) {
  return (
    <div className="notice-card card">
      <div className="notice-meta">
        <span className="badge">{notice.category}</span>
        <span className="muted">{notice.date}</span>
      </div>
      <h4>{notice.title}</h4>
      <p>{notice.content}</p>
    </div>
  )
}
