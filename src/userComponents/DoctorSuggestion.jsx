import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function DoctorSuggestion() {

const navigate=useNavigate()
const [DocSuggest,setDocSuggest]=useState([])



const DocSuggestion=async()=>{
   try{
    const verifyToken={
        headers:{
          Authorization:`${localStorage.getItem("jwt")}`
        }
      }

   const response = await axios.get('http://localhost:3001/user/details/suggestDocs/doctor',verifyToken);
    // console.log(response.data.data);
     if(response.status===200){
        setDocSuggest(response.data.data)
     }

}catch(err){
  console.log(err)
}
}

 useEffect(()=>{
    DocSuggestion()
 },[])

 

  return (

    <div className='p-2 border-[1px] rounded-md md:ml-5'>

   <h2 className='mb-3 font-bold px-1'>Suggestions</h2>
  {DocSuggest.map((item,index)=>(
   <div key={index} className='mb-3 p-2 shadow-sm w-full cursor-pointer hover:bg-slate-100 rounded-lg flex items-center gap-3'
   onClick={()=> navigate(`/details/${item.name}`)}>
    <img src={item.image}
    alt='doctor-image'
    width={70} height={70}
    className='w-[70px] h-[70px] rounded-full'
    
    />
     <div className='items-baseline mt-1 flex flex-col gap-1'>
     <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{item.category}</h2>
     <h2 className='font-medium text-sm'>{item.name}</h2>
     <h2 className='text-primary text-xs'>{item.experience}  years</h2>

      
     </div>
     
   </div>
  ))}
    </div>
  )
}
