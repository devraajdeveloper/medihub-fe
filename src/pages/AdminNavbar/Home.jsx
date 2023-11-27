import React from 'react'
import Navbar from "../../components/Navbar/Navbar";

export default function AdminHome(){
  return (
    <>
    <Navbar/>
    <div className="Admin">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">Admin Panel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Users</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">Doctors</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    </>
  )
}