import React from 'react'
import '../../styles/loader.css'

export default function Loader(){
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <div className="spinner" />
    </div>
  )
}
