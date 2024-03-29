// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './userComponents/Login';
import Home from './userComponents/Home';
import AdminHome from './page/AdminHome';
import DoctorList from './page/DoctorList';
import AddDoctor from './page/AddDoctor';
import Userslist from './page/Userslist';
import BookedUsers from './page/BookedUsers';
import USerReview from './page/USerReview';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import CategoryList from './page/CategoryList';
import Layoutt from './userComponents/Category/Layoutt';
import CategoryDetails from './userComponents/Category/CategoryDetails';
import Details from './userComponents/Details';




  
export const Axios = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("jwt")
  }
})



function App() {
  return (
    <>
     <Toaster
  position="top-center"
  reverseOrder={false}
       />


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:docName" element={<Details />} />
           
          <Route path='/Categorydetails/:name' element={<Layoutt/>}>
            <Route path="category/:name" element={<CategoryDetails />} />
          </Route>
            



          {/* Admin */}
          <Route path="/adminHome" element={<AdminHome />}>
            <Route path="allDoctors" element={<DoctorList />} />
            <Route path="addDoctors" element={<AddDoctor />} />
            <Route path="UserList" element={<Userslist />} />
            <Route path="bookedUsers" element={<BookedUsers />} />
            <Route path="review" element={<USerReview />} />
            <Route path="categorylist" element={<CategoryList />} />
            
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
