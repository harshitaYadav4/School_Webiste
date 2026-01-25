import React from 'react'
import siteData from '../data/siteData'
import directorPic from '../assets/facultyimg/22.jpeg'
import principalPic from '../assets/facultyimg/24.jpeg'

export default function LeadershipSection(){
  const s = siteData.school
  return (
    <section className="leadership container">
      <h2 className="section-title">Leadership</h2>
      <div className="lead-cards">
        <div className="lead-card card">
          <div className="avatar-wrap">
            <img src={directorPic || s.directorImage} alt={`Director ${s.director}`} className="avatar" />
          </div>
          <h4>Director</h4>
          <h3>{s.director}</h3>
          <p>Providing strategic leadership and community partnership.</p>
        </div>

        <div className="lead-card card">
          <div className="avatar-wrap">
            <img src={principalPic || s.principalImage} alt={`Principal ${s.principal}`} className="avatar" />
          </div>
          <h4>Principal</h4>
          <h3>{s.principal}</h3>
          <p>Committed to high standards of learning and pastoral care.</p>
        </div>
      </div>
    </section>
  )
}
