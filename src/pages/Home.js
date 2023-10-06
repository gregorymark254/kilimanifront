import React from 'react'
import { PiUsersFourFill,PiSpeakerSimpleSlashBold } from "react-icons/pi";
import { FaHandsClapping,FaHeadset } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const Home = () => {

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
          <div className="flex flex-wrap items-center justify-center gap-5 my-10">
            <a href="/events" className="p-8 bg-white rounded-lg space-y-1 md:w-1/3 lg:w-1/5"> 
              <h2 className="text-blue-600"><MdOutlineDateRange/></h2>
              <h4>Events</h4>
              <p className="hover:text-blue-600"><u>Get Started..</u></p>
            </a>
            <a href="/noise" className="p-8 bg-white rounded-lg space-y-1 md:w-1/3 lg:w-1/5"> 
              <h2 className="text-red-500"><PiSpeakerSimpleSlashBold/></h2>
              <h4>Noise Reports</h4>
              <p className="hover:text-blue-600"><u>Get Started..</u></p>
            </a>
            <a href="/public" className="p-8 bg-white rounded-lg space-y-1 md:w-1/3 lg:w-1/5">
              <h2 className="text-amber-950"><PiUsersFourFill/></h2>
              <h4>Public participation</h4>
              <p className="hover:text-blue-600"><u>Get Started..</u></p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
