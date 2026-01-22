import React from 'react'
import SectionTitle from './SectionTitle'
import siteData from '../data/siteData'

export default function HighlightsSection(){
  return (
    <section className="highlights container">
      <SectionTitle eyebrow="Academic" title="Academic Highlights">Key features of our school programme and learning outcomes.</SectionTitle>
      <div className="cards">
        {siteData.highlights.map((h,i)=>(
          <div className="card" key={i}>
            <h4>{h.title}</h4>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
