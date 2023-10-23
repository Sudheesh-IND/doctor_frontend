import React from 'react'
import './Header.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light className='head fixed-top'>
        
          <MDBNavbarBrand className='m-1' href='#'>
            <img style={{borderRadius:'2rem'}}
              src='https://cdn.dribbble.com/users/686338/screenshots/9798896/media/a48c3c10931850ff460da38e818a8cb4.gif'
              height='50'
              alt=''
              loading='lazy'
            />
           <span className='m-1'>DOCTOR HERE</span>
          </MDBNavbarBrand>
       
      </MDBNavbar>
    </div>
  )
}

export default Header