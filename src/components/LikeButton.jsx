// src/components/LikeButton.js
import React from 'react';
import { apiConnector } from '../apiConnector';
import { useParams } from 'react-router-dom';

const LikeButton = () => {
  const { id } = useParams();

  const handleLike = async () => {
    try {
      const data = await apiConnector('POST', 'http://localhost:4000/api/v1/likes/like', { post: id, user: 'User' });
      console.log('Post liked:', data);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleUnlike = async () => {
    try {
      const data = await apiConnector('POST', 'http://localhost:4000/api/v1/likes/unlike', { post: id, like: 'likeId' }); // Replace 'likeId' with actual like ID
      console.log('Post unliked:', data);
    } catch (error) {
      console.error('Error unliking post:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleUnlike}>Unlike</button>
    </div>
  );
};

export default LikeButton;
