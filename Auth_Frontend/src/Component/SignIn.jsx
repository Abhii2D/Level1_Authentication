import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: formData.username,
      password: formData.password
    };
    try {
      const response = await axios.post("http://localhost:8080/auth/find", payload);
      if (response.status === 200) {
        alert("Login Successful");
        setFormData({
          username: "",
          password: ""
        });
        navigate("/application");
      } else {
        alert("User Not Present");
      }
    } catch (error) {
      alert("Signup failed. Please try again.");
      setFormData({
        username: "",
        password: ""
      });
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ width: "300px" }}>
        <div className="card-header bg-primary text-white text-center">
          <h3>Sign In</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary w-100">Log In</button>
          </form>

          {/* Sign up link aligned to the bottom right */}
          <div className="text-end mt-3">
            <Link to="/signup" className="text-decoration-none">Don't have an account? Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
