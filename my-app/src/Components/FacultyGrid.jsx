import React from 'react'
import FacultyCard from './FacultyCard'

export default function FacultyGrid({people}){
  return (
    <div className="faculty-grid container">
      {people.map((p,i)=>(<FacultyCard key={i} person={p}/>))}
    </div>
  )
}
