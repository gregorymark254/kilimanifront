import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentToPost, getPosts, likePost } from '../redux/post/postSlice';

const Public = () => {
  const dispatch = useDispatch();
  const publicPosts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleCommentClick = (postId) => {
    // Handle comment button click, e.g., navigate to the comment page for the post
    console.log(`Comment clicked for post ${postId}`);
  };

  const handleAddComment = async (postId, commentText) => {
    try {
      await dispatch(addCommentToPost({ postId, commentText }));
      // Clear the comment input field or handle success as needed
    } catch (error) {
      // Handle any errors if necessary
      console.error('Error adding comment:', error);
    }
  };

  const handleLikeClick = async (postId) => {
    try {
      // Dispatch the likePost action with the postId
      await dispatch(likePost(postId));
    } catch (error) {
      // Handle any errors if necessary
      console.error('Error liking the post:', error);
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
                            onClick={() => handleCommentClick(post.id)}
                            className="bg-blue-500 p-1 text-md text-white"
                          >
                            Comment
                          </button>
                          
                          <button
                            onClick={() => handleLikeClick(post.id)}
                            className="bg-red-500 p-1 text-md text-white"
                          >
                            Like
                          </button>
                        </div>
                        <br />
                        <hr />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
