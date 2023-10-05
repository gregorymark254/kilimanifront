import React, { useState, useEffect } from "react";
import axios from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

const EditVote = () => {

  const [votequestion,setQuestion] = useState('')
  const [text,setText] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  
  const getUserById = async () => {
    const response = await axios.get(`/api/v3/all/${id}`);
    setQuestion(response.data.votequestion);
    setText(response.data.text);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/v3/update/${id}`,{
        votequestion,
        text
      });
      navigate("/createvote");
    } catch (error) {
      console.log(error)
      console.log(error?.response)
    }
  }
 
  useEffect(() => {
    getUserById();
    // eslint-disable-next-line
  }, []);


  return (
    <div className="min-h-screen">
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center">
        <form className="block shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
          <div className="text-center p-5">
            <h3><b>Update Vote!</b></h3>
          </div>  
          <div className="p-2">
            <label htmlFor="question">Question <br />
              <input 
                type="text" 
                required
                placeholder="Create Question"
                className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                value={votequestion}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </label>
          </div>
          <div className="p-2">
            <label htmlFor="message">
              <textarea 
                name="mes" id="mes" cols="25" rows="5"
                value={text}
                placeholder="Message"
                onChange={(e) => setText(e.target.value)}
                className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
              ></textarea>
            </label>
          </div>
          <div className="p-2">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-400">Update Vote</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EditVote
