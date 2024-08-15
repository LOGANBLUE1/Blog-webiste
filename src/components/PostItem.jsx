// src/components/PostItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div>
        <Link to={`/post/${post._id}/comment`}>Add Comment</Link>
        <Link to={`/post/${post._id}/like`}>Like/Unlike</Link>
      </div>
    </div>
  );
};

export default PostItem;
