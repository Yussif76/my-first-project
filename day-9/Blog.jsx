import React, { useState } from "react";
import "./blog.css";

export default function Blog() {
  const [username, setUsername] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="container-fluid  p-3">
        <form onSubmit={handleSubmit} className="w-25 p-4" style={{ backgroundColor: "#f8f9fa", borderRadius: "10px", margin:'auto' }}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter Your Job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Enter Your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button">Add Data</button>
        </form>

        {submitted && (
          <div className="w-100 p-5" style={{ backgroundColor: "#e9ecef", borderRadius: "10px", marginTop: "20px" }}>
            <p><strong> User Name : </strong> {username}</p>
            <p><strong>Your Job : </strong> {job}</p>
            <p><strong>Your Email : </strong> {email}</p>
            <p><strong>Your Age : </strong> {age}</p>
          </div>
        )}
      </div>
    </>
  );
}
