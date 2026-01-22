import React, {useState, useCallback} from 'react'
import Lightbox from './Common/Lightbox'

export default function ImageGrid({images,cols=3}){
  const [openIndex,setOpenIndex] = useState(-1)

  const handleClose = useCallback((action)=>{
    if(action === 'next') setOpenIndex(i => (i+1) % images.length)
    else if(action === 'prev') setOpenIndex(i => (i-1 + images.length) % images.length)
    else setOpenIndex(-1)
  },[images.length])

  return (
    <>
      <div className="image-grid" style={{gridTemplateColumns:`repeat(${cols},1fr)`}}>
        {images.map((src,i)=>(
          <div key={i} className="img-card" onClick={()=>setOpenIndex(i)}>
            <img src={src} alt={`gallery-${i}`} loading="lazy" />
          </div>
        ))}
      </div>

      {openIndex >= 0 && (
        <Lightbox images={images} index={openIndex} onClose={handleClose} />
      )}
    </>
  )
}
