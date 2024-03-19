import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  
} from 'mdb-react-ui-kit';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Register({ setShowRegisterModal }) {
  const toggleClose = () => setShowRegisterModal(false)



  const SignUp= async(event)=>{
    event.preventDefault();
       
    const username = event.target.USERNAME.value.trim();
    const email = event.target.EMAIL.value.trim();
    const password = event.target.PASSWORD.value.trim();
       
    // console.log("username",username)

    if(!username || !email || !password){
      toast.error("please Fill All input Fields")
      return;
    }

      try{
        const payload={username,email,password}
        // console.log("payload",payload)

        const response=await axios.post("http://localhost:3001/user/register",payload)
        if(response.status===201){
          toast.success("Registration success")
          toggleClose();
        }


      }catch(error){
        console.log("Register failed",error);
        
      }
   


  }

    




  return (
    <MDBModal staticBackdrop tabIndex='-1' open={true} setOpen={setShowRegisterModal}>
      <MDBModalDialog>
        <MDBModalContent>
          
            <MDBBtn className='btn-close ms-auto' color='none' onClick={toggleClose}></MDBBtn>
          
          <MDBModalBody>
            
              

<form onSubmit={SignUp} class="mb-1  space-y-3 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p class="text-center text-lg font-medium">Sign Up your account</p>

      <div>

<div class="relative">
  <input
    type="text"
    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
    placeholder="Enter username"
    id='USERNAME'
  />

  <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  class="size-4 text-gray-400"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"   
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 2c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zM12 12a3 3 0 100-6 3 3 0 000 6z"
  />
</svg>

  </span>
</div>

        <div class="relative">
          <input
            type="email"
            class="w-full rounded-lg mt-3 border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            id='EMAIL'
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>

        <div class="relative">
          <input
            type="password"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
            id='PASSWORD'
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>
    

      <button
        type="submit"
        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Register
      </button>



            </form>
          </MDBModalBody>
        
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
