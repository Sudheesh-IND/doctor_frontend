import React from 'react'
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Timelist({time}) {
  return (
    <div>
           <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        Monday: {time.Monday}
        <button style={{fontSize:'13px',height:'30px'}} className='profile-btn'>Book now</button>
      </MDBListGroupItem>

      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
      Tuesday: {time.Tuesday}
        <button style={{fontSize:'13px',height:'30px'}} className='profile-btn'>Book now</button>
      </MDBListGroupItem>

      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
      Wednesday: {time.Wednesday}
        <button style={{fontSize:'13px',height:'30px'}} className='profile-btn'>Book now</button>
      </MDBListGroupItem>

      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
      Thursday: {time.Thursday}
        <button style={{fontSize:'13px',height:'30px'}} className='profile-btn'>Book now</button>
      </MDBListGroupItem>

      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
      Friday: {time.Friday}
        <button style={{fontSize:'13px',height:'30px'}} className='profile-btn'>Book now</button>
      </MDBListGroupItem>
    </MDBListGroup>
    </div>
  )
}

export default Timelist