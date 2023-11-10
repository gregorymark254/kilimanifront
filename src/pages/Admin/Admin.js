import React, { useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { AuthState } from '../Context/AuthContext'

const Admin = () => {

  const { state: { userInfo } } = AuthState()
  const redirect = '/login'
  const navigate = useNavigate()

  //check if the user is loged in and verify is Admin
  useEffect(() => {
    if(!userInfo){
      navigate(redirect)
    }
  },[navigate, redirect, userInfo])

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("userInfo"));
    if (storedItem && storedItem.isAdmin !== "Admin") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <h1 class="text-center font-bold text-blue-600 mt-20">Admin</h1>
        <h3 class="text-center mt-5">Welcome {userInfo.email}</h3>

        <div className='flex flex-col justify-center items-center mt-10'>
          <Link className='hover:underline hover:text-blue-600' to="/users">Users</Link><br />
          <Link className='hover:text-blue-600 hover:underline' to="/blogs">Community Forum</Link><br />
          <Link className='hover:text-blue-600 hover:underline' to="/proposals">View Requests</Link><br />
          <Link className='hover:text-blue-600 hover:underline' to="/createvote">Create Vote</Link><br />
          <Link className='hover:text-blue-600 hover:underline' to="/addevents">Add Events</Link><br />
        </div>
      </div>
    </div>
  )
}

export default Admin
