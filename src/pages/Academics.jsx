import React, { useState, useEffect } from 'react'
import SectionTitle from '../Components/SectionTitle'
import siteData from '../data/siteData'
import '../styles/admission.css'
import '../styles/global.css'
import Loader from '../Components/Common/Loader'

export default function Academics() {
  const [loading, setLoading] = useState(true)
  const s = siteData.school

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <main className="admission-page">

      {/* HERO */}
      <section
        className="hero-full full-bleed"
        style={{ backgroundImage: `url(${siteData.images[2]})` }}
      >
        <div className="container hero-overlay">
          <SectionTitle
            eyebrow="Admission"
            title="Admission Process"
          >
            Admission open for the academic session <strong>{s.session}</strong>.
            We follow a transparent and parent-friendly admission system.
          </SectionTitle>
        </div>
      </section>

      {/* PROCESS */}
      <section className="content-full full-bleed">
        <div className="container">
          <SectionTitle eyebrow="Steps" title="How to Apply" />

          <div className="cards steps-grid">
            <div className="card">
              <h4>📞 Enquiry</h4>
              <p>Visit the school campus or call us to understand our curriculum and facilities.</p>
            </div>
            <div className="card">
              <h4>📝 Application</h4>
              <p>Collect and submit the admission form along with required documents.</p>
            </div>
            <div className="card">
              <h4>🎓 Interaction</h4>
              <p>An informal interaction/assessment may be conducted for age-appropriate classes.</p>
            </div>
            <div className="card">
              <h4>✅ Confirmation</h4>
              <p>Selected students receive confirmation after fee submission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY + DOCUMENTS */}
      <section className="content-soft full-bleed">
        <div className="container two-col">
          <div>
            <SectionTitle eyebrow="Criteria" title="Eligibility" />
            <ul className="clean-list">
              <li>Age criteria as per government norms</li>
              <li>Previous school records (if applicable)</li>
              <li>Transfer certificate for Grade 2 onwards</li>
            </ul>
          </div>

          <div>
            <SectionTitle eyebrow="Documents" title="Required Documents" />
            <ul className="clean-list">
              <li>Birth Certificate</li>
              <li>Aadhaar Card (Student & Parent)</li>
              <li>2 Passport Size Photographs</li>
              <li>Previous Report Card</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ACADEMIC HIGHLIGHTS */}
      <section className="content-full full-bleed">
        <div className="container">
          <SectionTitle eyebrow="Academics" title="Why Choose Our School?" />

          <div className="cards">
            <div className="card">
              <h4>📚 Holistic Curriculum</h4>
              <p>Balanced focus on academics, sports, arts, and values.</p>
            </div>
            <div className="card">
              <h4>👩‍🏫 Experienced Faculty</h4>
              <p>Well-trained teachers dedicated to student growth.</p>
            </div>
            <div className="card">
              <h4>🧠 Activity-Based Learning</h4>
              <p>Smart classrooms and experiential teaching methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cta-section full-bleed">
        <div className="container">
          <h3>Need Help With Admission?</h3>
          <p>
            📞 {s.phones.join(' / ')} <br />
            📧 {s.email}
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Admission Office
          </a>
        </div>
      </section>

    </main>
  )
}
