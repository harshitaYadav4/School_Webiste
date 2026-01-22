import React, {useState, useEffect} from 'react'
import SectionTitle from '../components/SectionTitle'
import siteData from '../data/siteData'
import AdmissionProcess from '../components/AdmissionProcess'
import '../styles/admission.css'
import Loader from '../components/Common/Loader'

export default function Admission(){
  const [loading,setLoading] = useState(true)
  const s = siteData.school
  const steps = [
    { title: 'Visit & Enquiry', desc: 'Visit the school office or call to schedule a visit.' },
    { title: 'Application Form', desc: 'Fill the application form available at the office.' },
    { title: 'Submit Documents', desc: 'Submit required documents and fees.' }
  ]

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false),350)
    return ()=>clearTimeout(t)
  },[])

  if(loading) return <Loader />

  return (
    <main className="admission-page">
      <section className="hero-full full-bleed" style={{backgroundImage:`url(${siteData.images[2]})`}}>
        <div className="container">
          <SectionTitle eyebrow="Admission" title="Admission Process">Admission open for the academic session {s.session}. Follow the steps below to apply.</SectionTitle>
        </div>
      </section>

      <section className="content-full full-bleed">
        <div className="container">
          <h3>How to Apply</h3>
          <AdmissionProcess steps={steps} />

          <h3 style={{marginTop:28}}>Required Documents</h3>
          <ul>
            <li>Birth certificate</li>
            <li>Address proof</li>
            <li>Passport size photo</li>
          </ul>

          <h3>Contact</h3>
          <p>Phone: {s.phones.join(' / ')} • Email: {s.email}</p>
        </div>
      </section>
    </main>
  )
}
