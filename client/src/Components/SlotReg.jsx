import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './SlotReg.css';

const generateBookingId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8;
  let bookingId = '';
  for (let i = 0; i < length; i++) {
    bookingId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return bookingId;
};

const SlotReg = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const generatedBookingId = generateBookingId();
    setBookingId(generatedBookingId);

    const templateParams = {
      fullName,
      to_email: email, 
      phoneNumber,
      bookingId: generatedBookingId 
    };

    emailjs.send('service_995r8rd', 'template_yi8xk7r', templateParams, 'rtn2H4xvr1Eza7p6-')
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Email sent successfully');
      setIsFormSubmitted(true);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('An error occurred while sending email');
    });

    setFullName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <>
    <Navbar />
    <div className="vaccination-container">
      <br />
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <br />
          <button className="cssbuttons-io-button"> Book Now
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
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