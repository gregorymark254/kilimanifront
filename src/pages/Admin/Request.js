import React, { useEffect,useState } from 'react'
import axios from '../api/api'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { BiSolidConversation } from "react-icons/bi";

const Request = () => {

  const [proposals, setProposal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //getting proposal data
  const getProposal = async () => {
    const response = await axios.get("/api/v5/all");
    setProposal(response.data);
  };

  const deleteUser = async (id) => {
    window.confirm("Are you sure you want to delete this account")
    try {
      await axios.delete(`/api/v5/delete/${id}`);
      getProposal();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProposal();
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
        <div className="flex justify-center">
          <h1 className="text-blue-700"><BiSolidConversation/></h1>
        </div>
        <h1 class="text-3xl text-center font-bold mb-10">Support Request</h1>
        <div className="border border-slate-300 ">
          <table className="text-sm text-left w-full">
            <thead className="text-gray-700 bg-blue-200">
              <tr>
                <th className="py-3 px-6">No.</th>
                <th className="py-3 px-6">
                  <div className="flex items-center">
                    <span>Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                  </div>
                </th>
                <th className="py-3 px-6">
                  <div className="flex items-center">
                    <span>Subject</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                  </div>
                </th>
                <th className="py-3 px-6">
                  <div className="flex items-center">
                    <span>Description</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                  </div>
                </th>
                <th className="py-3 px-6">
                  <div className="flex items-center">
                    <span>File</span>
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
                {proposals.length > 0 ? (
                  proposals.map((proposal, index) => (
                    <tr key={proposal._id} className="bg-white border-b border-slate-500">
                      <td className="py-4 px-6">{index + 1}</td>
                      <td className="py-4 px-6">{proposal.email}</td>
                      <td className="py-4 px-6">{proposal.proposal}</td>
                      <td className="py-4 px-6">{proposal.description}</td>
                      <td className="py-4 px-6">{proposal.file}</td>
                      <td className="flex items-center text-xl py-4 px-6 space-x-2">
                        {/* <Link to={`/users/edit/${proposal._id}`} className="bg-teal-500 p-2 rounded-lg text-md text-white mr-1"><FaEdit/></Link> */}
                        <button onClick={() => deleteUser(proposal._id)} className="bg-red-500 p-2 rounded-lg text-md text-white"><MdDelete/></button>
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
      </div>
    </div>
  )
}

export default Request
