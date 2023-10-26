import React from 'react'
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Timelist({time,hour}) {
  console.log(time)
  return (
    <div>
           <MDBListGroup  light>
      {
        time.map((item)=>(
          <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
       {item}: {hour}
        <button style={{fontSize:'13px',height:'30px'}} className='profile-btn'>Book now</button>
      </MDBListGroupItem>
        ))
      }

      
    </MDBListGroup>
    </div>
  )
}

export default Timelist