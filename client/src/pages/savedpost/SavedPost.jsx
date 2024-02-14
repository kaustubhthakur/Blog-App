import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SavedPosts.css'; // Import CSS file for SavedPosts component
import { useGetUserID } from '../../hooks/useGetUserID';
const SavedPost = () => {
  const [savedPosts, setSavedPosts] = useState([]);
  const userID = useGetUserID();
  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
        // Make a GET request to fetch saved posts from the backend
        const response = await axios.get(`http://localhost:9000/users/${userID}`);
        setSavedPosts(response.data);
      } catch (error) {
        console.error('Error fetching saved posts:', error);
      }
    };

    fetchSavedPosts();
  }, []);

  return (
    <div className="saved-posts-container">
      <h2>Saved Posts</h2>
      <div className="saved-posts-wrapper">
        {savedPosts.map((post) => (
          <div className="saved-post" key={post._id}>
            <h3 className="saved-post-title">{post.title}</h3>
            <img className="saved-post-image" src={post.image} alt={post.title} />
            <p className="saved-post-description">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPost;
