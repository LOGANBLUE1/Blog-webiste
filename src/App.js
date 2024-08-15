// src/App.js
import React from 'react';
import { BrowserRouter as Router,NavLink, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import CommentForm from './components/CommentForm';
import LikeButton from './components/LikeButton';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Blog App</h1>
        <NavLink to='/create-post'>Create Post</NavLink>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:id/comment" element={<CommentForm />} />
          <Route path="/post/:id/like" element={<LikeButton />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
