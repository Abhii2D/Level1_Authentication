import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password
    };
    try {
      const response = await axios.post("http://localhost:8080/auth/create", payload);
      alert("Signup successful!");
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });
      
    } catch (error) {
      alert("Signup failed. Please try again.");
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ width: "300px" }}>
        <div className="card-header bg-primary text-white text-center">
          <h3>Sign Up</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>

          {/* Sign in link aligned to the bottom right */}
          <div className="text-end mt-3">
            <Link to="/" className="text-decoration-none">Already have an account? Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
