import React from 'react';
import { Link } from "react-router-dom";
import About from './AboutSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import "./Home.css";
import dose from "./Images/cd.jpg";
import Navbar from "./Navbar";


function Home() {
  return ( 
    <>
    <Navbar/>
     <section id="header" class="d-flex align-items-center">
      <div class="container-fluid nav_bg">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="row">
            <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Defend Today, <br />Thrive Tomorrow: <strong class="brand-name">Book Your COVID Vaccine Slot and Secure Your Future!</strong></h1>
              <div class="mt-3">
                <Link to="/slot" class="btn-get-started">Book Your Slot</Link>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 header-img">
              <img src={dose} alt="home-img"/>
            </div>
          </div>
          </div>
        </div>
      </div>
     </section>


      <About />
      <section>
        <br></br>
        <FAQSection />
      </section>
    <section>
      <br></br>
      <Footer />
    </section>
    </>
  )
}

export default Home
