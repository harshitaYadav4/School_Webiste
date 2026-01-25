import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from './AuthLayout'

export default function Login() {
  const [role, setRole] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    login({ role })
    if (role === 'admin') navigate('/admin')
    else if (role === 'student') navigate('/student')
    else navigate('/')
  }

  return (
    <AuthLayout title="Welcome Back">
      <p className="auth-sub">Sign in to access your dashboard and school resources.</p>

      <form className="auth-form" onSubmit={handleLogin}>
        <label className="form-label">
          <span>Email</span>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@school.edu" required />
        </label>

        <label className="form-label">
          <span>Password</span>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" required />
        </label>

        <div className="form-row">
          <div className="form-left">
            <label className="inline"><input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} /> Remember me</label>
          </div>
          <div className="form-right">
            <Link to="/forgot">Forgot?</Link>
          </div>
        </div>

        <div className="role-select">
          <label>Login as:</label>
          <select value={role} onChange={e=>setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button className="btn btn-primary" type="submit">Sign In</button>
      </form>

      <div className="auth-links">New here? <Link to="/register">Create an account</Link></div>
    </AuthLayout>
  )
}
