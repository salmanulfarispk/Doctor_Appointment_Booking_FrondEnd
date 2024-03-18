import React, { useEffect, useState } from 'react'
import Edit from './Edit';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import toast from 'react-hot-toast';
import axios from 'axios';







const DoctorList = () => {


  const[Doctors,SetDoctors]=useState([])

  const [showEditModal, setShowEditModal] = useState(false);
  const [editModalId, setEditModalId] = useState(null); 

  const handleEditClick = (id) => {
    setShowEditModal(true);
    setEditModalId(id)
    // console.log("Edit clicked for doctor ID:", id); 
  };
  
  

  const AllDoctors= async()=>{
    try{
      const verifyToken={
         headers:{
           Authorization:`${localStorage.getItem("AdminJWT")}`
         }
      };
      
      const response=await axios.get('http://localhost:3001/admin/AllDoctors',verifyToken)
      // console.log(response.data.data)
      if(response.status=== 200){
        SetDoctors(response.data.data)
      }

    }catch(error){
        console.log("error",error)
        toast.error("Error detects while Fetching ALLDoctors")
    
    }

  }

   useEffect(()=>{
      AllDoctors();
   },[])



   const DeleteDoc=async( DocId)=>{

    try{
        const verifyToken={
          headers:{
            Authorization:`${localStorage.getItem("AdminJWT")}`
          }
        };


        const response= await axios.delete(`http://localhost:3001/admin/AllDoctors/DeleteDoc/${DocId}`,verifyToken)
         if(response.status===200){
          SetDoctors(response.data)
          toast('Doctor deleted! 🗑️', {
            icon: '🗑️',
          });
          AllDoctors();

         }else{
          toast.error("Failed to delete DR")
         }

    }catch(err){

      console.error(err);
      toast.error("Failed to delete DR");

    }


   }







  return (
    <div className="overflow-x-auto">
      
<div style={{ maxHeight: "600px" }} className="overflow-y-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hover:cursor-pointer">Image</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">category</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Expereince</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Hospital</th>

        <th className="px-4 py-2">Edit</th>
        <th className="px-4 py-2">Delete</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">About</th>

      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
       
       {Array.isArray(Doctors) && Doctors.map((item,index)=>(

    
       
      <tr key={index}>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item._id}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <img src={item.image} alt="Doctor's Image" className="rounded-full h-16 w-16 hover:transition-all ease-in-out transform hover:scale-110" />

          </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.name}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.category}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.experience}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.hospital}</td>

        <td className="whitespace-nowrap px-4 py-2">
          <a
             onClick={() => handleEditClick(item._id)} 
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700  hover:cursor-pointer" 
          >
            Edit
          </a>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {/* <a
            href="#"
            className="inline-block rounded bg-red-900 px-4 py-2 text-xs font-medium text-white hover:bg-red-700-"
          >
            delete
          </a> */}

<AlertDialog>
  <AlertDialogTrigger>
  <div className='bg-red-500 rounded-lg p-2 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
    Delete
  </div>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete 
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction><div onClick={()=>{DeleteDoc(item._id)}}>Continue</div></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>


       

        </td> 
        <div className='mt-3 overflow-auto'>
        <p>{item.about}</p>
        </div>
       
      </tr>
      ))}

    </tbody>
  </table>
</div>
{showEditModal && <Edit setShowEditModal={setShowEditModal} doctorId={editModalId}/>}
</div>
  )
}

export default DoctorList