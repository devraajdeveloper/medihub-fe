import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

import './ReviewCard.css'; 

export default function ReviewCard() {
  return (
    <>
    <div className="user-reviews-header">
      Recent Reviews
    </div>
    <div className="card-container">
      <MDBCard className="review-card">
        <MDBCardImage src='https://static.ftadviser.com/public/images/authors/Dave%20Tonge.png'  position='top' alt='...'/><hr/>
        <MDBCardBody>
          <MDBCardTitle>Andrew Garfield</MDBCardTitle>
          <MDBCardText>
          Excellent. I love the system, it's convenient and a great tool for my clients to use.
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="review-card">
        <MDBCardImage src='https://static.ftadviser.com/public/images/authors/Dave%20Tonge.png' position='top' alt='...' /><hr/>
        <MDBCardBody>
          <MDBCardTitle>Jane Doe</MDBCardTitle>
          <MDBCardText>
          Fantastic! Getting clients to book in online saves me SO much time! I used to have to to-and-fro via phone and email before finding a convenient date for clients, now I can use my time more efficiently.
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="review-card">
        <MDBCardImage src='https://static.ftadviser.com/public/images/authors/Dave%20Tonge.png' position='top' alt='...' /><hr/>
        <MDBCardBody>
          <MDBCardTitle>Steve Marksman</MDBCardTitle>
          <MDBCardText>
          I think it's wonderful. Since we just started using it, we are still waiting for our clients to fully discover it.
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>

      

    </div>
      </>
  );
}
