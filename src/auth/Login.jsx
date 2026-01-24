import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [role, setRole] = useState('student')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login({ role })

    if (role === 'admin') navigate('/admin')
    else if (role === 'student') navigate('/student')
    else navigate('/')
  }

  return (
    <div className="auth-card">
      <h2>Login</h2>

      <select onChange={e => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="parent">Parent</option>
        <option value="admin">Admin</option>
      </select>

      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
