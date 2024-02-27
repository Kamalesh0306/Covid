import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import './Slot.css';

function Slot() {
  const [area, setArea] = useState('');
  const [centers, setCenters] = useState([]);
  

  const initialCenters =  
     [
      { id: 1, name: "Apollo Hospitals", address: "Greams Lane, Off Greams Road, Chennai", slotsAvailable: 50 },
  { id: 2, name: "Fortis Malar Hospital",address: "Adyar, Chennai", slotsAvailable: 45 },
  { id: 3, name: "MIOT International Hospital",address: "Manapakkam, Chennai", slotsAvailable: 89 },
  { id: 4, name: "Billroth Hospitals",address: "Shenoy Nagar, Chennai", slotsAvailable: 33 },
  { id: 5, name: "Eco Lake",address: "Avadi", slotsAvailable: 10 },
  { id: 6, name: "Kauvery Hospital",address: "Alwarpet, Chennai", slotsAvailable: 77 },
  { id: 7, name: "SIMS Hospital",address: "Vadapalani, Chennai", slotsAvailable: 31 },
  { id: 8, name: "Sri Ramachandra Medical Centre",address: "Porur, Chennai", slotsAvailable: 9},
  { id: 9, name: "Hindu Mission Hospital",address: "Tambaram, Chennai", slotsAvailable: 56 },
  { id: 10, name: "Global Hospitals",address: "Perumbakkam, Chennai", slotsAvailable: 56 },
  { id: 11, name: "PSG Hospitals",address: " Peelamedu, Coimbatore", slotsAvailable: 56 },
  { id: 12, name: "Thanjavur Medical College Hospital",address: "Thanjavur", slotsAvailable: 56 },

    ];
  

    useEffect(() => {
      const storedCenters = JSON.parse(sessionStorage.getItem('centers'));
      if (storedCenters) {
        setCenters(storedCenters);
      } else {
        sessionStorage.setItem('centers', JSON.stringify(initialCenters));
      }
    }, []);
  const handleSearch = () => {
    const fetchedCenters = initialCenters;
    setCenters(fetchedCenters);
  };

  const bookSlot = (id) => {
    const updatedCenters = initialCenters.map(center => {
      if (center.id === id && center.slotsAvailable > 0) {
        return { ...center, slotsAvailable: center.slotsAvailable - 1 };
      }
      return center;
    });
    setCenters(updatedCenters);
    sessionStorage.setItem('centers', JSON.stringify(updatedCenters));
    
  };

  
  

  return (
    <div className="App">
      <Navbar />
      <br></br>
      <h1><strong>Search Your Nearest Vaccination Centers</strong></h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>Search</button>
      </div>
      {centers.map(center => (
        <div key={center.id} className="center-card">
          <h2><strong>{center.name}</strong></h2>
          <p>Address: {center.address}</p>
          <p><i>Slots Available: {center.slotsAvailable}</i></p>
          <Link to ='/slotreg'><button className="button" disabled={center.slotsAvailable === 0} onClick={() => bookSlot(center.id)}>Book Slot<svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg></button></Link>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Slot;