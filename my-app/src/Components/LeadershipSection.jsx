import React from 'react'
import siteData from '../data/siteData'

export default function LeadershipSection(){
  const s = siteData.school
  return (
    <section className="leadership container">
      <div className="lead-cards">
        <div className="card">
          <h4>Director</h4>
          <h3>{s.director}</h3>
          <p>Providing strategic leadership and community partnership.</p>
        </div>
        <div className="card">
          <h4>Principal</h4>
          <h3>{s.principal}</h3>
          <p>Committed to high standards of learning and pastoral care.</p>
        </div>
      </div>
    </section>
  )
}
