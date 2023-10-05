import React,{ useState }  from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from '../api/api'
import { FaUsers } from "react-icons/fa";
const URL = '/api/v1/register'

const Register = () => {

  const [fullName,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } 
    try {
      await axios.post(URL,
      JSON.stringify({ fullName, email, phone, password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success("Registration Successful");
      navigate("/login");
    } catch (error) {
      if (!error?.response) {
        toast.error("No Server Response");
      } else if (error.response?.status === 400) {
        toast.error("All fields are required");
      } else if (error.response?.status === 409) {
        toast.error("Email Taken");
      } else {
        toast.error("Registration Failed");
      }
      console.log(error);
    }
  };

  return (
    <div className='bg-slate-100'>
      <section className="min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-center my-10">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mt-4">
                <h1 className="text-blue-700"><FaUsers/></h1>
              </div>
              <h4 className="text-center">Register your account..</h4>
              <div className="p-2">
                <label htmlFor="name">
                  <input 
                    type="text" 
                    required
                    placeholder="Full Names"
                    className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={fullName}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-2">
                <label htmlFor="email">
                  <input 
                    type="email" 
                    required
                    placeholder="Email"
                    className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-2">
                <label htmlFor="number">
                  <input 
                    type="number" 
                    required
                    placeholder="Number"
                    className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-2">
                <label htmlFor="password">
                  <input 
                    type="Password" 
                    required
                    placeholder="Password"
                    className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-2">
                <label htmlFor="confpassword">
                  <input 
                    type="Password" 
                    required
                    placeholder="Confirm Password"
                    className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>
              </div>
              <span className="px-2">Already have an account?<Link to="/login"><u>Login</u></Link></span>
              <div className="p-2">
                <button className="bg-blue-700 text-white px-5 py-2 rounded-lg w-full hover:bg-blue-600">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
