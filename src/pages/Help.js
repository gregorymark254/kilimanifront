import React, { useState } from 'react'
import { FaRegFile,FaUsers } from "react-icons/fa";
import { MdRecordVoiceOver,MdWifiCalling3 } from "react-icons/md";
import { toast } from 'react-toastify';
import axios from './api/api'

const URL = "/api/v5/support"

const Help = () => {

  const [email,setEmail] = useState('')
  const [proposal,setProposal] = useState('')
  const [description,setDescription] = useState('')
  const [file,setFile] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(URL,
      JSON.stringify({email,proposal,description,file}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredential : true
      })
      toast.success("Proposal submited successfuly")
      setEmail('')
      setProposal('')
      setDescription('')
    } catch (error) {
      console.log(error)
      console.log(error?.response)
      toast.error("Failed to submit")
    }
  }

  return (
    <div>
      <section>
        <div className="container mx-auto p-4">
          <div className="md:mx-56">
            <h2><b>Submit a request</b></h2>
            <br />
            <div className="mb-10">
              <form onSubmit={handleSubmit}>
                <div className="grid p-1">
                  <label htmlFor="email">Your email address</label>
                  <input 
                    type="email" 
                    required
                    className="px-2 py-3 w-full border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid p-1">
                  <label htmlFor="subject">What type of proposal/issue would you like to submit?</label>
                  <input 
                    type="text" 
                    required
                    className="px-2 py-3 w-full border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={proposal}
                    onChange={(e) => setProposal(e.target.value)}
                  />               
                </div>
                <div className="grid p-1">
                  <label htmlFor="description">Description</label>
                  <textarea 
                    name="des" id="des" 
                    cols="30" rows="10"
                    required
                    className="px-2 py-3 w-full border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="grid p-1">
                  <label htmlFor="attachment">Attachment (Optional)</label>
                  <input 
                    type="file" 
                    className="px-2 py-3 w-full border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                  />
                </div>
                <div className="p-1">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* contact us */}
      <section id="contact">
        <div className="container mx-auto p-4">
          <h3 className="text-center"><b>Contact Us.</b></h3>
          <br />
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="p-6 space-y-1">
              <h1 className="text-blue-500 text-5xl"><MdRecordVoiceOver/></h1>
              <h4><b>Chat with Us</b></h4>
              <p>Weekdays 9am to 9pm.</p>
            </div>
            <div className="p-6 space-y-1"> 
              <h1 className="text-blue-500 text-5xl"><FaRegFile/></h1>
              <h4><b>Submit a request</b></h4>
              <p>Submit a request to our team.</p>
            </div>
            <div className="p-6 space-y-1">
              <h1 className="text-blue-500 text-5xl"><MdWifiCalling3/></h1>
              <h4><b>Call us at +254111111111</b></h4>
              <p>Weekdays 9am to 9pm.</p>
            </div>
            <div className="p-6 space-y-1">
              <h1 className="text-blue-500 text-5xl"><FaUsers/></h1>
              <h4><b>Ask the community</b></h4>
              <p>Find best practices,post and <br />learn from the community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Help
