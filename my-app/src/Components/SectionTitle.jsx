import React from 'react'

export default function SectionTitle({eyebrow,title,children}){
  return (
    <div className="section-title">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  )
}
