import siteData from '../../data/siteData'

export default function EventsPreview() {
  const events = siteData?.events || []

  if (!events.length) return null

  return (
    <section className="card">
      <h3>📅 Upcoming Events</h3>
      <ul className="notice-list">
        {events.map(e => (
          <li key={e.id}>
            <strong>{e.title}</strong> — {e.date}
          </li>
        ))}
      </ul>
    </section>
  )
}
