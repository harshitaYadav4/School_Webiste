import React from 'react'
import siteData from '../data/siteData'

export default function AdmissionCTA(){
  return (
    <section className="admission-cta">
      <div className="container cta-inner">
        <div>
          <h3>Admission Open</h3>
          <p>Academic Session {siteData.school.session} — Admissions open from {siteData.school.admissionOpenDate} for Nursery to 8th.</p>
        </div>
        <div>
          <a className="btn btn-primary" href="/admission">Apply Now</a>
        </div>
      </div>
    </section>
  )
}
