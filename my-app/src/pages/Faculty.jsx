import React, {useState, useEffect} from 'react'
import siteData from '../data/siteData'
import FacultyGrid from '../components/FacultyGrid'
import SectionTitle from '../components/SectionTitle'
import Loader from '../components/Common/Loader'

export default function Faculty(){
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false),300)
    return ()=>clearTimeout(t)
  },[])

  if(loading) return <Loader />

  return (
    <main className="container">
      <SectionTitle eyebrow="Faculty" title="Our Teachers">A dedicated and qualified team committed to student success.</SectionTitle>
      <FacultyGrid people={siteData.faculty} />
      <section>
        <h3>Teaching Philosophy</h3>
        <p>We believe in fostering curiosity, resilience and confidence through supportive teaching and meaningful assessment.</p>
      </section>
    </main>
  )
}
