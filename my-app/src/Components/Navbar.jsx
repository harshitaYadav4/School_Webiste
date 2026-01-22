import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import logo from '../assets/images/logo.png'

export default function Navbar(){
  return (
    <header className="site-nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <h1 className="brand-title">Global Model Public School</h1>
            <p className="brand-sub">Established 2026 </p>
          </div>
        </Link>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/faculty">Faculty</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-cta">
          <a href="tel:9508579707" className="btn btn-primary">Call: 9508579707</a>
        </div>
      </div>
    </header>
  )
}
