import React, { useEffect,useState } from 'react'
import axios from '../api/api'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Users = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //getting user data
  const getUser = async () => {
    const response = await axios.get("/api/v1/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    window.confirm("Are you sure you want to delete this account")
    try {
      await axios.delete(`/api/v1/users/delete/${id}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
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
        <div className="text-center my-10">
          <h1>Users</h1>
        </div>
        <div className="border border-slate-300 ">
          <table className="text-sm text-left w-full">
            <thead className="text-gray-700 bg-blue-200">
              <tr>
                <th className="py-3 px-6">No.</th>
                <th className="py-3 px-6">
                  <div className="flex items-center">
                    <span>Full Name</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                  </div>
                </th>
                <th className="py-3 px-6">
                  <div className="flex items-center">
                    <span>Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                  </div>
                </th>
                <th className="py-3 px-6">
                  <div className="flex items-center">
                    <span>Phone</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                  </div>
                </th>
                <th className="py-3 px-6">
                  <div className="flex items-center">
                    <span>Role</span>
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
                    <span>Updated At</span>
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
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user._id} className="bg-white border-b border-slate-500">
                      <td className="py-4 px-6">{index + 1}</td>
                      <td className="py-4 px-6">{user.fullName}</td>
                      <td className="py-4 px-6">{user.email}</td>
                      <td className="py-4 px-6">{user.phone}</td>
                      <td className="py-4 px-6">{user.isAdmin}</td>
                      <td className="py-4 px-6">{user.createdAt}</td>
                      <td className="py-4 px-6">{user.createdAt}</td>
                      <td className="flex items-center text-xl py-4 px-6 space-x-2">
                        <Link to={`/users/edit/${user._id}`} className="bg-teal-500 p-2 text-md text-white mr-1 rounded-lg"><FaEdit/></Link>
                        <button onClick={() => deleteUser(user._id)} className="bg-red-500 p-2 rounded-lg text-md text-white"><MdDelete/></button>
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

export default Users
