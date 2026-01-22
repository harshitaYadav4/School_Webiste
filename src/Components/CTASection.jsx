import React from 'react'

export default function CTASection({title,desc,btnText,btnHref}){
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div>
          <a className="btn btn-primary" href={btnHref||'/contact'}>{btnText||'Get in Touch'}</a>
        </div>
      </div>
    </section>
  )
}
