import React from 'react'
import siteData from '../data/siteData'

export default function LeadershipSection(){
  const s = siteData.school
  return (
    <section className="leadership container">
      <h2 className="section-title">Leadership</h2>
      <div className="lead-cards">
        <div className="lead-card card">
          <div className="avatar-wrap">
           
          </div>
          <h4>Director</h4>
          <h3>{s.director}</h3>
          <p>Providing strategic leadership and community partnership.</p>
        </div>

        <div className="lead-card card">
          <div className="avatar-wrap">
            
          </div>
          <h4>Principal</h4>
          <h3>{s.principal}</h3>
          <p>Committed to high standards of learning and pastoral care.</p>
        </div>
      </div>
    </section>
  )
}
