// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import { apiConnector } from '../apiConnector';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await apiConnector('GET', 'http://localhost:4000/api/v1/posts');
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
