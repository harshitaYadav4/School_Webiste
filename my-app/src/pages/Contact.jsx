import React, {useState, useEffect} from 'react'
import siteData from '../data/siteData'
import SectionTitle from '../Components/SectionTitle'
import Loader from '../Components/Common/Loader'

export default function Contact(){
  const [loading,setLoading] = useState(true)
  const s = siteData.school

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false),300)
    return ()=>clearTimeout(t)
  },[])

  if(loading) return <Loader />

  return (
    <main className="container contact-page">
      <SectionTitle eyebrow="Contact" title="Get In Touch">Reach our office for enquiries, visits and admissions.</SectionTitle>
      <section className="contact-grid">
        <div>
          <h4>Address</h4>
          <p>{s.address.replace(/\n/g,', ')}</p>
          <h4>Phone</h4>
          <p>{s.phones.join(' / ')}</p>
          <h4>Email</h4>
          <p>{s.email}</p>
          <h4>Timings</h4>
          <p>Office: {s.officeTiming} • School: {s.schoolTiming}</p>
        </div>
        <div className="map"><iframe title="map" src="https://www.google.com/maps?q=Rohtas&output=embed" loading="lazy"/></div>
      </section>
      <section className="enquiry">
        <h4>Enquiry</h4>
        <p>Call {s.phones[0]} or email {s.email} to request a prospectus or visit.</p>
      </section>
    </main>
  )
}
