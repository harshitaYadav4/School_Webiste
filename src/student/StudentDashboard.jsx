import { useState } from 'react'
import StudentLibrary from './StudentLibrary'
import StudentProfile from './StudentProfile'
import StudentDetails from './StudentDetails'
import StudentResult from './StudentResult'
import siteData from '../data/siteData'
import '../styles/dashboard.css'

export default function StudentDashboard() {
  const [active, setActive] = useState('overview')

  // ✅ SAFE DEFAULT DATA
  const studentNotices = siteData?.studentNotices || [
    { id: 1, title: 'Mid-Term exams start from 10 Oct' },
    { id: 2, title: 'Submit library books before 20 Oct' },
    { id: 3, title: 'College closed on 2 Oct' },
    { id: 4, title: 'Annual function registrations open' }
  ]

  return (
    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">
        <h3>🎓 Student Panel</h3>

        <button onClick={() => setActive('overview')}>🏠 Dashboard</button>
        <button onClick={() => setActive('library')}>📚 Library</button>
        <button onClick={() => setActive('profile')}>👨‍🎓 Profile</button>
        <button onClick={() => setActive('details')}>📝 Details</button>
        <button onClick={() => setActive('result')}>📊 Result</button>
      </aside>

      {/* ================= CONTENT ================= */}
      <main className="content scroll-area">

        {/* DASHBOARD OVERVIEW */}
        {active === 'overview' && (
          <>
            <div className="card mb-20">
              <h2>Welcome, Rahul Kumar 👋</h2>
              <p>BCA 2nd Year | Roll No: 1023</p>
            </div>

            <div className="card mb-20">
              <h3>📅 Attendance Summary</h3>
              <p>Total Classes: 180</p>
              <p>Present: 165</p>
              <p>Absent: 15</p>
              <p><strong>Attendance:</strong> 91%</p>
            </div>

            <div className="card mb-20">
              <h3>💰 Fee Status</h3>
              <p>Total Fees: ₹25,000</p>
              <p>Paid: ₹20,000</p>
              <p>Pending: ₹5,000</p>
              <button className="btn btn-secondary">Pay Fees</button>
            </div>

            <div className="card mb-20">
              <h3>📢 Latest Notices</h3>
              <ul className="notice-list">
                {studentNotices.slice(0, 5).map(n => (
                  <li key={n.id}>{n.title}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* OTHER SECTIONS */}
        {active === 'library' && <StudentLibrary />}
        {active === 'profile' && <StudentProfile />}
        {active === 'details' && <StudentDetails />}
        {active === 'result' && <StudentResult />}

      </main>
    </div>
  )
}
