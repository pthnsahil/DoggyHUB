import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Footer from "../Components/Footer";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import "./DogPage.css"; 
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DogPage() {
  const location = useLocation();
  const name = location.state.name;
  const [temp, setTemp] = useState([]); 
  const [data, setData] = useState([]);

  const [fname, setFname] = useState('');
  const [reason, setReason] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  

  useEffect(() => {
    axios.post("http://localhost:5001/dog/detailpage", { name })
      .then(res => {
        
        setData(res.data);
        setTemp(res.data.image.map(img => ({ original: img, thumbnail: img, originalHeight: "400px" })));
        console.log(temp);
      })
      .catch(err => console.log(err));
  }, [name]);

  function handleAdopt(e) {
    e.preventDefault();
    document.getElementById('adoptid').style.display = "block";
    document.getElementById('overlay').style.display = "block";
  }

  function handleInputs(e) {
    e.preventDefault();
    if(!isLoginIn())
      {
         window.location.href="http://localhost:5173";
      }
      else{
    const id=data.id
    axios.post("http://localhost:5001/enquiry/enquiry", {id,fname, phone, reason, date })
      .then(res =>{ toast.success("Saved successfully");
              closePopup();

      })
      .catch(err => console.log(err));
      }
  }
  function isLoginIn()
  {
    return !!localStorage.getItem('logIn');
  }

  function closePopup() {
    document.getElementById('adoptid').style.display = "none";
    document.getElementById('overlay').style.display = "none";
  }

  return (
    <>
  
      <Navbar />
      <ToastContainer position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover  />
      
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-9 mt-5">
            <ImageGallery items={temp} showPlayButton={false} showFullscreenButton={false} thumbnailPosition="left"/>
          </div>
          <div className="col mt-5">
            <h2>{data.name}</h2>
            <p  className="mt-4"><b>ID:</b> {data.id}</p>
            <p className="mt-4"><b>Gender:</b> {data.gender}</p>  
            <p className="mt-4"><b>Breed:</b> {data.breed}</p>
            <p className="mt-4"><b>Age: </b>{data.age} Months</p>
            <form onSubmit={handleAdopt}>
              <button type="submit" className="btn btn-danger">Adopt Me</button>
            </form>
          </div>
        </div>
      </div>

      <div id="overlay" onClick={closePopup}></div>

      <div id="adoptid">
        <button className="btn-close" onClick={closePopup}>&times;</button>
        <h2>Enquiry Form</h2>
        <form onSubmit={handleInputs}>
          <div className='mb-3'>
            <input className="form-control" type="text" placeholder='Enter your Name' onChange={(e) => setFname(e.target.value)} required />
          </div>
          <div className='mb-3'>
            <input className="form-control" type="text" placeholder='Enter your phone number' onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className='mb-3'>
            <input className="form-control" type="text" placeholder="Reason to adopt a dog" onChange={(e) => setReason(e.target.value)} required />
          </div>
          <div className='mb-3'>
            <input className="form-control" type="date" onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="mb-3 text-center">
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="fixed-bottom" >
      <Footer/>
      </div>
     
    </>
  );
}

export default DogPage;
