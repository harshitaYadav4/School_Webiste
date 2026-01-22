import React from 'react'

export default function FacultyCard({person}){
  return (
    <div className="faculty-card card">
      <div className="avatar" aria-hidden />
      <div>
        <h4>{person.name}</h4>
        <p className="muted">{person.role} • {person.qual}</p>
      </div>
    </div>
  )
}
