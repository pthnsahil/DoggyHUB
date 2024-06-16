import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import './Adopt.css'; 

function Adopt() {
  const [search, setSearch] = useState('');
  const [filterdata, setFilterdata] = useState([]);
  const [doglist, setDoglist] = useState([]);

  const handleSearch = (search) => {
    setSearch(search);
    if (search !== '') {
      const filter = doglist.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(search.toLowerCase());
      });
      setFilterdata(filter);
    } else {
      setFilterdata(doglist);
    }
  };

  useEffect(() => {
    axios.post('http://localhost:5001/dog/adopt')
      .then(res => setDoglist(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
    
      <div className='container' style={{ display: "flex", justifyContent: "center", marginTop: "8rem", marginBottom: "2rem" }}>
        <TextField 
          variant="outlined" 
          style={{ width: "40vh" }} 
          placeholder="Type to search" 
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton><SearchIcon /></IconButton>
              </InputAdornment>
            ),
            style: { height: "5vh", textAlign: "center" }
          }}
        />
      </div>
      
      <div className='cards-container'>
        {search.length > 0 ? (
          filterdata.map((item) => (
            <div  className='card'>
              <img src={item.image[0]} alt="pets" />
              <div className="card-body">
                <div className="card-title">
                  {item.name}
                </div>
                <div className="card-text">
                  {item.story}
                </div>
                <Link to='/DogPage' state={{ name: item.name }} className="button">See more</Link>
              </div>
            </div>
          ))
        ) : (
          doglist.map((item) => (
            <div  className='card'>
              <img src={item.image[0]} alt="pets" />
              <div className="card-body">
                <div className="card-title">
                  {item.name}
                </div>
                <div className="card-text">
                  {item.story}
                </div>
                <Link to='/DogPage' state={{ name: item.name }} className="button">See more</Link>
              </div>
            </div>
          ))
        )}
      </div>
    <div className='position-fixed ' style={{bottom:"0",width:"100%"}}>
    <Footer/>
    </div>
    </>
  );
}

export default Adopt;
