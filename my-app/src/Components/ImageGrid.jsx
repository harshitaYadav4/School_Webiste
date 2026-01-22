import React from 'react'

export default function ImageGrid({images,cols=3}){
  return (
    <div className="image-grid" style={{gridTemplateColumns:`repeat(${cols},1fr)`}}>
      {images.map((src,i)=>(
        <div key={i} className="img-card">
          <img src={src} alt={`gallery-${i}`} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
