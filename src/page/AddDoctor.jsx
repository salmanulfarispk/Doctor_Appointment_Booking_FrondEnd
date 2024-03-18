import React, { useState } from 'react'
import {

  MDBBtn,
  MDBInputGroup,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,

} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const AddDoctor = () => {
    
  const navigate=useNavigate()


   const [Name,setName]=useState('')
   const [image,setImage]=useState(null)
   const [Category,SetCategory]=useState('')
   const [Experience,setExperience]=useState('')
   const [hospital,setHospital]=useState('')
   const [about,setAbout]=useState('')

   const handleCategorySelect = (selectedCategory) => {
    SetCategory(selectedCategory);
  };

  const imageChanges=(e)=>{
    const selectedimg=e.target.files[0]
      setImage(selectedimg)
  }


  const handleSubmit= async(e)=>{
      e.preventDefault();
      
      if(!Name || !image || !Category || !Experience || !hospital || !about){
        toast.error("please fill All the fields")
        return;
      }
        
      const formData=new FormData()

         formData.append("name",Name)
         formData.append("image",image)
         formData.append("category",Category)
         formData.append("experience",Experience)
         formData.append("hospital",hospital)
         formData.append("about",about)

          
         try{
          
          const verifyToken={
            headers:{
              Authorization:`${localStorage.getItem("AdminJWT")}`
            }
          }

          const response=await axios.post("http://localhost:3001/admin/addDoctors",formData,verifyToken)

            if(response.status===201){
              
              toast('New Doctor Added!', {
                icon: '👏',
              });
              // navigate("addDoctors")
              setName('');
              setImage('');
              SetCategory('');
              setExperience('');
              setHospital('');
              setAbout('');

            }else{
              toast.error("Failed to Add A doctor")
            }

         }catch(error){
            console.log("error",error)
         }


  };






  return (
    <div>


      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                The good physician treats the disease, the great physician treats the patient who has the disease.
                Medicine is my lawful wife and literature my mistress, when I get tired of one, I spend the
                night with the other.

              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form  className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Dr....."
                    type="text"
                    id="name"
                    onChange={(e)=>setName(e.target.value)}
                     value={Name}
                  />
                </div>
                <MDBInputGroup
                  className='mb-3 mt-4'
                  textBefore='Image'
                  textTag='label'
                  textProps={{ htmlFor: 'inputGroupFile01' }}
                >
                  <input className='form-control' type='file' id='inputGroupFile01'    onChange={imageChanges}/>
                </MDBInputGroup>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


                  <MDBInputGroup className='mb-3 mt-4'>
                    <MDBBtn outline color='gray'>Category</MDBBtn>

                    <MDBDropdown>
                      <MDBDropdownToggle className='dropdown-toggle-split bg-black'>
                        <span className='visually-hidden'>Toggle Dropdown</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link onClick={()=>{handleCategorySelect("Dentist")}}>Dentist</MDBDropdownItem>
                        <MDBDropdownItem link onClick={()=>{handleCategorySelect("Cardiologist")}}>Cardiologist</MDBDropdownItem>
                        <MDBDropdownItem link onClick={()=>{handleCategorySelect("Orthopidic")}}>Orthopidic</MDBDropdownItem>
                        <MDBDropdownItem link onClick={()=>{handleCategorySelect("Neurologist")}}>Neurologist</MDBDropdownItem>
                        <MDBDropdownItem link onClick={()=>{handleCategorySelect("Otology")}}>Otology</MDBDropdownItem>
                        <MDBDropdownItem link onClick={()=>{handleCategorySelect("General Doctor")}}>General Doctor</MDBDropdownItem>
                        <MDBDropdownItem link onClick={()=>{handleCategorySelect("Surgon")}}>Surgon</MDBDropdownItem>

                      </MDBDropdownMenu>
                    </MDBDropdown>
                    <input className='form-control' placeholder='here.....' type='text' defaultValue={Category}/>
                  </MDBInputGroup>





                  <div>
                    <label className="sr-only" htmlFor="name" >Experience</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
                      placeholder="Experience"
                      type="text"
                      id="name"
                    onChange={(e)=>setExperience(e.target.value)}
                      value={Experience}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="name">Hospital</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Hospital"
                      type="text"
                      id="name"
                    onChange={(e)=>setHospital(e.target.value)}
                      value={hospital}
                    />
                  </div>


                </div>
                <div>
                  <label className="sr-only" htmlFor="message">About</label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="About"
                    rows="4"
                    id="message"
                    onChange={(e)=>setAbout(e.target.value)}
                      value={about}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    
                  >
                    Add Doctor
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>





    </div>
  )
}

export default AddDoctor