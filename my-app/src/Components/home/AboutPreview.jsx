import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import siteData from '../../data/siteData'

export default function AboutPreview(){
  const s = siteData.school
  return (
    <div className="about-preview">
      <div className="about-preview__text">
        <SectionTitle eyebrow="About" title="About Our School">Global Model Public School was established in {s.established} with the mission to provide a modern, values-driven education to children from Nursery to 8th grade. We blend a bilingual curriculum with activity-based learning, strong pastoral care, and community engagement to build confident, compassionate learners.</SectionTitle>
        <p className="lead">We emphasise foundational skills, inquiry-led science and mathematics, reading and language development, and socio-emotional learning. Classrooms are safe, well-resourced and led by qualified teachers.</p>
      </div>

      <aside className="about-preview__vmv">
        <div className="preview-vmv">
          <div className="info-card">
            <div className="badge">V</div>
            <div className="card-body">
              <h4>Vision</h4>
              <p>A future-focused learning ethos that inspires curiosity and citizenship. To inspire curious, confident learners who contribute responsibly to society.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="badge badge-gold">M</div>
            <div className="card-body">
              <h4>Mission</h4>
              <p>Deliver a balanced education that blends academic rigour with activity and values. To provide an engaging, balanced education that develops academic skills, character, and creativity.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="badge">V</div>
            <div className="card-body">
              <h4>Values</h4>
              <p>Integrity, Respect, Curiosity and Excellence guide all our work with children. We uphold these values in every classroom and community activity.</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
