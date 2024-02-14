import React, { useState } from 'react';
import axios from 'axios';
import './DeletePost.css'; // Import CSS file for DeletePost component

const DeletePost = () => {
  const [postId, setPostId] = useState('');

  const handleDelete = async () => {
    try {
      // Make a DELETE request to delete the post with the given postId
      await axios.delete(`http://localhost:9000/posts/${postId}`);
      alert('Post deleted successfully!');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="delete-post-container">
      <h2>Delete Post</h2>
      <form onSubmit={handleDelete} className="delete-post-form">
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
        <button type="submit" className="delete-button">Delete</button>
      </form>
    </div>
  );
};

export default DeletePost;
