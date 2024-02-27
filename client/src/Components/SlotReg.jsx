import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './SlotReg.css';


const SlotReg = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    /*try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Network error:', error);
    }*/
    setIsFormSubmitted(true);
  };

  return (
    <>
    <Navbar />
    <div className="vaccination-container">
      <br></br>
      <h1 className='fancy'>COVID Vaccination Slot Booking</h1>
      {isFormSubmitted ? (
        <div className="confirmation-message">
          <p>Your vaccination slot has been confirmed!</p>
          <p>Details have been sent to your email.</p>

          



        </div>
        
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <br></br>
        <button class="cssbuttons-io-button"> Book Now
  <div class="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>
        </form>
      )}
    </div>
    <Footer />
  </>  
  );
}

export default SlotReg;
