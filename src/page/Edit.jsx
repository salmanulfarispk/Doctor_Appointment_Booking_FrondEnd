import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBInputGroup,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,

} from 'mdb-react-ui-kit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export default function Edit({ setShowEditModal, doctorId }) {
  const toggleClose = () => setShowEditModal(false)

  const Id = doctorId;
  // console.log("doctor id ",id);

  const [doctorDatas, setDoctorDatas] = useState({
    name: "",
    image: "",
    category: "",
    experience: "",
    hospital: "",
    about: "",
  });

  const fetchDataForDoctor = async () => {
    try {
      const verifyToken = {
        headers: {
          Authorization: `${localStorage.getItem("AdminJWT")}`
        }
      };



      const response = await axios.get(`http://localhost:3001/admin/doctor/${Id}`, verifyToken)
      if (response.status === 200) {
        const { name, image, category, experience, hospital, about } = response.data.data;
        setDoctorDatas({
          name,
          image,
          category,
          experience,
          hospital,
          about,

        })

      }

      // console.log("Data for doctor:", response.data.data);

    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Doctor not fetched ,error occurs")
    }
  }

  useEffect(() => {
    fetchDataForDoctor();
  }, [Id])



  const editedSubmition = async (e) => {

    e.preventDefault();

    try {
      const jwtverify = {
        headers: {
          Authorization: `${localStorage.getItem("AdminJWT")}`
        }
      };

      const response = await axios.patch('http://localhost:3001/admin/AllDoctors/EditDoc',doctorDatas, jwtverify)
      
      if (response.status === 200) {
        toast('Doctor Edited successfully', {
          icon: '👏',
        });
      }

    } catch (err) {

      console.error("Error editing DR.:", err);
      toast.error(err.message)

    }

  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;

    setDoctorDatas((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleChangeCategory = (category) => {
    setDoctorDatas((prevData) => ({
      ...prevData,
      category: category
    }));
  };



  return (
    <MDBModal staticBackdrop tabIndex='-1' open={true} setOpen={setShowEditModal}>
      <MDBModalDialog>
        <MDBModalContent>

          <MDBBtn className='btn-close ms-auto' color='none' onClick={toggleClose}></MDBBtn>

          <MDBModalBody>



            <form onSubmit={editedSubmition} className="mb-1  space-y-3 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
              <p className="text-center text-lg font-medium">Edit the Doctor</p>





              <MDBInputGroup
                className='mb-3 mt-4'
                textBefore='Image'
                textTag='label'
                textProps={{ htmlFor: 'inputGroupFile01' }}
              >
                <input className='form-control' type='file' id='inputGroupFile01' defaultValue={doctorDatas.image} onChange={handleChange} />
              </MDBInputGroup>


              <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="UserEmail"
                  placeholder="enter new Name"
                  defaultValue={doctorDatas.name}
                  onChange={handleChange}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  Name
                </span>
              </label>


              <MDBInputGroup className='mb-3 mt-4'>
                <MDBBtn outline>Category</MDBBtn>

                <MDBDropdown>
                  <MDBDropdownToggle outline className='dropdown-toggle-split'>
                    <span className='visually-hidden'>Toggle Dropdown</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link onClick={() => handleChangeCategory("Dentist")}>Dentist</MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => handleChangeCategory("Cardiologist")}>Cardiologist</MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => handleChangeCategory("Orthopedic")}>Orthopedic</MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => handleChangeCategory("Neurologist")}>Neurologist</MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => handleChangeCategory("Otologist")}>Otologist</MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => handleChangeCategory("General Doctor")}>General Doctor</MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => handleChangeCategory("Surgeon")}>Surgeon</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <input className='form-control' type='text' defaultValue={doctorDatas.category} onChange={handleChange} />
              </MDBInputGroup>


              <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mt-4"
              >
                <input
                  type="text"
                  id="UserEmail"
                  placeholder="enter new Name"
                  defaultValue={doctorDatas.experience}
                  onChange={handleChange}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  Experience
                </span>
              </label>


              <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mt-4"
              >
                <input
                  type="text"
                  id="UserEmail"
                  placeholder="enter new Name"
                  defaultValue={doctorDatas.hospital}
                  onChange={handleChange}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  Hospital
                </span>
              </label>


              <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mt-4"
              >
                <textarea
                  type="textarea"
                  id="UserEmail"
                  placeholder="about"
                  defaultValue={doctorDatas.about}
                  onChange={handleChange}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  About
                </span>
              </label>


              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Edited
              </button>



            </form>
          </MDBModalBody>

        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
