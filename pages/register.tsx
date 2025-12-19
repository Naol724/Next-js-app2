// pages/register.tsx
import { useState } from "react";

interface Student {
  name: string;
  email: string;
  studentId: string;
}

export default function RegisterPage() {
  const [student, setStudent] = useState<Student>({
    name: "",
    email: "",
    studentId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just log the data
    console.log("Student Registered:", student);
    alert(`Student ${student.name} registered successfully!`);
    // Reset the form
    setStudent({ name: "", email: "", studentId: "" });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Student ID:</label>
          <input
            type="text"
            name="studentId"
            value={student.studentId}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px" }}>
          Register
        </button>
      </form>
    </div>
  );
}
