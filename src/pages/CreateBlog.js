import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/post/postSlice';
import { PiUsersFourFill } from "react-icons/pi";

const CreateBlog = ({post}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ post, title, text }));
    setTitle('');
    setText('');
  };

  return (
    <div className='bg-slate-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <div className="flex justify-center mt-8">
          <h1 className="text-blue-600 text-5xl"><PiUsersFourFill/></h1>
        </div>
        <h2 className="text-center p-4 font-light">Public Participation</h2>
        <div className="flex flex-wrap items-center justify-center mb-20">
          <div className="bg-white p-4 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="p-2">
                <label htmlFor="title">Title</label><br />
                <input
                  type="text"
                  placeholder="Add title here"
                  required
                  className="py-3 px-2 w-full border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  rounded-lg  focus:ring-1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="p-2">
                <label htmlFor="body">Message</label><br />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  placeholder="Add as many details as possible to make it easier for others to reply!"
                  className="py-3 px-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  rounded-lg  focus:ring-1"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
              <div className="p-2">
                <button className="py-2 px-5 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
