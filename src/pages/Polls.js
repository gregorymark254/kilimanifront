import React,{ useState,useEffect }  from 'react'
import axios from './api/api'
import { Link } from 'react-router-dom'

const Polls = () => {

  const [vote, setVote] = useState([]);
  // getting votes data
  const getVote = async () => {
    const response = await axios.get("/api/v3/all");
    setVote(response.data);
  };

  useEffect(() => {
    getVote();
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h3><b>Open For Voting</b></h3>
        <h4><i><u>Contibute to this polls</u></i></h4>
        {
          vote.map((votes,index) => (
            <div key={votes._id} className="p-4 space-y-1">
              <h4>{votes.votequestion}</h4>
              <h5>{votes.text}</h5>
              <br />
              <Link to={`/makevote/${votes._id}`} className="bg-teal-500 p-2 text-md text-white">Make Vote</Link>
              <br />
              <br />
              <hr />
            </div>
          ))
        } 
      </div>
    </div>
  )
}

export default Polls
