import React, { useState,useEffect }  from 'react'
import axios from '../api/api'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../Context/AuthContext'

const URL = '/api/v4/public'

const CreateBlog = () => {

  const [radio,setRadio] = useState('Discussion')
  const [title,setTitle] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()
  const { state: { userInfo } } = AuthState()
  const redirect = '/login'

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(URL,
      JSON.stringify({ radio,title,message }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success("New post created succesful");
      navigate('/createblog')
    } catch (error) {
      toast.error("Post not created");
      console.log(error);
    }
  }

  useEffect(() => {
    if(!userInfo){
      navigate(redirect)
    }
  },[navigate, redirect, userInfo])

  return (
    <div className='bg-slate-100'>
      <div className="container mx-auto p-4">
        <h2 className="text-center my-10">Public Participation</h2>
        <div className="flex flex-wrap items-center justify-center mb-20">
          <div className="bg-white p-4 rounded-lg">
            <div>
              <h1 className="font-light">Create New Post</h1>
              <p>Start a discuss or ask a question</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-2">
                <span>What kind of post are you creating?</span>
                <div className="flex items-center gap-4">
                  <div className="py-3 px-5 space-x-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1">
                    <label htmlFor="Question">Question</label>
                    <input type="radio" 
                      id="dis1" name="dis" 
                      value="Question"
                      checked={radio === "Question"}
                      onChange={(e) => setRadio(e.target.value)}
                    />
                  </div>
                  <div className="py-3 px-5 space-x-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1">
                    <label htmlFor="Discussion">Discussion</label>
                    <input type="radio" 
                      id="dis2" name="dis" 
                      value="Discussion"
                      checked={radio === "Discussion"}
                      onChange={(e) => setRadio(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="p-2">
                <label htmlFor="title">Title</label><br />
                <input 
                  type="text" 
                  placeholder="Add title here"
                  required
                  className="py-3 px-2 w-full border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  rounded-lg  focus:ring-1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="p-2">
                <label htmlFor="body">Message</label><br />
                <textarea name="message" id="message" 
                  cols="30" rows="10"
                  required
                  placeholder="Add as many as possible details to make it easier for others to reply!"
                  className="py-3 px-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  rounded-lg  focus:ring-1"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="p-2">
                <button className="py-3 px-5 bg-blue-600 text-white rounded-lg">Post</button>
              </div>
            </form>
          </div>
        </div>       
      </div>
    </div>
  )
}

export default CreateBlog