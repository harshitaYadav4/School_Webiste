import React from 'react'
import ImageGrid from './ImageGrid'
import siteData from '../data/siteData'

export default function FacilitiesSection(){
  return (
    <section className="facilities container">
      <h3>Facilities & Infrastructure</h3>
      <p className="lead">Modern classrooms, safe playgrounds and well-equipped activity spaces.</p>
      <ImageGrid images={siteData.images.slice(0,4)} cols={4} />
    </section>
  )
}
