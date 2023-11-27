import React, { useEffect } from "react";
import "./Navbar.css";
export default function Navbar(props) {
  useEffect(()=>{
    console.log("Hi");
    if(sessionStorage.getItem("email")!=null){
      document.getElementById("login-navbar").style.display="none";
    }
    else{
      document.getElementById("login-navbar").style.display="block";
    }
  },[]);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand nav-link disabled">{props.name}</div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
        <li className="nav-item">
          <img src= ""/>
         </li>
          <li className="nav-item">
            <a href="/" className="nav-link" aria-current="page">
              Home
            </a>
          </li>
          
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Departments
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/DoctorList?speciality=Dermatology">Dermatology</a></li>
            <li><a class="dropdown-item" href="/DoctorList?speciality=Orthopedics">Orthopedics</a></li>
            
            <li><a class="dropdown-item" href="/DoctorList?speciality=General Medicine">General Medicine</a></li>
            <li><a class="dropdown-item" href="/DoctorList?speciality=Cardiology">Cardiology</a></li>
            <li><a class="dropdown-item" href="/DoctorList?speciality=Neurology">Neurology</a></li>
          </ul>
        </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact us
            </a>
          </li>
          <div  className="d-grid gap-2 d-md-flex justify-content-md-end">
          <li id="login-navbar" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Login">Login as patient</a></li>
            <li><a class="dropdown-item" href="/Login">Login as hospital/doctor</a></li>
            <li><a class="dropdown-item" href="/AdminLogin">Login as Admin</a></li>
          </ul>
        </li>
        </div>
        </ul>
      </div>
    </nav>
  );
}
