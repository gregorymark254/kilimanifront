// PostDetails.js
import React from 'react';

const PostDetails = ({ post, comments }) => {
  // Render post details and comments here
  return (
    <div>
      {/* Display post details */}
      <h1>{post.title}</h1>
      <p>{post.message}</p>

      {/* Display comments */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
