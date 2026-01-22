import React, {useEffect} from 'react'

export default function Lightbox({images, index=0, onClose}){
  const img = images[index]

  useEffect(()=>{
    function onKey(e){
      if(e.key === 'Escape') onClose()
      if(e.key === 'ArrowRight') onClose('next')
      if(e.key === 'ArrowLeft') onClose('prev')
    }
    window.addEventListener('keydown', onKey)
    return ()=>window.removeEventListener('keydown', onKey)
  },[onClose])

  if(!img) return null

  return (
    <div className="lightbox-overlay" onMouseDown={(e)=>{ if(e.target.classList.contains('lightbox-overlay')) onClose() }}>
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={()=>onClose()}>×</button>
        <button className="lightbox-nav prev" onClick={()=>onClose('prev')} aria-label="Previous">‹</button>
        <img src={img} alt={`lightbox-${index}`} className="lightbox-img" />
        <button className="lightbox-nav next" onClick={()=>onClose('next')} aria-label="Next">›</button>
        <div className="lightbox-counter">{index+1} / {images.length}</div>
      </div>
    </div>
  )
}
