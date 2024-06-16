import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar_AP() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = 'http://localhost:5173/login';
    };


  const style = { width: "4%", height: "auto" };


  return (
    <nav className="navbar navbar-expand-lg navbar-custom ">
      <div className="container-fluid">
        <img src="/pet_icon.png" alt="Icon" style={style} />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fs-3 ms-4">
              <NavLink className="nav-link" to="/admin" activeClassName="active">Manage</NavLink>
            </li>
            <li className="nav-item fs-3 ms-4">
              <NavLink className="nav-link" to="/enquiry" activeClassName="active">Enquiries</NavLink>
            </li>
            <li className="nav-item fs-3 ms-4">
              <NavLink className="nav-link" to="/contacts" activeClassName="active">Contacts</NavLink>
            </li>
          </ul>
          <button className='btn btn-danger me-2' type='submit' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar_AP;


