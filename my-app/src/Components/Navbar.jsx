import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'
import logo from '../assets/images/logo.png'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="site-nav">
      <div className="nav-inner container">

        {/* BRAND */}
        <Link to="/" className="brand">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <h1 className="brand-title">Global Model Public School</h1>
            <p className="brand-sub">Established 2026</p>
          </div>
        </Link>

        {/* MAIN MENU */}
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/faculty">Faculty</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>

          {/* ADMIN ONLY */}
          {user?.role === 'admin' && (
            <Link to="/admin" className="admin-link">Dashboard</Link>
          )}
        </nav>

        {/* RIGHT SIDE CTA */}
        <div className="nav-cta">

          {!user && (
            <>
              <Link to="/login" className="btn btn-ghost">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </>
          )}

          {user && (
            <div className="user-menu">
              <span className="user-role">
                {user.role.toUpperCase()}
              </span>
              <button onClick={handleLogout} className="btn btn-ghost">
                Logout
              </button>
            </div>
          )}

        </div>

      </div>
    </header>
  )
}

