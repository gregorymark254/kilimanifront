import React, { useState, useEffect } from "react";
import axios from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {

  const [fullName, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setAdmin] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  
  const getUserById = async () => {
    const response = await axios.get(`/api/v1/users/${id}`);
    setFname(response.data.fullName);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setAdmin(response.data.isAdmin);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/v1/users/update/${id}`,{
        fullName,
        email,
        phone,
        isAdmin
      });
      navigate("/users");
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(() => {
    getUserById();
    // eslint-disable-next-line
  }, []);


  return (
    <div className="min-h-screen">
      <section className="container mx-auto p-4">
        <div className="flex justify-center items-center">
          <form className="block shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
            <div className="text-center p-5">
              <h3><b>Update user account!</b></h3>
            </div>  
            <div className="mb-4">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="First Name"
                name="fname" 
                id="fname" 
                value={fullName}
                onChange = { (e) => setFname(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email Address"
                name="mail" 
                id="mail" 
                value={email}
                onChange = { (e) => setEmail(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                autoComplete="off"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Phone Number"
                name="number" 
                id="number"
                value={phone}
                onChange = { (e) => setPhone(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                autoComplete="off"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Role"
                name="role" 
                id="role"
                value={isAdmin}
                onChange = { (e) => setAdmin(e.target.value) }
              />
            </div>
            <div className="text-center pt-1 mb-12 pb-1">
              <button className="inline-block px-6 py-2.5 bg-[#C21010] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#e04444] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"> Update User</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default EditUser
