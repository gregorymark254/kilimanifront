import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'

const Donate = () => {

  const [phone,setPhone] = useState('')
  const [amount,setAmount] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:4000/api/v7/stk",
      JSON.stringify({phone,amount}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredential : true
      })
      console.log(response?.message)
      toast.success("Request Sent!")
    } catch (error) {
      console.log(error)
      console.log(error?.response)
      toast.error("Donation failed")
    }
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-8">Make a donation</h1><br />
        <div className="flex flex-wrap justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="content">
              <span className="prefix">+254</span>
              <input
                type="tel"
                name="input"
                placeholder="000 000 0000"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="p-2">
              <input
                type="number"
                required
                placeholder="amount"
                className="py-1.5 px-2 w-full border border-slate-300 focus:outline-none focus:border-sky-500 rounded-lg  focus:ring-1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="p-4 text-center">
              <button className="bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-500">Donate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Donate
