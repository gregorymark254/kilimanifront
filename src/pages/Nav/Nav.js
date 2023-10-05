import React, {useState} from 'react'
import { FaBars } from "react-icons/fa"
import { ToastContainer } from 'react-toastify';
import { AuthState } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css'

const Nav = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navigate = useNavigate()
  const { state: { userInfo }, dispatch } = AuthState()
  const signOut = () => {
    dispatch({type:'USER_SIGNOUT'})
    localStorage.clear()
    navigate("/")
  }

  return (
    <main className="nav">
      <div className="bg-black text-white">
        <div className="container mx-auto p-4">
        <ToastContainer />
          <nav className='flex flex-wrap justify-between items-center px-4'>
            {/* Top Nav */}
            <a href="/#" className="flex items-center">
              <img width={60} height={60} src="https://static.vecteezy.com/system/resources/previews/011/423/100/original/kh-logo-k-h-design-white-kh-letter-kh-letter-logo-design-initial-letter-kh-linked-circle-uppercase-monogram-logo-vector.jpg" alt="" />
              <h3>Kilimani Hub</h3>
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="/" className="nav-links">Home</a>
              </li>
              <li className="nav-item">
                <a href="/events" className="nav-links">Events</a>
              </li>
              <li className="nav-item">
                <a href="/public" className="nav-links">Ideas</a>
              </li>
              
              {userInfo ? (
                <div>
                  {userInfo.isAdmin === 'Admin' ? (
                    //admin navbar
                    <div className="dropdown inline-block relative">
                      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">{userInfo.email}</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li><a className="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap" href="/admin">Admin</a></li>
                        <li><a className="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap" href="/users">Users</a></li>
                        <li><a className="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap" href="/createblogs">Create Blogs</a></li>
                        <li><a className="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap" href="/proposals">Support Request</a></li>
                        <li><a className="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap" href="/createvote">Create vote</a></li>
                        <li><a className="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap" href="/addevents">Add Events</a></li>
                        <li><a onClick={signOut} className="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap" href="#/">Log Out</a></li>
                      </ul>
                    </div>   
                  ) : (
                    // user navbar
                    <div className="dropdown inline-block relative">
                      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">{userInfo.email}</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li><a onClick={signOut} className="bg-gray-200 hover:bg-red-400 py-2 px-4 block whitespace-no-wrap" href="#/">Log Out</a></li>
                      </ul>
                    </div>   
                  )}         
                </div>
                ) : (                
                  <li className="nav-item">
                    <a href="/login" className="nav-links">Sign In</a>
                  </li>
                )
              }
              <li className="nav-item">
                <a href="/donate" className="bg-white text-black px-4 py-2 rounded-lg">Donate</a>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <span><FaBars/></span>
            </div>
          </nav>
        </div>
      </div> 
    </main>
  )
}

export default Nav