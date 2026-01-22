import React, {useState, useEffect} from 'react'
import SectionTitle from '../components/SectionTitle'
import siteData from '../data/siteData'
import Loader from '../components/Common/Loader'

export default function About(){
  const [loading,setLoading] = useState(true)
  const s = siteData.school

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false),400)
    return ()=>clearTimeout(t)
  },[])

  if(loading) return <Loader />

  return (
    <main className="container">
      <SectionTitle eyebrow="About" title="About Global Model Public School">Founded in {s.established}, we are committed to academic excellence and character development.</SectionTitle>
      <section>
        <h3>Vision</h3>
        <p>To nurture young minds into lifelong learners and responsible citizens.</p>
        <h3>Mission</h3>
        <p>Deliver a balanced education that blends academic rigour with values, activity and community engagement.</p>
        <h3>Values</h3>
        <ul>
          <li>Integrity</li>
          <li>Respect</li>
          <li>Curiosity</li>
          <li>Excellence</li>
        </ul>
      </section>
      <section>
        <h3>Leadership Messages</h3>
        <div className="lead-messages">
          <div className="card">
            <h4>Director: {s.director}</h4>
            <p>Our aim is to create a school that serves the community and prepares children for a changing world.</p>
          </div>
          <div className="card">
            <h4>Principal: {s.principal}</h4>
            <p>I am dedicated to ensuring every child is known, supported and challenged to reach their potential.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
