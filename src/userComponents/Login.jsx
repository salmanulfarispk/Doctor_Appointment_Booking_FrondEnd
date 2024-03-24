import React, { useRef, useState } from 'react'
import Register from './Register'
import { Google } from '@mui/icons-material';
import { Axios } from '@/App';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';







const Login = () => {
   const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleSignUpClick = () => {
    setShowRegisterModal(true);
  };

   const navigate=useNavigate()

   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const login = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    
    const AdminEmail = import.meta.env.VITE_REACT_APP_ADMIN_EMAIL;


    if (email === "" || password === "") {
        toast.error("Input field is empty");
        return;
    }

    
    let url = "http://localhost:3001/user/login";

    if (email === AdminEmail) {
      url = "http://localhost:3001/admin/login";
    }



    try {
        const payload = { email: email, password: password };

        const response = await Axios.post(url, payload);

          if(response.status===200){
            if(email===AdminEmail){

             localStorage.setItem("role", "admin")
             localStorage.setItem("AdminJWT", response.data.token);
             navigate("/adminHome")
             toast.success("Admin Login succesfully")

            }else{

              localStorage.setItem("userId",response.data.data.userid)
              localStorage.setItem("jwt",response.data.data.token)
              localStorage.setItem("userEmail",response.data.data.email)
              localStorage.setItem("username",response.data.data.username)

               
              setTimeout(()=>{
                localStorage.removeItem("AdminJWT")
                localStorage.removeItem("userId")
                localStorage.removeItem("jwt")
                localStorage.removeItem("userEmail")
                localStorage.removeItem("username")
              },5300000)

              navigate("/");
              toast.success("Login successfully");
            }
          }else{
            toast.error("Login Failed:",response.error);
          }



    } catch (error) {
        console.log("Error:", error);
        toast.error("Invalid email or password");
    }
};







  return (
    <div>
    

    <section className="relative flex flex-wrap lg:h-screen lg:items-center">


    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="pic"
      src="/FFF.jpg"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>





  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p className="mt-4 text-gray-500">
      Manage your healthcare effortlessly ! Login to view appointments, 
      reschedule, and access medical records.
      </p>
    </div>

    <form onSubmit={login} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            ref={emailRef}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
            ref={passwordRef}

          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account ? 
          <a className="underline text-blue-900 cursor-pointer ms-1" onClick={handleSignUpClick}>Sign up</a>
          <a className='ms-3 text-blue-900 hover:cursor-pointer'> Or&nbsp;&nbsp; sign in with <Google/></a>
            
        </p>
      
        <Button>Sign in</Button>
      </div> 

      
             
            




    </form>
    

  </div>


</section>

{showRegisterModal && <Register setShowRegisterModal={setShowRegisterModal} />}
  
      </div>



    
  )
}

export default Login