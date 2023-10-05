import React,{ useState,useEffect }  from 'react'
import { toast } from 'react-toastify';
import axios from './api/api'
import { useNavigate, useParams } from "react-router-dom";

const Vote = () => {

  
  const [radio,setRadio] = useState('')
  const [votequestion, setQuestion] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getVoteById = async () => {
    const response = await axios.get(`/api/v3/all/${id}`);
    setQuestion(response.data.votequestion);
    setText(response.data.text);
  }
  useEffect(() => {
    getVoteById();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(URL,
      JSON.stringify({ radio }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      navigate('/polls')
      toast.success("Vote succesful");
    } catch (error) {
      toast.error("failed");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mt-5">Vote</h1><br />
        <div>
          <form onSubmit={handleSubmit}  className="p-4">    
            <div>
              <div>
                <p>{votequestion}</p>
                <p>{text}</p>
              </div>
              <input type="radio" id="age1" name="age" value="Yes" checked={radio === "Yes"} onChange={(e) => setRadio(e.target.value)}/>
              <label htmlFor="age1">Yes</label><br/>
              <input type="radio" id="age2" name="age" value="No" checked={radio === "No"} onChange={(e) => setRadio(e.target.value)}/>
              <label htmlFor="age2">No</label><br/>  
            </div>
            <br />
            <button className="bg-blue-600 text-white px-2 py-1">Submit</button>
          </form>  
        </div>
      </div>
    </div>
  )
}

export default Vote
