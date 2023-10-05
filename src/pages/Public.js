import React, { useState, useEffect } from 'react'
import axios from "./api/api";
import { Link } from 'react-router-dom'
import Polls from './Polls'
import { AuthState } from './Context/AuthContext'

const Public = () => {

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
    <div className='bg-slate-100'>
      <div className="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center mb-10 mt-8">Announcement</h1><br/>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className='bg-white rounded-lg w-full md:w-1/2 lg:w-1/3'>
            <div className="p-4">
              <h3><b>Open For Discussions</b></h3>
              <h4><u><i>Admin Announcement</i></u></h4>
              <div>
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
                          <p>{post.message}</p>
                          <span>{post.createdAt}</span>
                          <div className="flex flex-wrap items-center space-x-2">
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
          <div className='bg-white rounded-lg w-full md:w-1/3 lg:w-1/3'>
            <Polls/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Public