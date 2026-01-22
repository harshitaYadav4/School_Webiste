import React, {useState, useEffect} from 'react'
import ImageGrid from '../components/ImageGrid'
import siteData from '../data/siteData'
import SectionTitle from '../components/SectionTitle'
import Loader from '../components/Common/Loader'

export default function Gallery(){
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false),300)
    return ()=>clearTimeout(t)
  },[])

  if(loading) return <Loader />

  return (
    <main className="container">
      <SectionTitle eyebrow="Gallery" title="School Gallery">Photos of campus, classrooms and events.</SectionTitle>
      <ImageGrid images={siteData.images.concat(siteData.images)} cols={4} />
    </main>
  )
}
