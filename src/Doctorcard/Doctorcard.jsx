import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import './Doctorcard.css'
import { Link } from 'react-router-dom';

function Doctorcard({doctors}) {
  return (
    <div className='d-flex flex-col flex-wrap justify-content-center'>
      {
        doctors.map((item)=>(
            <MDBCard className='card' style={{width:'280px',margin:'20px', border: '3px solid rgb(0, 185, 148)'}}>
            <MDBCardImage src='https://thumbs.dreamstime.com/b/online-doctor-physician-stethoscope-video-smartphone-medical-advice-consultation-service-vector-illustration-185253229.jpg' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardText>
                <p>{item.specialty}</p>
                <p>{item.hospital}</p>
              </MDBCardText>
              <div className='text-center'>
              <Link to={`viewdoctor/${item.id}`}>
              <button className='profile-btn'>Profile</button>
              </Link> 
               
              </div>
            </MDBCardBody>
          </MDBCard>
        ))
      }
    </div>
  )
}

export default Doctorcard