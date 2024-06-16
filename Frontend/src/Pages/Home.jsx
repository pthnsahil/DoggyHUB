import React, { useEffect, useState } from 'react';
import { Carousel, Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';

import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


function Home() {
  const [search, setSearch] = useSearchParams()
  const [data, setData] = useState([])
  const check = search.get('login')

  useEffect(() => {
    if (check) { toast.success("login successfully") }
    axios.post('http://localhost:5001/dog/adoptedPets')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])

  function handleOption(e)
  {
    window.location.href = "http://localhost:5173/adopt";
  }
  return (
    <>
      <Navbar />

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop
        closeOnClick pauseOnFocusLoss draggable pauseOnHover />

      <Carousel>
        <Carousel.Item interval={800} className="carousel-item">
          <img className="d-block w-100 " style={{ height: "80vh" }} src="/image_1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={800} className="carousel-item">
          <img className="d-block w-100 image" style={{ height: "80vh" }} src="/banner.jpg" alt="Second slide" />
        </Carousel.Item>
      </Carousel>

      <div className="mt-4 ms-4 d-flex align-items-center">
        <h3>Know More</h3>
        <button className="btn btn-link ms-2" onClick={handleOption}
          style={{ textDecoration: 'none', color: 'inherit', border: 'none', background: 'transparent' }}>
          <h2><b>&gt;</b></h2>
        </button>
      </div>

      <div className='container'>
        <CardGroup className='row' style={{ marginBottom: '2rem' }}>
          {data.map((item, index) => (
            <div key={index} className='col-md-3' style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <Card style={{ margin: '0.5rem', maxWidth: '300px', width: '100%' }}>
                <Card.Img variant="top" style={{ objectFit: "cover" }} src={item.image[0]} />
                <Card.Body>
                  <div className='row'>
                    <div className='col'>
                      <Card.Title>{item.name}</Card.Title>
                    </div>
                    <div className='col'>
                      <Card.Text style={{
                        backgroundColor: "red", opacity: "0.55", color: "white", width: "63%", height: "70%", display: "flex",
                        alignItems: "center", justifyContent: "center", borderRadius: "5px", marginLeft: "3rem"
                      }}>
                        <p style={{ textAlign: "center", margin: 0, fontSize: "15px" }}>Adopted</p>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </div>

      < div className=' container-fluid mb-4 ' style={{ backgroundColor: 'rgba(200,200,200, 0.3)', padding: '1rem' }}  >

        <div className='row '>
          <div className='col' style={{ textAlign: "center" }}>
            <IconButton>
              <PetsIcon />
            </IconButton>
            <p className="ms-4 lh-2"> <h4>Adopt a dog</h4> There are so many adopters for foreign dogs. But our indian dogs breed look upto you. Make a difference</p>
          </div>
          <div className='col' style={{ textAlign: "center" }}>
            <IconButton>
              <PeopleAltIcon />
            </IconButton>
            <p className='ms-4 lh-2'> <h4>Become a voluteer</h4> As a volunteer at our shelter , you have to perform necessary duties</p>
          </div>
          <div className='col' style={{ textAlign: "center" }}>
            <IconButton>
              <MonetizationOnIcon />
            </IconButton>
            <p className=' ms-4 lh-2'> <h4>Donate us</h4> All funds are used to feed rescue dogs</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;