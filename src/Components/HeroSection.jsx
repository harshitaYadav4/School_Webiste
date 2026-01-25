import React from 'react'
import siteData from '../data/siteData'
import banner from '../assets/images/banner.png'

export default function HeroSection(){
  const s = siteData.school
  return (
    <section className="hero">
      <div className="hero-media" style={{backgroundImage:`url(${banner})`}} />
      <div className="hero-content container">
        <h1>{s.name}</h1>
        <p className="hero-sub">A premium learning experience — {s.type} • Session {s.session}</p>
        <div className="hero-cta">
          <a className="btn btn-ghost" href="/admission">Admission Open: {s.admissionOpenDate}</a>
          <a className="btn btn-primary" href="/contact">Enquire Now</a>
        </div>
      </div>
    </section>
  )
}
