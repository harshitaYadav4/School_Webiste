import React from 'react'

export default function AdmissionProcess({steps}){
  return (
    <div className="admission-steps" aria-label="Admission steps">
      {steps.map((s, i)=> (
        <div className={`step ${i === steps.length-1 ? 'last' : ''}`} key={i}>
          <div className="step-inner">
            <div className="step-number">{i+1}</div>
            <div className="step-body">
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          </div>
          <div className="connector" aria-hidden />
        </div>
      ))}
    </div>
  )
}
