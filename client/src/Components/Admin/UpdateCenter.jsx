// UpdateCenter.js

import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./UpdateCenter.css";

const UpdateCenter = () => {
  const [book, setBook] = useState({
    center: "",
    address: "",
    slots: "",
    date: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const vaccineId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/vaccine/${vaccineId}`, book);
      navigate("/center");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        <h1 className="form-title">Update the Center</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Center Name"
            name="center"
            className="form-input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            className="form-input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Slots"
            name="slots"
            className="form-input"
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Issue date"
            name="date"
            className="form-input"
            onChange={handleChange}
          />
          <button className="form-btn" onClick={handleClick}>
            Update
          </button>
          {error && <div className="error-msg">Something went wrong!</div>}
        </form>
        <Link to="/center" className="link">
          See all centers
        </Link>
      </div>
    </div>
  );
};

export default UpdateCenter;
