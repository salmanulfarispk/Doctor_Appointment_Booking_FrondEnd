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
import { Toaster } from 'react-hot-toast';
import Edit from './page/Edit';




  
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
  reverseOrder={true}
       />


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Admin */}
          <Route path="/adminHome" element={<AdminHome />}>
            <Route path="allDoctors" element={<DoctorList />} />
            <Route path="addDoctors" element={<AddDoctor />} />
            <Route path="UserList" element={<Userslist />} />
            <Route path="bookedUsers" element={<BookedUsers />} />
            <Route path="review" element={<USerReview />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
