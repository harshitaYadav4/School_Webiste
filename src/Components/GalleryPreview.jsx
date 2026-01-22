import React from 'react'
import ImageGrid from './ImageGrid'
import siteData from '../data/siteData'

export default function GalleryPreview(){
  return (
    <section className="gallery-preview container">
      <h3>Photo Gallery</h3>
      <p className="lead">A few moments from school life and activities.</p>
      <ImageGrid images={siteData.images} cols={3} />
      <div style={{textAlign:'center',marginTop:18}}>
        <a className="btn btn-ghost" href="/gallery">View Full Gallery</a>
      </div>
    </section>
  )
}
