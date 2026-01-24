import React from 'react'
import siteData from '../data/siteData'

export default function Dashboard() {
  return (
    <main className="container">
      <h2>Admin Dashboard</h2>

      <div className="cards">
        <div className="card">Students: 120+</div>
        <div className="card">Teachers: {siteData.faculty.length}</div>
        <div className="card">Classes: Nursery – 8</div>
      </div>

      <section>
        <h3>Quick Actions</h3>
        <ul>
          <li>Add Student</li>
          <li>Upload Notice</li>
          <li>Update Gallery</li>
        </ul>
      </section>

      <section className="admin-section">
  <h3>Manage Notices</h3>

  <form className="card">
    <input placeholder="Notice title" />
    <select>
      <option>Admission</option>
      <option>Holiday</option>
      <option>Exam</option>
    </select>
    <textarea placeholder="Notice content" rows="3" />
    <button className="btn btn-primary">Add Notice</button>
  </form>
</section>
    </main>
  )
}
