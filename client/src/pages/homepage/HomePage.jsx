import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css'; // Import CSS file for HomePage component
import Navbar from '../../components/navbar/Navbar';
const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:9000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
        <Navbar/>

    <div className='home-container'>
      <div className='post-wrapper'>
        {posts.map((post) => (
          <div className="post-container" key={post._id}>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-id">ID: {post._id}</p>
            <img className="post-image" src={post.image} alt={post.title} />
            <p className="post-description">{post.description}</p>

          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default HomePage;
