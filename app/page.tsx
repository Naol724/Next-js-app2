// app/page.tsx (Next.js 13 app directory)
import Image from "next/image";
import { useState } from "react";

interface Student {
  name: string;
  email: string;
  studentId: string;
}

export default function Home() {
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
    console.log("Student Registered:", student);
    alert(`Student ${student.name} registered successfully!`);
    setStudent({ name: "", email: "", studentId: "" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register Student</h2>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "500px" }}>
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
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Register
          </button>
        </form>
      </main>
    </div>
  );
}
