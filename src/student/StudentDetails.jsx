export default function StudentDetails() {
  return (
    <div className="content-long">

      <section className="card">
        <h2>🧑‍🎓 Student Profile</h2>
        <p className="lead">Complete personal and academic information</p>
      </section>

      <section className="card">
        <h3>📌 Personal Information</h3>
        <p><strong>Name:</strong> Rahul Kumar</p>
        <p><strong>Roll No:</strong> 21</p>
        <p><strong>Class:</strong> 10-A</p>
        <p><strong>Date of Birth:</strong> 12-04-2008</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Blood Group:</strong> O+</p>
      </section>

      <section className="card">
        <h3>👨‍👩‍👦 Family Information</h3>
        <p><strong>Father’s Name:</strong> Rajesh Kumar</p>
        <p><strong>Mother’s Name:</strong> Sunita Kumar</p>
        <p><strong>Guardian Contact:</strong> 9876543210</p>
        <p><strong>Address:</strong> Patna, Bihar</p>
      </section>

      <section className="card">
        <h3>🏫 School Information</h3>
        <p><strong>Admission No:</strong> SCH2021-102</p>
        <p><strong>Section:</strong> A</p>
        <p><strong>Medium:</strong> English</p>
        <p><strong>Admission Date:</strong> 10 June 2021</p>
      </section>

      <section className="card">
        <h3>🩺 Medical Information</h3>
        <p><strong>Height:</strong> 165 cm</p>
        <p><strong>Weight:</strong> 58 kg</p>
        <p><strong>Allergies:</strong> None</p>
        <p><strong>Special Notes:</strong> Fit & Healthy</p>
      </section>

      <section className="card">
        <h3>📂 Documents Uploaded</h3>
        <ul>
          <li>✔ Birth Certificate</li>
          <li>✔ Aadhar Card</li>
          <li>✔ Previous Marksheet</li>
          <li>✔ Transfer Certificate</li>
        </ul>
      </section>

    </div>
  )
}
