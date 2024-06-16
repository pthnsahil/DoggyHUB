import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import axios from 'axios';
import * as React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmailAdd] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [comment, setComment] = useState('');

  function handleContactForm(e) {
    e.preventDefault();

    axios.post('http://localhost:5001/contact/contact', {fname, lname, email, city, pincode, comment})
    .then((res) => {
        toast.success("Saved successfully");
        console.log('Response:', res);
      })
      .catch((err) => {
        toast.error("Response isn't saved");
        console.error('Error:', err);
      });
  }

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false}
                      newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="container mt-5">
        <div className="row mb-5 justify-content-center align-items-stretch" style={{ marginTop: "5rem", marginRight: "0", marginLeft: "0" }}>
          <h2 className="mt-4 text-center" style={{ color: "brown" }}>Get In Touch</h2>
          <div className="col-lg-6 d-flex align-items-stretch" style={{ paddingRight: "0",maxWidth:"43%", paddingLeft: "0" }}>
            <form className="row g-3 mx-auto mt-4 p-4" style={{ border: "1px solid #e6e6e6",borderTopLeftRadius:"6px",borderBottomLeftRadius:"6px"  }} onSubmit={handleContactForm}>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFName(e.target.value)} style={{ border: "none", borderBottom: "1px solid gray", borderRadius: "0" }} required/>
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLName(e.target.value)} style={{ border: "none", borderBottom: "1px solid gray", borderRadius: "0" }} required/>
              </div>
              <div className="col-12">
                <input type="email" className="form-control" placeholder="Email Address" onChange={(e) => setEmailAdd(e.target.value)} style={{ border: "none", borderBottom: "1px solid gray", borderRadius: "0" }} required />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="City" onChange={(e) => setCity(e.target.value)} style={{ border: "none", borderBottom: "1px solid gray", borderRadius: "0" }} required />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="PinCode" onChange={(e) => setPincode(e.target.value)} style={{ border: "none", borderBottom: "1px solid gray", borderRadius: "0" }} required />
              </div>
              <div className="col-12">
                <textarea className="form-control" placeholder="Leave a comment here" onChange={(e) => setComment(e.target.value)} style={{ border: "none", borderBottom: "1px solid gray", borderRadius: "0", resize: "none", minHeight: "100px" }}></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6  mt-4 d-flex align-items-stretch" style={{ paddingRight: "0",maxWidth:"30%", paddingLeft: "0" }}>
            <img src="/contact_us.jpeg" className="img-fluid" alt="Contact Us" style={{ maxWidth: "100%", height: "auto",borderTopRightRadius:"6px",borderBottomRightRadius:"6px" }} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ContactUs;
