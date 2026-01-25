import React from 'react'
import siteData from '../data/siteData'

export default function AdmissionCTA(){
  return (
    <section className="admission-cta full-bleed">
      <div className="container cta-inner">
        <div className="cta-text">
          <h3>Admission Open</h3>
          <p>Academic Session {siteData.school.session} — Admissions open from {siteData.school.admissionOpenDate} for Nursery to 8th. Limited seats available.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href="/admission">Apply Now</a>
          <a className="btn btn-ghost" href="/admission#requirements">Requirements</a>
        </div>
      </div>
    </section>
  )
}
