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

      {/* About Info Section */}
      <section className="content-full about-section content-soft">
        <div className="container about-grid">
          <div className="about-content">
            <h3>Our Vision</h3>
            <p>
              To nurture young minds into confident, compassionate, and creative individuals who make a positive impact on society.
            </p>

            <h3>Our Mission</h3>
            <ul className="clean-list">
              <li>Provide a safe, inclusive, and stimulating learning environment.</li>
              <li>Encourage critical thinking, innovation, and problem-solving skills.</li>
              <li>Promote physical, emotional, and social development alongside academics.</li>
            </ul>

            <h3>Our Values</h3>
            <div className="vmv-cards">
              <div className="vmv-item">
                <div className="vmv-badge vmv-blue">V</div>
                <div className="vmv-card">
                  <h4>Values</h4>
                  <p>Integrity, honesty, respect, and empathy form the core of everything we do.</p>
                </div>
              </div>
              <div className="vmv-item">
                <div className="vmv-badge vmv-gold">M</div>
                <div className="vmv-card">
                  <h4>Mission</h4>
                  <p>Empowering students to achieve excellence in academics and life skills.</p>
                </div>
              </div>
              <div className="vmv-item">
                <div className="vmv-badge vmv-blue">V</div>
                <div className="vmv-card">
                  <h4>Vision</h4>
                  <p>To be recognized as a leading institution for holistic education and character development.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-illustration">
            <img src={siteData.images[3]} alt="School" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Join Our Learning Community</h2>
        <p>Admissions are open for the upcoming academic year. Be a part of a school that inspires excellence.</p>
        <a href="/admission" className="btn btn-primary">Apply Now</a>
      </section>
    </main>
  )
}
