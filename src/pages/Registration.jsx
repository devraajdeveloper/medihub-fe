
import React, { useState } from 'react';


export default function Registration() {
 
  

  return (
    <section className="h-100 bg-dark">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img
                  src="https://healthcare.utah.edu/sites/g/files/zrelqx136/files/migrate_images/0_tibiic2j.jpg"
                  alt="Sample photo"
                  className="img-fluid"
                  style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">Patient Registration Form</h3>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1m">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1n">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example8" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example8">
                      Address
                    </label>
                  </div>

                  <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                    <h6 className="mb-0 me-4">Gender: </h6>

                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="femaleGender"
                        value="option1"
                      />
                      <label className="form-check-label" htmlFor="femaleGender">
                        Female
                      </label>
                    </div>

                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="maleGender"
                        value="option2"
                      />
                      <label className="form-check-label" htmlFor="maleGender">
                        Male
                      </label>
                    </div>

                    <div className="form-check form-check-inline mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="otherGender"
                        value="option3"
                      />
                      <label className="form-check-label" htmlFor="otherGender">
                        Other
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select className="select">
                      <option value="1">States</option>
                        <option value="1">Andhra Pradesh</option>
                        <option value="2">Arunachal Pradesh</option>
                        <option value="3">Assam</option>
                        <option value="4">Bihar</option>
                        <option value="5">Chhattisgarh</option>
                        <option value="6">Goa</option>
                        <option value="7">Gujrat</option>
                        <option value="8">Hariyana</option>
                        <option value="9">Himachal Pradesh</option>
                        <option value="10">Jharkand</option>
                        <option value="11">Karnataka</option>
                        <option value="12">Kerala</option>
                        <option value="13">Madhya Pradesh</option>
                        <option value="14">Maharashtra</option>
                        <option value="15">Manipur</option>
                        <option value="16">Meghalaya</option>
                        <option value="17">Mizoram</option>
                        <option value="18">Nagaland</option>
                        <option value="19">Odisha</option>
                        <option value="20">Punjub</option>
                        <option value="21">Rajasthan</option>
                        <option value="22">Sikkim</option>
                        <option value="23">Tamil Nadu</option>
                        <option value="24">Telengana</option>
                        <option value="25">Tripura</option>
                        <option value="26">Uttarakhand</option>
                        <option value="27">Utter Pradesh</option>
                        <option value="28">West Bengal</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select className="select">
                        <option value="1">City</option>
                        <option value="2">Amaravati</option>
                        <option value="3">Itanagar</option>
                        <option value="4">Dispur</option>
                        <option value="5">Patna</option>
                        <option value="6">Raipur</option>
                        <option value="7">Panaji</option>
                        <option value="8">Gandhinagar</option>
                        <option value="9">Chhattisgarh</option>
                        <option value="10">Shimla</option>
                        <option value="11">Ranchi</option>
                        <option value="12">Bengaluru</option>
                        <option value="13">Thiruvananthapuram</option>
                        <option value="14">Bhopal</option>
                        <option value="15">Mumbai</option>
                        <option value="16">Imphal</option>
                        <option value="17">Shillong</option>
                        <option value="18">Aizawl</option>
                        <option value="19">Kohima</option>
                        <option value="20">Bhubaneswar</option>
                        <option value="21">Chandigarh</option>
                        <option value="22">Jaipur</option>
                        <option value="23">Gangtok</option>
                        <option value="24">Chennai</option>
                        <option value="25">Hydrabad</option>
                        <option value="26">Agartola</option>
                        <option value="27">Dehradun</option>
                        <option value="28">Lucknow</option>
                        <option value="29">Kolkata</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example9" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example9">
                      Age
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example90" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example90">
                      Pincode
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example99" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example99">
                      Phone No.
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example97" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example97">
                      Email ID
                    </label>
                  </div>

                  <div className="d-flex justify-content-end pt-3">
                    <button type="button" className="btn btn-light btn-lg">
                      Reset all
                    </button>
                    <button type="button" className="btn btn-warning btn-lg ms-2">
                      Submit form
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
  );
};
  