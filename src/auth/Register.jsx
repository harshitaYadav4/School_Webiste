import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'

export default function Register() {
  const [role, setRole] = useState('student')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up registration
    alert('Account created (demo)')
  }

  return (
    <AuthLayout title="Create an Account">
      <p className="auth-sub">Register to access student/parent features. Use a valid email.</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="form-label">
          <span>Full name</span>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" required />
        </label>

        <label className="form-label">
          <span>Email</span>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@school.edu" required />
        </label>

        <label className="form-label">
          <span>Password</span>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Create a password" required />
        </label>

        <label className="form-label">
          <span>Register as</span>
          <select value={role} onChange={e=>setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
        </label>

        <label className="inline">
          <input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} /> I agree to the <Link to="/terms">Terms</Link>
        </label>

        <button className="btn btn-primary" type="submit" disabled={!agree}>Create Account</button>
      </form>

      <div className="auth-links">Already have an account? <Link to="/login">Sign in</Link></div>
    </AuthLayout>
  )
}