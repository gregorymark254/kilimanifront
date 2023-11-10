import React, { useState, useEffect } from 'react'
import { PiUsersFourFill,PiSpeakerSimpleSlashBold } from "react-icons/pi";
import { FaHandsClapping,FaHeadset } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "./api/api";
import { AuthState } from './Context/AuthContext'

const Home = () => {

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { state : { like }, dispatch } = AuthState()

  //getting billing data
  const getBlog = async () => {
    const response = await axios.get("/api/v2/all");
    setBlogs(response.data);
  };

  useEffect(() => {
    getBlog();
  }, []);

  //seting loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })

  return (
    <div className='bg-slate-100'>
      {/* hero image */}
      <section>
        <div className="hero">
          <div className="container mx-auto p-4">
            <div className="flex item-center justify-center">
              <div>
                <h1 className="text-5xl"><b>KH</b> community</h1>
                <br />
                <div>
                  <form action="">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <label htmlFor="search">
                        <input
                          type="search"
                          placeholder="Search..."
                          required
                          name="search"
                          autoComplete="off"
                          className="py-3 px-2 bg-inherit border border-slate-300 placeholder-blue-300 focus:outline-none focus:border-sky-500 rounded-lg  focus:ring-1 lg:w-96"
                        />
                      </label>
                      <button className="py-3 px-7 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* resourses */}
      <section>
        <div className="container mx-auto p-4">
          <br />
          <h3 className="text-center"><b>Getting Started</b></h3>
          <br />
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a href="/new" className="flex items-center justify-center space-x-3 p-4 border border-slate-300 rounded-lg md:w-1/3 lg:w-1/6 hover:bg-blue-600 hover:text-white">
              <h3><FaHandsClapping/></h3>
              <h4>I'M NEW</h4>
            </a>
            <a href="/help" className="flex items-center justify-center space-x-3 p-4 border border-slate-300 rounded-lg md:w-1/3 lg:w-1/6 hover:bg-blue-600 hover:text-white">
              <h3><FaHeadset/></h3>
              <h4>SUPPORT</h4>
            </a>
            <a href="/donate" className="flex items-center justify-center space-x-3 p-4 border border-slate-300 rounded-lg md:w-1/3 lg:w-1/6 hover:bg-blue-600 hover:text-white">
              <h3><FaDonate/></h3>
              <h4>DONATE</h4>
            </a>
          </div>
        </div>
      </section>

      {/* features */}
      <section>
        <div className="container mx-auto p-4">
          <h3 className="md:mx-52 lg:mx-72">Features</h3>
          <div className="flex flex-wrap justify-center items-center gap-5 my-10">
            <div className="p-8 bg-white rounded-lg space-y-1 md:w-1/3 lg:w-1/5 flex flex-col justify-center items-center"> 
              <h2 className="text-blue-600"><MdOutlineDateRange/></h2>
              <h4>Events</h4>
              <p className="hover:text-blue-600"><u className="no-underline"><Link to="/events">Visit page </Link></u></p>
            </div>
            <div className="p-8 bg-white rounded-lg space-y-1 md:w-1/3 lg:w-1/5 flex flex-col justify-center items-center"> 
              <h2 className="text-red-500"><PiSpeakerSimpleSlashBold/></h2>
              <h4>Noise Reports</h4>
              <p className="hover:text-blue-600 text-center"><u className="no-underline"><Link to="/noisereports">Visit page</Link></u></p>
            </div>
            <div className="p-8 bg-white rounded-lg space-y-1 md:w-1/3 lg:w-1/5 flex flex-col justify-center items-center">
              <h2 className="text-amber-950"><PiUsersFourFill/></h2>
              <h4>Public participation</h4>
              <p className="hover:text-blue-600 text-center"><u className="no-underline"><Link to="/public">Visit page</Link></u></p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Discussions */}
      <section>
        <div className="container mx-auto p-4">
          <div className='bg-white lg:mx-72 rounded-lg mb-20'>
           <div className="p-4">
            <h3><b>Open For Discussions</b></h3>
            <h4><u className="no-underline"><i>Public Activities</i></u></h4>
            <div>
              {isLoading ? (
                <div>
                  <p>loading...</p>
                </div>
              ) : (
                <div>
                  {
                    blogs.map((blog,index) => (
                      <div key={blog._id} className="p-4 space-y-1">
                        <h4><b>{blog.subject}</b></h4>
                        <h5>{blog.description}</h5>
                        <span>{blog.createdAt}</span>
                        <div className="flex flex-wrap items-center space-x-2">
                          <Link to={`/comment/${blog._id}`} className="bg-blue-500 p-1 text-md text-white">Comment</Link>
                          {like.some((d) => d._id === blog._id) ? (
                            <button onClick={() => {dispatch({type: 'UNLIKE', payload:blog})}}  className="bg-orange-500 p-1 text-md text-white">Unlike</button>
                          ) : (
                            <button onClick={() => {dispatch({type: 'LIKE', payload:blog})}} className="bg-red-500 p-1 text-md text-white">Like</button>
                          )} 
                          <span>{like.filter((d) => d._id === blog._id).length}</span>
                        </div>
                        <br />
                        <hr />
                      </div>
                    ))
                  }   
                </div>
              )}
            </div>
           </div>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default Home
