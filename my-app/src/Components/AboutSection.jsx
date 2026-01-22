import React from 'react'
import SectionTitle from './SectionTitle'
import siteData from '../data/siteData'
import AboutIllustration from './AboutIllustration'
import '../styles/about.css'

export default function AboutSection(){
  const s = siteData.school
  return (
    <section className="about container about-section">
      <div>
        <SectionTitle eyebrow="About" title="About Our School">Global Model Public School was established in {s.established} with the mission to provide a modern, values-driven education to children from Nursery to 8th grade. We blend a bilingual curriculum with activity-based learning, strong pastoral care, and community engagement to build confident, compassionate learners.</SectionTitle>

        <div className="vmv-box">
          <div className="vmv-inner">
            <div className="vmv-cards">
              <div className="vmv-item">
                <div className="vmv-badge vmv-blue">V</div>
                <div className="vmv-card">
                  <h4>Vision</h4>
                  <p>A future-focused learning ethos that inspires curiosity and citizenship. To inspire curious, confident learners who contribute responsibly to society.</p>
                </div>
              </div>

              <div className="vmv-item">
                <div className="vmv-badge vmv-gold">M</div>
                <div className="vmv-card">
                  <h4>Mission</h4>
                  <p>Deliver a balanced education that blends academic rigour with activity and values. To provide an engaging, balanced education that develops academic skills, character, and creativity.</p>
                </div>
              </div>

              <div className="vmv-item">
                <div className="vmv-badge vmv-blue">V</div>
                <div className="vmv-card">
                  <h4>Values</h4>
                  <p>Integrity, Respect, Curiosity and Excellence guide all our work with children. We uphold these values in every classroom and community activity.</p>
                </div>
              </div>
            </div>

            <div className="vmv-footer">Est. {s.established}</div>
          </div>
        </div>

        <div className="card more-content">
          <h3>Our Approach</h3>
          <p className="lead">We emphasise foundational skills, inquiry-led science and mathematics, reading and language development, and socio-emotional learning. Classrooms are safe, well-resourced and led by qualified teachers.</p>
          <h3>Community & Care</h3>
          <p>Situated at Village Nawadih in Rohtas district, our school welcomes families from nearby communities and provides a supportive environment for children to thrive academically and personally.</p>
        </div>
      </div>

      <aside>
        <AboutIllustration />
      </aside>
    </section>
  )
}
