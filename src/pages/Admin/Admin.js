import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
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
          <span><u>Use this links to navigate</u></span>
          <div className="p-4">
            <ul>
              <li className="hover:underline"><a href="/users">&#x27A4; Users</a></li>
              {/* <li className="hover:underline"><a href="/blogs">&#x27A4; Community Forum</a></li> */}
              <li className="hover:underline"><a href="/proposals">&#x27A4; View Requests</a></li>
              <li className="hover:underline"><a href="/createblogs">&#x27A4; Create Disussion</a></li>
              <li className="hover:underline"><a href="/addevents">&#x27A4; Add Events</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
