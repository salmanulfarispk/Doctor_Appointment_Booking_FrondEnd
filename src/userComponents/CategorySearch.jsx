import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

const CategorySearch = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categorylist,setCategorylist]=useState([])

  const Searching=async()=>{

    try{
      if (categoryName.trim() === '') {
        toast.error("Please enter a category name");
        return;
      }

    
      const verifyToken={
        headers:{
          Authorization:`${localStorage.getItem("jwt")}`
        }
      };

      const response=await axios.get(`http://localhost:3001/user/search/${categoryName}`, verifyToken);
      if (response.status === 200) {
        console.log("Datas", response.data.data);
        if (response.data.data.length === 0) {
          toast.error("Please enter a valid category name");
        } else {
          setCategorylist(response.data.data);
          setCategoryName('')
        }
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    Searching(categoryName); 
  }



const ListCategory=async()=>{
  try{
   const verifyToken={
    headers:{
      Authorization:`${localStorage.getItem("jwt")}`
    }
  };

  const response=await axios.get("http://localhost:3001/user/categorylist",verifyToken)
  console.log("data",response.data.data)
  if (response.status === 200) {
    setCategorylist(response.data.data);
    // console.log(response.data.data)
  }
  }catch(err){
    console.error('Error fetching categories:', err);
  }
}

 useEffect(()=>{
  ListCategory();
 },[])




  return (
    <div className='mb-8 flex px-2 items-center flex-col gap-2'>

    <h2 className='font-bold text-4xl tracking-wide '>Search <span className='text-primary'>Doctor</span></h2>

   <h2 className='text-gray-500 text-xl'>Search Your Doctor and Book Appointment in one click</h2>

   <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
  <Input type="text" placeholder="Search..." 
  value={categoryName} 
  onChange={(e) => setCategoryName(e.target.value)}
  />
  <Button type="submit" onClick={handleSearch}>
    <Search className='h-4 w-4 mr-2'/> 
    Search</Button>
</div>
   
   <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5'>
   {categorylist.length >0 ?categorylist.map((item,index)=>index<6&&(
    <div key={index} className='flex flex-col text-center gap-2 cursor-pointer items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out'>
       <img src={item.image}
       alt='icon'
       width={40}
       height={40}
       />
       <label className='text-blue-600  text-sm'>{item.categoryname}</label>

      </div>

   ))
  :
  [1,2,3,4,,5,6].map((item,index)=>(
    <div className='h-[170px] w-[170px] m-2 bg-slate-200 animate-pulse rounded-lg'>
     </div>
  ))
  
  }
   
   </div>
</div>
  )
}

export default CategorySearch