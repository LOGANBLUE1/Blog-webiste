// src/components/CommentForm.js
import React, { useState } from 'react';
import { apiConnector } from '../apiConnector';
import { useParams } from 'react-router-dom';

const CommentForm = () => {
  const { id } = useParams();
  const [user, setUser] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiConnector('POST', 'http://localhost:4000/api/v1/comments/create', { post: id, user, body });
      console.log('Comment added:', data);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea
        placeholder="Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
