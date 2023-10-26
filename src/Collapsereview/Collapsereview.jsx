import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';

function Collapsereview({review}) {
    const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  return (
    <div>
       
      <button className='profile-btn' onClick={toggleShow}>Review</button>
      <MDBCollapse show={showShow}>
       {
        review.map((item)=>(
            <div className='mt-4'>
                <p style={{color:'black'}}>{item.patient_name}  ({item.date})</p>
                <p>Rating: {item.rating}</p>
                <p>{item.comments}</p>
            </div>
        ))
       }
      </MDBCollapse>
    </div>
  )
}

export default Collapsereview