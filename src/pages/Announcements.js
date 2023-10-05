import React, { useState, useEffect } from 'react'
import axios from "./api/api";
import { Link } from 'react-router-dom'
import { AuthState } from './Context/AuthContext'

const Announcements = () => {

  const [publicPost, setPublicpost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { state : { like }, dispatch } = AuthState()


  //getting billing data
  const getPublicpost = async () => {
    const response = await axios.get("/api/v4/all");
    setPublicpost(response.data);
  };

  useEffect(() => {
    getPublicpost();
  }, []);

  //seting loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })


  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center mb-20 mt-8">Announcement</h1><br/>
        <div className='bg-white lg:mx-72 rounded-lg mb-20'>
           <div className="p-4">
            <h3><b>Open a Discussions</b></h3>
            <h4><u><i>Admin Announcement</i></u></h4>
            <div className>
              {isLoading ? (
                <div>
                  <p>loading...</p>
                </div>
              ) : (
                <div>
                  {
                    publicPost.map((post,index) => (
                      <div key={post._id} className="p-4 space-y-1">
                        <h4><b>{post.radio}</b></h4>
                        <h5>{post.title}</h5>
                        <h5>{post.message}</h5>
                        <span>{post.createdAt}</span>
                        <div className="flex flex-wrap space-x-2">
                          <Link to={`/mycomment/${post._id}`} className="bg-blue-500 p-1 text-md text-white">Comment</Link>
                          {like.some((d) => d._id === post._id) ? (
                            <button onClick={() => {dispatch({type: 'UNLIKE', payload:post})}}  className="bg-orange-500 p-1 text-md text-white">Unlike</button>
                          ) : (
                            <button onClick={() => {dispatch({type: 'LIKE', payload:post})}} className="bg-red-500 p-1 text-md text-white">Like</button>
                          )} 
                          <span>{like.filter((d) => d._id === post._id).length}</span>
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
      {/* <div className="container mx-auto p-4">
        <div>
          <h3>posts</h3>
          <h3>Create posts</h3>
          <div className="w-full xl:w-2/3 mb-10">
            <form onSubmit={handleSubmit}>
              <div className="grid p-1">
                <label htmlFor="subject">Subject
                  <select 
                    name="type" id="type" 
                    required 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-inherit px-2 py-3 w-full border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1">
                    <option value="">Select</option>
                    <option value="Noise">Noise</option>
                    <option value="Development">Development</option>
                    <option value="Public">Public</option>
                  </select>   
                </label>
              </div>
              <div className="grid p-1">
                <label htmlFor="description">Description</label>
                <textarea 
                  name="des" id="des" 
                  cols="30" rows="10"
                  required
                  className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="p-1">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Announcements
