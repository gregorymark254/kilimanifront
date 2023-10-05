import React, { useState, useEffect } from 'react'
import axios from "./api/api";

const Events = () => {

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //getting events data
  const getEvents = async () => {
    const response = await axios.get("/api/v6/all");
    setEvents(response.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  //seting loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })
  return (
    <div className='bg-slate-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <h1 class="text-center text-3xl mt-5">Events</h1><br />
        <div className="space-y-5 lg:mx-44 lg:w-2/3 mb-10">
          <span className="text-xl font-light">Upcoming Events</span>
            {isLoading ? (
              <div>
                <p>loading...</p>
              </div>
            ) : (
              <div>
                {
                  events.map((event, index) => (
                    <div key={event._id} className="flex flex-wrap gap-6 bg-white rounded-lg p-4 mb-5">
                      <div>
                        <img
                          width={400}
                          height={300}
                          src={event.image}
                          alt="eventimage"
                        />
                      </div>
                      <div>
                        <h6 className="text-blue-600">{event.date}</h6>
                        <h3>{event.title}</h3>
                        <p>{event.location}</p>
                        <br />
                        <details className="hover:cursor-pointer">
                          <summary>More Details</summary>
                          <p>{event.about}</p>
                        </details>
                      </div>
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

export default Events
