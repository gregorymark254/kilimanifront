import React, { useState, useEffect } from "react";
import axios from "./api/api";
import {  useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthState } from './Context/AuthContext'

const MyComment = () => {

  const [radio, setRadio] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const { state : { like }, dispatch } = AuthState()
  
  const getCommentById = async () => {
    const response = await axios.get(`/api/v4/all/${id}`);
    setRadio(response.data.radio);
    setTitle(response.data.title);
    setMessage(response.data.message);
  }

  useEffect(() => {
    getCommentById();
    // eslint-disable-next-line
  }, []);

  const [reply,setReply] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/api/v4/public/${id}`,
      JSON.stringify({reply}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredential : true
      })
      toast.success("Reply successfuly")
      setReply('')
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.log(error)
      console.log(error?.response)
      toast.error("Failed to submit")
    }
  }


  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //getting proposal data
  const getComments = async () => {
    const response = await axios.get("/api/v4/public/comments");
    setComments(response.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  //seting loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })

  

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-4">Comment on this public Post</h1><br />
        <div>
          <div className="p-4 space-y-1">
            <div>
              <h4><b>{radio}</b></h4>
              <h5>{title}</h5>
              <h5>{message}</h5>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-1">
                <label htmlFor="comment">
                  <input 
                    type="text" 
                    required
                    placeholder="Leave a comment"
                    className="py-3 px-2 bg-inherit border border-slate-300 placeholder-slate-300 focus:outline-none focus:border-sky-500  rounded-lg  focus:ring-1"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-1">
                <button className="bg-blue-500 px-2 py-1 text-md text-white">Comment</button>
              </div>
            </form>
            <br />
            <hr />
          </div>
        </div>
        <div className="p-4" >
          <h3 className="text-center"><u><i>Comments</i></u></h3>
          {isLoading ? (
            <div>
              <p>loading...</p>
            </div>
          ) : (
            <div>
              {
                comments.map((comment,index) => (
                  <div key={comment._id} className="p-4 space-y-1">
                    <h4><b>{comment.reply}</b></h4>
                    <span>{comment.createdAt}</span>
                    <div className="flex items-center gap-2">
                      {like.some((d) => d._id === comment._id) ? (
                        <button onClick={() => {dispatch({type: 'UNLIKE', payload:comment})}}  className="bg-orange-500 p-1 text-md text-white">Unlike</button>
                      ) : (
                        <button onClick={() => {dispatch({type: 'LIKE', payload:comment})}} className="bg-red-500 p-1 text-md text-white">Like</button>
                      )} 
                      <span>{like.filter((d) => d._id === comment._id).length}</span>
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
  )
}

export default MyComment
