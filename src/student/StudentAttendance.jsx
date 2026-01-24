export default function StudentAttendance() {
  return (
    <div className="card">
      <h3>📅 Attendance Overview</h3>

      <div className="attendance-grid">
        <div className="attendance-box present">
          <h4>Present</h4>
          <p>92%</p>
        </div>

        <div className="attendance-box absent">
          <h4>Absent</h4>
          <p>8%</p>
        </div>

        <div className="attendance-box total">
          <h4>Total Days</h4>
          <p>180</p>
        </div>
      </div>

      <p className="mt-20">
        ✔ Minimum required attendance is <strong>75%</strong>
      </p>
    </div>
  )
}
