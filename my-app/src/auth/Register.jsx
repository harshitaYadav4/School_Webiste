import React, { useState } from 'react'
import AuthLayout from './AuthLayout'


export default function Register() {
  const [role, setRole] = useState('student')

  return (
    <AuthLayout title="Register">
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="parent">Parent</option>
      </select>

      <input placeholder="Full Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button className="btn btn-primary">Create Account</button>
    </AuthLayout>
  )
}