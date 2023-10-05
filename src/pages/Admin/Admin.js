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
        <h3 class="text-center">Welcome {userInfo.email}</h3>

        <div>
          <Link to="/users">Users</Link><br />
          <Link to="/blogs">Community Forum</Link><br />
          <Link to="/proposals">View Requests</Link><br />
          <Link to="/createvote">Create Vote</Link><br />
          <Link to="/addevents">Add Events</Link><br />
        </div>
      </div>
    </div>
  )
}

export default Admin
