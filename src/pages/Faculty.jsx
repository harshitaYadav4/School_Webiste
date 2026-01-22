import React, {useState, useEffect, useMemo} from 'react'
import siteData from '../data/siteData'
import FacultyGrid from '../components/FacultyGrid'
import SectionTitle from '../components/SectionTitle'
import Loader from '../components/Common/Loader'

export default function Faculty(){
  const [loading,setLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false),300)
    return ()=>clearTimeout(t)
  },[])

  const people = siteData.faculty || []

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    if(!q) return people
    return people.filter(p => (p.name + ' ' + p.role + ' ' + (p.qual||'')).toLowerCase().includes(q))
  },[people,query])

  if(loading) return <Loader />

  return (
    <main className="container page-faculty">
      <SectionTitle eyebrow="Faculty" title="Our Teachers">A dedicated and qualified team committed to student success.</SectionTitle>

      <div className="faculty-controls">
        <input className="search" placeholder="Search teachers by name, subject or qualification" value={query} onChange={e=>setQuery(e.target.value)} />
        <div className="count muted">{filtered.length} teacher{filtered.length!==1 ? 's':''}</div>
      </div>

      <FacultyGrid people={filtered} />

      <section className="mt-20">
        <h3>Teaching Philosophy</h3>
        <p>We believe in fostering curiosity, resilience and confidence through supportive teaching and meaningful assessment.</p>
      </section>
    </main>
  )
}
