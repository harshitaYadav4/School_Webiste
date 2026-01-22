import React from 'react'

export default function AuthLayout({ title, children }) {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>{title}</h2>
        {children}
      </div>
    </main>
  )
}

