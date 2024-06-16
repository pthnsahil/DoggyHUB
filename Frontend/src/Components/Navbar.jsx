import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
 
  function handleLogout(){
    localStorage.clear();
    window.location.href = 'http://localhost:5173/login';
  };

  function handleDonate()
  {
     window.location.href="http://localhost:5173/donate";
  }
  const style = { width: "4%", height: "auto" };
 
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container-fluid">
        <img src="/pet_icon.png" alt="Icon" style={style} />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fs-3 ms-4">
              <NavLink className="nav-link" to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item fs-3 ms-4">
              <NavLink className="nav-link" to="/adopt" activeClassName="active">Adopt</NavLink>
            </li>
            <li className="nav-item fs-3 ms-4">
              <NavLink className="nav-link" to="/about" activeClassName="active">About Us</NavLink>
            </li>
            <li className="nav-item fs-3 ms-4">
              <NavLink className="nav-link" to="/contact" activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>
          <button className='btn btn-warning me-4' style={{color:"white",fontSize:"20px"}} type='submit' onClick={handleDonate}>Donate</button>
          <button className='btn btn-danger me-2' type='submit' style={{fontSize:"20px"}} onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
            </svg></button>
        </div>          
      </div>
    </nav>
  );
}

export default Navbar;
