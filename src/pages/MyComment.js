// PostDetails.js
import React from 'react';

const PostDetails = ({ post, comments }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.message}</p>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
