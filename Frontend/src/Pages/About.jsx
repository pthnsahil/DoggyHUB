import Navbar from '../Components/Navbar.jsx'
import * as React from "react"
import './About.css'
import Footer from '../Components/Footer.jsx'

function About() {
  return (
    <>
      <Navbar  />
      <div>
        <img src="/banner2.webp" className='article' style={{ height: "80vh" }} ></img>
        <h1 className='about_content'>Doggy HUB</h1>
        <p className='about_content1'>
        Doggy HUB is Gujarat's  animal adoption portal, bringing together dog ,available to adopt <br />
          .This means the public can view and apply to available animals in one place, rather <br />
          than having to check each rescue individually.
        </p>
      </div>

      <div>
        <h2><b>Our Mission</b></h2>
        <p className='fs-5'>To use Internet technology and the resources it can generate to:</p>
        <ol>
          <li className='fs-5 '>Increase public awareness of the availability of adoptable pets</li>
          <li className='fs-5 '>Increase the overall effectiveness of pet adoption programs across Gujarat to the extent that the euthanasia of adoptable pets is eliminated</li>
        </ol>
        <h2><b>Our Vision</b></h2>
        <p className='fs-5'>A humane and compassionate future for every animal friend.</p>
      </div>

      <div className='container-fluid mb-4 ' style={{  backgroundColor: 'rgba(200,200,200, 0.3)'}}>
        <h2 style={{ textAlign: "center",color:"brown" }}>Up to Now</h2>
        <div className="row">
          <div style={{ textAlign: "center" }} className='col'>
            <p className="fs-5 ms-4 lh-2"><h3><b>5+ </b></h3> Cities</p>
          </div>
          <div style={{ textAlign: "center" }} className='col'>
            <p className='fs-5 ms-4 lh-2'><h3><b>10+ </b> </h3>DogCare Heroes</p></div>
        </div>
      </div>
      <Footer/>
      
    </>
  );


}
export default About