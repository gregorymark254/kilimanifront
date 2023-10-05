import React,{ useState, useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from '../api/api'
import { AuthState } from '../Context/AuthContext'

const URL = '/api/v1/login'


const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const { state : { userInfo }, dispatch } = AuthState()

  const redirect =  '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL,
      JSON.stringify({email,password}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredential : true
      })
      dispatch({type:'USER_SIGNIN', payload:response.data})
      localStorage.setItem('userInfo', JSON.stringify(response.data))
      const isAdmin = response?.data?.isAdmin
      if (isAdmin === 'Admin') {
        navigate("/admin")
      } else {
        navigate("/")
      }
      toast.success("Login Succesful")
    } catch (error) {
      console.log(error)
      console.log(error?.response)
      toast.error("Wrong username or password")
    }
  }

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  },[navigate, redirect, userInfo])


  return (
    <div>
      <section className="min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-center my-10">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center">Login to your account..</h4>
              <br />
              <div className="p-2">
                <label htmlFor="email">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-2">
                <label htmlFor="email">
                  <input 
                    type="Password" 
                    placeholder="Password"
                    className="px-2 py-3 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-lg focus:ring-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <span className="px-2">Don't have an account?<Link to="/register"><u>Sign Up</u></Link></span>
              <div className="p-2">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-400">Login</button>
              </div>
            </form>            
          </div>
          <p>Admin : mark@gmail.com</p>
          <p>Password : qwerty</p>
        </div>
      </section>
    </div>
  )
}

export default Login
