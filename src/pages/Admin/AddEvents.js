import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from '../api/api'
import { MdOutlineEvent } from "react-icons/md";

const URL ="/api/v6/events"

const AddEvents = () => {

  const [image,setImage] = useState('')
  const [date,setDate] = useState('')
  const [title,setTitle] = useState('')
  const [location,setLocation] = useState('')
  const [about,setAbout] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(URL,
      JSON.stringify({image,date,title,location,about}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredential : true
      })
      toast.success("Event Added")
      setImage('')
      setDate('')
      setTitle('')
      setLocation('')
      setAbout('')
    } catch (error) {
      console.log(error)
      console.log(error?.message)
      toast.error("Failed to add")
    }
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex justify-center mt-4">
          <h1 className="text-blue-700"><MdOutlineEvent/></h1>
        </div>
        <h1 className="text-center text-3xl font-bold">Add Events</h1><br />
        <div className="flex flex-wrap items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="p-1">
              <input
                type="file"
                required
                accept="image/*"
                className="py-3 px-2 border border-slate-300 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1 md:w-full"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="p-1">
                <label htmlFor="date">
                  <input 
                    type="date" 
                    required
                    placeholder="Date"
                    className="py-3 px-2 border border-slate-300 focus:outline-none focus:border-sky-500 rounded-lg  focus:ring-1 md:w-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-1">
                <label htmlFor="title">
                  <input 
                    type="text" 
                    placeholder="Title"
                    className="py-3 px-2 border border-slate-300 focus:outline-none focus:border-sky-500 rounded-lg  focus:ring-1"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-1">
                <label htmlFor="location">
                  <select name="location" 
                    id="location" 
                    className="py-3 px-2 w-full bg-transparent border border-slate-300 focus:outline-none focus:border-sky-500 rounded-lg  focus:ring-1"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Virtual Event">Virtual Event</option>
                    <option value="In person Event">In-person Event</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="p-1">
              <label htmlFor="about">
                <textarea name="about" id="about" 
                  cols="30" rows="10"
                  required
                  placeholder="About The Event"
                  className="py-3 px-2 border border-slate-300  focus:outline-none focus:border-sky-500 rounded-lg  focus:ring-1 w-full"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="p-1 flex place-content-center">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">Add Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEvents
