import React from 'react'
import "./Body.css";
export default function Body() {
  return (
    <div className='Body'>
      <div className='brand'>
        <h1>Welcome to Medi-Hub</h1>
        <h2>Looking for an appointment with the best doctors?<br/> Look no further.</h2>
        <a href="/">
            <button className="button" type="button">
              Get Started
            </button>
          </a>
      </div>
      <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="content">
              <h3>Why Choose Medi-Hub?</h3>
              <p>
              This website provides healthcare providers with a professional and easily accessible online presence. With the increasing popularity of telemedicine, this website can facilitate virtual consultations and provide a secure platform for remote patient care.Patients can easily find information about a healthcare provider, including their location, contact details, and services offered, without making a phone call.
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-receipt"></i>
                    <h4>Effortless Appointment Scheduling</h4>
                    <p>"Our website offers a user-friendly interface for seamless appointment scheduling. Users can easily find and book appointments with their preferred healthcare professionals, saving time and ensuring timely access to medical care."
</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Comprehensive Doctor Information</h4>
                    <p>We provide detailed profiles of healthcare providers, including their specialties, qualifications, and patient reviews. This empowers users to make informed decisions when selecting a doctor, fostering trust and confidence in their healthcare choices.</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-images"></i>
                    <h4>Automated Reminders and Notifications</h4>
                    <p>Our platform streamlines the healthcare experience by sending automated reminders and notifications for upcoming appointments. Users benefit from timely alerts, reducing the likelihood of missed appointments and ensuring they stay on track with their healthcare plans.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </section>
    
    </div>
  )
}
