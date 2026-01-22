import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import siteData from '../data/siteData'
import '../styles/about.css'

export default function About() {
  const s = siteData.school

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="hero-full" style={{ backgroundImage: `url(${siteData.images[1]})` }}>
        <div className="hero-overlay">
          <div className="container hero-content">
            <SectionTitle eyebrow="About Us" title="Global Model Public School">
              Established in {s.established}, we are committed to providing quality education that shapes
              the leaders of tomorrow.
            </SectionTitle>
            <p className="hero-sub">
              Excellence in academics, holistic development, and value-based learning for every student.
            </p>
          </div>
        </div>
      </section>

      {/* About Info Section - redesigned */}
      <section className="content-full about-section content-soft">
        <div className="container about-grid grid-2">
          <div className="about-left">
            <div className="panel vision-panel">
              <h3>Our Vision</h3>
              <p className="lead">To nurture young minds into confident, compassionate, and creative individuals who make a positive impact on society.</p>
              <p>We focus on character formation, inquiry-led learning, and meaningful community engagement so children grow academically and morally.</p>
              <div className="quick-stats">
                <div><strong>Established</strong><span>{s.established}</span></div>
                <div><strong>Grades</strong><span>{s.classes}</span></div>
                <div><strong>Medium</strong><span>{s.medium}</span></div>
              </div>
            </div>

            <div className="approach-cards">
              <div className="approach-card academic">
                <div className="approach-icon icon-academic" aria-hidden>🎓</div>
                <div className="approach-body">
                  <h4>Academic Approach</h4>
                  <p className="lead">Inquiry‑led, competency‑based learning.</p>
                  <p>We blend bilingual instruction with hands‑on activities and formative assessment to build lasting understanding.</p>
                </div>
              </div>

              <div className="approach-card community">
                <div className="approach-icon icon-community" aria-hidden>🤝</div>
                <div className="approach-body">
                  <h4>Community &amp; Care</h4>
                  <p className="lead">Partnerships with families and local community.</p>
                  <p>Personalised pastoral care and open communication ensure every child feels supported and included.</p>
                </div>
              </div>

              <div className="approach-card holistic">
                <div className="approach-icon icon-holistic" aria-hidden>🌱</div>
                <div className="approach-body">
                  <h4>Holistic Growth</h4>
                  <p className="lead">Balanced academic, creative and physical development.</p>
                  <p>Regular co‑curriculars, sports and wellbeing programmes nurture the whole child.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="about-right">
            <div className="about-illustration card">
              <img src={siteData.images[3]} alt="School" />
            </div>

            <div className="vmv-panel card">
              <div className="vmv-row">
                <div className="vmv-box">
                  <h5>Vision</h5>
                  <p>Inspiring curious, responsible learners who contribute to society.</p>
                </div>
                <div className="vmv-box">
                  <h5>Mission</h5>
                  <p>Deliver a balanced, engaging education that develops skills and character.</p>
                </div>
              </div>
              <div className="vmv-row">
                <div className="vmv-box">
                  <h5>Values</h5>
                  <p>Integrity, Respect, Curiosity and Excellence embedded across school life.</p>
                </div>
                <div className="vmv-box">
                  <h5>Est.</h5>
                  <p>{s.established}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA removed per request */}
    </main>
  )
}
