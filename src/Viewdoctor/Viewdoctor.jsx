import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../base_url'

import './Viewdoctor.css'
import Timelist from '../Timelist/Timelist'

function Viewdoctor() {

  const {id}=useParams()  //destgructuring is done to take params from the frontend link as id
  const [oneDoctor,setOneDoctor]=useState([])  //variable for setting up data
  const [avail,setAvail]=useState({})
  
  //fwtching the data of a particular doctor
  const fetchData=async()=>{
    const {data}=await axios.get(`${base_url}/doctors/${id}`)
    setOneDoctor(data)
    setAvail(data.availability)
  }
  console.log(oneDoctor)

  //initializing the function
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{padding:'30px'}}>
               <img style={{width:'400px',height:'400px',marginTop:'230px',marginLeft:'40px'}} src="https://thumbs.dreamstime.com/b/online-doctor-physician-stethoscope-video-smartphone-medical-advice-consultation-service-vector-illustration-185253229.jpg" alt="" />
          </div>
          <div className="col-md-6">
              <div className='main shadow' style={{padding:'20px',borderRadius:'2rem'}}>
              <h2>{oneDoctor.name}</h2> <br />
              <p>Speciality: {oneDoctor.specialty}</p>
              <p>Hospital: {oneDoctor.hospital} {oneDoctor.location}</p>
              <p>Email: {oneDoctor.email}</p>
              <p>Phone: {oneDoctor.phone}</p>
              <Timelist time={avail}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewdoctor