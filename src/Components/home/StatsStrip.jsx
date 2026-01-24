export default function StatsStrip() {
  const stats = [
    { label: 'Students', value: 850 },
    { label: 'Teachers', value: 45 },
    { label: 'Years of Excellence', value: 12 },
    { label: 'Awards', value: 18 }
  ]

  return (
    <section className="cards">
      {stats.map((s, i) => (
        <div className="info-card" key={i}>
          <h2>{s.value}+</h2>
          <p>{s.label}</p>
        </div>
      ))}
    </section>
  )
}
