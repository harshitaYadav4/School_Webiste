import React from 'react'

export default function FacultyCard({ person }) {
  const initials = person.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
  const colorIndex = person.name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 6
  const colors = ['#FF7A59', '#FFD166', '#4CC9F0', '#80ED99', '#B388EB', '#FF6B9A']
  const bg = colors[colorIndex]

  const hasImage = Boolean(person.image)

  return (
    <div className="faculty-card card">
      {hasImage ? (
        <div className="avatar avatar-img" aria-hidden>
          <img src={person.image} alt={`${person.name} photo`} />
        </div>
      ) : (
        <div className="avatar" style={{ background: `linear-gradient(135deg, ${bg}, ${bg}99)` }} aria-hidden>
          <span className="initials">{initials}</span>
        </div>
      )}

      <div className="faculty-info">
        <h4>{person.name}</h4>
        <p className="muted">{person.role} • {person.qual}</p>
      </div>
    </div>
  )
}
