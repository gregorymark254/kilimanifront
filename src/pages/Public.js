import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentToPost, getPosts, likePost } from '../redux/post/postSlice';

const Public = () => {
  const dispatch = useDispatch();
  const publicPosts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [commentText, setCommentText] = useState('');
  const [postIdToComment, setPostIdToComment] = useState(null);
  const [commentsForPost, setCommentsForPost] = useState([]);

  const handleCommentClick = (postId) => {
    setPostIdToComment(postId);
    // Retrieve comments from local storage for the selected post
    const storedComments = localStorage.getItem(`commentsForPost_${postId}`);
    if (storedComments) {
      setCommentsForPost(JSON.parse(storedComments));
    } else {
      setCommentsForPost([]);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      await dispatch(addCommentToPost({ postId: postIdToComment, commentText }));
      setCommentText('');

      // Update comments in local storage for the selected post
      const updatedComments = [...commentsForPost, commentText];
      localStorage.setItem(`commentsForPost_${postIdToComment}`, JSON.stringify(updatedComments));

      setCommentsForPost(updatedComments);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleLikeClick = async (postId) => {
    try {
      await dispatch(likePost(postId));
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  // Function to save content to local storage
  const saveToLocalStorage = (content) => {
    try {
      localStorage.setItem('savedContent', content);
      alert('Content saved to db!');
    } catch (error) {
      console.error('Error saving to local storage:', error);
      alert('Error saving to db!');
    }
  };

  const toggleComments = (postId) => {
    if (postIdToComment === postId) {
      setPostIdToComment(null);
      setCommentsForPost([]);
    } else {
      setPostIdToComment(postId);
      // Retrieve comments from local storage for the selected post
      const storedComments = localStorage.getItem(`commentsForPost_${postId}`);
      if (storedComments) {
        setCommentsForPost(JSON.parse(storedComments));
      } else {
        setCommentsForPost([]);
      }
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-10 mt-8">Announcement</h1>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="bg-white rounded-lg w-full md:w-1/2 lg:w-1/3">
            <div className="p-4">
              <h3>
                <b>Open For Discussions</b>
              </h3>
              <h4>
                <u>
                  <i>Admin Announcement</i>
                </u>
              </h4>
              <div>
                {isLoading ? (
                  <div>
                    <p>Loading...</p>
                  </div>
                ) : (
                  <div>
                    {publicPosts.map((post) => (
                      <div key={post.id} className="p-4 space-y-1">
                        <h4>
                          <b>{post.title}</b>
                        </h4>
                        <h5>{post.text}</h5>
                        <span>{post.created_at}</span>
                        <div className="flex flex-wrap items-center space-x-2">
                          <button
                            onClick={() => toggleComments(post.id)}
                            className="bg-blue-500 p-1 text-md text-white"
                          >
                            {postIdToComment === post.id ? 'Hide Comments' : 'Show Comments'}
                          </button>
                          <button
                            onClick={() => handleLikeClick(post.id)}
                            className="bg-red-500 p-1 text-md text-white"
                          >
                            Like
                          </button>
                        </div>
                        {postIdToComment === post.id && (
                          <div>
                            <textarea
                              rows="4"
                              cols="15"
                              value={commentText}
                              onChange={(e) => setCommentText(e.target.value)}
                              placeholder="Write a comment..."
                              className="py-3 px-2 w-full border border-slate-300 placeholder-slate-300 focus:outline-none focus:border-sky-500 rounded-lg  focus:ring-1"
                            />
                            <button
                              onClick={handleCommentSubmit}
                              className="bg-blue-500 p-1 text-md text-white"
                            >
                              Submit Comment
                            </button>
                          </div>
                        )}
                        <br />
                        <hr />
                        {/* Display comments for the selected post */}
                        {postIdToComment === post.id && commentsForPost.length > 0 && (
                          <div>
                            <h4>Comments:</h4>
                            <ul>
                              {commentsForPost.map((comment, index) => (
                                <li key={index}>{comment}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {postIdToComment === post.id && commentsForPost.length === 0 && (
                          <p>No comments for this post.</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Add a "Send" button to save content to local storage */}
              <button
                onClick={() => saveToLocalStorage(commentText)}
                className="bg-green-500 p-1 text-md text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
