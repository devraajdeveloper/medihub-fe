import React, { useEffect, useState } from "react";
import "./DoctorList.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const DoctorList = () => {
  console.log("Inside DoctorList");
  const [doctor, setDoctor] = useState([]);
  const speciality = window.location.search.split("=")[1];
  useEffect(() => {
    console.log("Inside useEffect");
    const apiUrl = "http://localhost:8080/doctors/specialization?name=" + speciality;
    axios
      .get(apiUrl)
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  },[]);

  return (
    <div>
      <Navbar />
      <MDBContainer>
        <MDBRow>
          {doctor.map((d) => (
            <MDBCol key={d.id} md="4" className="mb-4">
              <MDBCard alignment="center">
                <MDBCardBody>
                  <MDBCardTitle>{d.name}</MDBCardTitle>
                  <MDBCardText>Specialty: {d.specialization.name}</MDBCardText>
                  <button className="mx-2">Get an Appointment</button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default DoctorList;
