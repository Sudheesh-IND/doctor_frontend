import React, { useEffect, useState } from 'react'

import './Doctorlist.css'
import axios from 'axios'
import {base_url} from '../base_url.js'
import Doctorcard from '../Doctorcard/Doctorcard'

import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';


function Doctorlist() {
  

  const [doctor,setDoctor]=useState([]) //for holding doctor data

  const fetchData=async()=>{
    const {data}=await axios.get(`${base_url}/doctors`)
    console.log(data)
    setDoctor(data)
  }

  //useeffect inititalizes function when the page loads
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div>
      
      <div id='doct-list'>
      
      </div>
      <div className="container" style={{marginTop:'100px'}}>
        <div className="row">
          <div className="col-md-12 ">
            <Doctorcard doctors={doctor}/>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default Doctorlist