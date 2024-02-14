import React, { useState } from 'react';
import axios from 'axios';
import './UpdatePost.css'; // Import CSS file for UpdatePost component

const UpdatePost = () => {
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      // Make a PUT request to update the post with the given postId
      await axios.put(`http://localhost:9000/posts/${postId}`, {
        title,
        image,
        description,
      });
      alert('Post updated successfully!');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="update-post-container">
      <h2>Update Post</h2>
      <form onSubmit={handleUpdate} className="update-post-form">
        <div className="form-group">
          <label htmlFor="postId">Post ID:</label>
          <input
            type="text"
            id="postId"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          ></textarea>
        </div>
        <button type="submit" className="update-button">Update</button>
      </form>
    </div>
  );
};

export default UpdatePost;
