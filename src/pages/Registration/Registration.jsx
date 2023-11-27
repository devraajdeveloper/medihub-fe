import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import Navbar from "../../components/Navbar/Navbar";

export default function Registration() {
  const url = 'http://localhost:8080/users/add';
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    state: '',
    city: '',
    password: '',
    phone: '',
    age: '',
  });

  const [errors, setErrors] = useState({});

  function submit(e) {
    e.preventDefault();
  
    // Reset errors
    setErrors({});
  
    // Validation checks
    const newErrors = {};
  
    if (!data.firstName.trim()) {
      newErrors.firstName = 'First name cannot be empty.';
    }
  
    if (!data.lastName.trim()) {
      newErrors.lastName = 'Last name cannot be empty.';
    }
  
    if (!data.age.trim() || isNaN(data.age) || parseInt(data.age, 10) <= 0) {
      newErrors.age = 'Invalid age.';
    }
  
    if (data.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }
  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone)) {
      newErrors.phone = 'Invalid phone number. It must be 10 digits long and contain only numbers.';
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = 'Invalid email address.';
    }
  
    // Update the state with new errors
    setErrors(newErrors);
  
    // If there are errors, do not proceed with the Axios request
    if (Object.keys(newErrors).length > 0) {
      return;
    }
  
    // If all validations pass, make the Axios post request
    Axios.post(url, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      gender: data.gender,
      state: data.state,
      city: data.city,
      password: data.password,
      phone: data.phone,
      age: data.age,
    })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        // Redirect to home page
        navigate('/', { replace: true }); // Use { replace: true } to replace the current entry in the history stack
      })
      .catch((error) => {
        // Handle error
        console.error('Error submitting form:', error);
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <>
    <Navbar/>
    <form onSubmit={(e) => submit(e)}>
      <section className="h-100 bg-info">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <div className='image'>
                      <img
                        src="https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8="
                        alt="Sample photo"
                        className="img-fluid"
                        style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Registration Form</h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className={`form-control form-control-lg ${errors.firstName ? 'is-invalid' : ''}`}
                              onChange={(e) => handle(e)}
                              value={data.firstName}
                            />
                            <label className="form-label" htmlFor="form3Example1m">
                              First name
                            </label>
                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName"
                              className={`form-control form-control-lg ${errors.lastName ? 'is-invalid' : ''}`}
                              onChange={(e) => handle(e)}
                              value={data.lastName}
                            />
                            <label className="form-label" htmlFor="form3Example1n">
                              Last name
                            </label>
                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <select
                            className="select"
                            id="gender"
                            onChange={(e) => handle(e)}
                            value={data.gender}
                          >
                            <option value="1">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <select
                            className="select"
                            id="state"
                            onChange={(e) => handle(e)}
                            value={data.state}
                          >
                            <option value="1">States</option>
                            {/* Add options for states */}
                          </select>
                        </div>
                        <div className="col-md-6 mb-4">
                          <select
                            className="select"
                            id="city"
                            onChange={(e) => handle(e)}
                            value={data.city}
                          >
                            <option value="1">City</option>
                            <option value="Amaravati">Amaravati</option>
                            <option value="Itanagar">Itanagar</option>
                            <option value="Dispur">Dispur</option>
                            <option value="Patna">Patna</option>
                            {/* ... (other cities) ... */}
                          </select>
                        </div>
                        <div className="col-md-4 mb-4">
                            <input
                              type="text"
                              id="age"
                              className={`form-control form-control-lg ${errors.age ? 'is-invalid' : ''}`}
                              onChange={(e) => handle(e)}
                              value={data.age}
                            />
                            <label className="form-label" htmlFor="form3Example9">
                              Age
                            </label>
                            {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                        </div>
                        <div className="col-md-8 mb-4">
                          <input
                            type="text"
                            id="phone"
                            className={`form-control form-control-lg ${errors.phoneNo ? 'is-invalid' : ''}`}
                            onChange={(e) => handle(e)}
                            value={data.phone}
                            maxLength="10"
                          />
                          <label className="form-label" htmlFor="form3Example99">
                            Phone No.
                          </label>
                          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="email"
                          className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                          onChange={(e) => handle(e)}
                          value={data.email}
                        />
                        <label className="form-label" htmlFor="form3Example97">
                          Email ID
                        </label>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                          onChange={(e) => handle(e)}
                          value={data.password}
                        />
                        <label className="form-label" htmlFor="form3Example90">
                          Password
                        </label>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" className="btn btn-light btn-lg">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-primary btn-lg ms-2">
                          Submit Form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
    </>
  );
}