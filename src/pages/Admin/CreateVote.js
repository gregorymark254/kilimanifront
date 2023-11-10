import React,{ useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from '../api/api'
import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const URL = '/api/v3/vote'

const CreateVote = () => {

  const [votequestion,setQuestion] = useState('')
  const [text,setText] = useState('')
  const [vote, setVote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(URL,
      JSON.stringify({ votequestion,text }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success("Added succesful");
    } catch (error) {
      toast.error("failed");
      console.log(error);
    }
  }

  // getting votes data
  const getVote = async () => {
    const response = await axios.get("/api/v3/all");
    setVote(response.data);
  };

  useEffect(() => {
    getVote();
  }, []);

  //seting loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })

  const deleteVotes = async (id) => {
    window.confirm("Are you sure you want to delete this account")
    try {
      await axios.delete(`/api/v3/delete/${id}`);
      getVote();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mb-5 mt-5">Create opinion poll</h1>
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center p-2">
              <label htmlFor="question">Question <br />
                <input 
                  type="text" 
                  required
                  placeholder="Create Question"
                  className="mt-2 w-60 px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
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
                  className="w-60 px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                ></textarea>
              </label>
            </div>
            <div className="p-2">
              <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-400">Create</button>
            </div>
          </form>
        </div>

        <div>
          <h1 className="text-center text-3xl font-bold mb-5 mt-5">Polls Created & Results</h1>
        </div>

        <div>
          {isLoading ? (
            <div>
              <p>loading...</p>
            </div>
          ) : (
            <div className="border border-slate-300 ">
              <table className="text-sm text-left w-full">
                <thead className="text-gray-700 bg-blue-200">
                  <tr>
                    <th className="py-3 px-6">No.</th>
                    <th className="py-3 px-6">
                      <div className="flex items-center">
                        <span>Question</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                      </div>
                    </th>
                    <th className="py-3 px-6">
                      <div className="flex items-center">
                        <span>About Question</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                      </div>
                    </th>
                    <th className="py-3 px-6">
                      <div className="flex items-center">
                        <span>Results</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                      </div>
                    </th>
                    <th className="py-3 px-6">
                      <div className="flex items-center">
                        <span>Created At</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                      </div>
                    </th>
                    <th className="py-3 px-6">
                      <div className="flex items-center">
                        <span>Action</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                      </div>
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  <div className="flex justify-center h-96 items-center">
                    <h3>Loading...</h3>
                  </div>
                ) : (
                  <tbody>
                    {vote.length > 0 ? (
                      vote.map((votes, index) => (
                        <tr key={votes._id} className="bg-white border-b border-slate-500">
                          <td className="py-4 px-6">{index + 1}</td>
                          <td className="py-4 px-6">{votes.votequestion}</td>
                          <td className="py-4 px-6">{votes.text}</td>
                          <td className="py-4 px-6">{votes.res}</td>
                          <td className="py-4 px-6">{votes.createdAt}</td>
                          <td className="flex items-center text-xl py-4 px-6 space-x-2">
                            <Link to={`/votes/edit/${votes._id}`} className="bg-teal-500 p-2 rounded-lg text-md text-white mr-1"><FaEdit/></Link>
                            <button onClick={() => deleteVotes(votes._id)} className="bg-red-500 p-2 rounded-lg text-md text-white"><MdDelete/></button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <div className="flex justify-center h-screen items-center">
                        <span>NO DATA</span>
                      </div>
                    )}
                  </tbody>
                )}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateVote
