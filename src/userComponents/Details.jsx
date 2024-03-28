import React, { useState } from 'react'
import InnerDetails from './InnerDetails'
import DoctorSuggestion from './DoctorSuggestion'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'

const Details = () => {

  const [doctor,setDoctor]=useState()

   const {docName}=useParams()
    // console.log(docName);

    const DocDetails=async()=>{
      try{
       const verifyToken={
           headers:{
             Authorization:`${localStorage.getItem("jwt")}`
           }
         }
   
      const response = await axios.get(`http://localhost:3001/user/category/${docName}`,verifyToken);
       // console.log(response.data.data);
        if(response.status===200){
           setDoctor(response.data.data)
        }
   
   }catch(err){
     console.log(err)
   }
   }
   
    useEffect(()=>{
      DocDetails();
    },[docName])
   


  return (
    
     <>
     
          <Header/>
        
    <div className='p-5 md:px-20'>

     <h2 className='font-bold text-[22px] mb-3'>Details</h2>

      <div className='grid grid-cols-1 lg:grid-cols-4'>
           
          {/* doctor all details div */}
          <div className=' col-span-3'>
    
           {doctor && <InnerDetails doctor={doctor}/>}

          </div>


       {/* for doctor sugesions */}
          <div className={window.innerWidth <= 640 ? 'mt-4' : ''}>
         <DoctorSuggestion/>
          </div>

      </div>
   
    </div>
    <Footer/>
  </>
  )
}

export default Details