import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddCenter.css";

const AddCenter = () => {
  const [center, setCenter] = useState({
    center: "",
    address: "",
    slots: "",
    date: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCenter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://covid-jy70.onrender.com/vaccine`, center);
      navigate("/center");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="add-center-container">
      <div className="add-center-card">
        <h2 className="form-title">Add New Center</h2>
        <form className="center-form" onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Center Name"
            name="center"
            value={center.center}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={center.address}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Slots"
            name="slots"
            value={center.slots}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="date"
            placeholder="Issue date"
            name="date"
            value={center.date}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button onClick={handleClick} className="add-btn">
            Add
          </button>
        </form>
        {error && <p className="error-msg">Something went wrong!</p>}
        <Link to="/center" className="see-all-centers">
          See all centers
        </Link>
      </div>
    </div>
  );
};

export default AddCenter;
