import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Centers.css";

const Centers = () => {
    const [centers, setCenters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCenters = async () => {
            try {
                const res = await axios.get(`https://covid-jy70.onrender.com/vaccine`);
                setCenters(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCenters();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://covid-jy70.onrender.com/vaccine/${id}`);
            setCenters(centers.filter(center => center.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="centers-container">
            <div className="header">
                <h1 className="title">Welcome, Kamalesh</h1>
                <button className="logout-btn" onClick={() => navigate("/admin")}>
                    Logout
                </button>
                



            </div>
            <div className="cards-container">
                {centers.map(center => (
                    <div key={center.id} className="card">
                        <h2 className="center-name">Center: {center.center}</h2>
                        <p className="center-info"><strong>Address: </strong>{center.address}</p>
                        <p className="center-info"><strong>Slots Available: </strong>{center.slots}</p>
                        <p className="center-info"><strong>Date: </strong>{center.date}</p>
                        <div className="button-group">
                            <button className="delete-btn" onClick={() => handleDelete(center.id)}>Delete</button>
                            <Link to={`/update/${center.id}`} className="update-btn">Update</Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className="add-btn">
                    <Link to="/add" className="add-link"  style={{ color: "inherit", textDecoration: "none" }}>
                        Add Center
                    </Link>
            </button>
        </div>
    );
};

export default Centers;
