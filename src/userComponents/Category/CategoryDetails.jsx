import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryDetails = () => {
const [CategryDet,setCAtDetail]=useState([])
const navigate=useNavigate()
   const categoryname=useParams()
   const {name}=categoryname;
//    console.log(name)

  const DocCategory=async()=>{
    try{
  

        const response=await axios.get(`http://localhost:3001/user/${name}`)
        if(response.status===200){
            // console.log("data",response.data.data)
            setCAtDetail(response.data.data)
        }

    }catch(err){
      console.log("err",err)
    }
  }

  useEffect(()=>{
    DocCategory();
  },[name])


  const isUser=localStorage.getItem("userId")
  const hanleBokking=(docName)=>{
    if(isUser){
      navigate(`/details/${docName}`);
    }else{
       navigate('/login')
       toast.error("Login and then Booking")
    }
  }




  return (
    <div className='mb-10 px-10 mt-5'>
        <h2 className='font-bold text-2xl'>{name}</h2>

        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-7 lg:grid-cols-4'>
       {CategryDet.length>0? CategryDet.map((item,index)=>(

          <div key={index} className='border-[1px] rounded-lg p-3 cursor-pointer
           hover:border-primary hover:shadow-sm'>
            <img src={item.image}
            alt='doctor'
            width={500}
            height={200}
            className='h-[200px] w-full object-cover rounded-xl'
            />

           <div className='mt-3 items-baseline flex flex-col gap-2'>
            <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{item.category}</h2>
            <h2 className='font-bold'>{item.name}</h2>
            <h2 className='text-primary text-sm'>{item.experience} Years</h2>
            <h2 className='text-gray-500 text-sm'>{item.hospital}</h2>
            <h2 className='p-2 px-3 border border-primary rounded-full w-full text-center text-xs
             mt-2 hover:bg-primary hover:text-white cursor-pointer' onClick={()=>{
               hanleBokking(item.name)
             }} >Book Now</h2>

            </div>

            </div>
       ))
        
       : 

        [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='h-[220px] bg-slate-200 w-full rounded-lg animate-pulse'>
           
          </div>

        ))
       
      
      }

        </div>
    </div>
  )
}

export default CategoryDetails