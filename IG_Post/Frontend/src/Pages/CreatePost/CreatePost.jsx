import React from "react";
import axios from 'axios';
import "./CreatePost.css";

const CreatePost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post", formData)
    .then((response) => {
      alert("Post created successfully!");
      console.log(response);
      
      e.target.reset();
    }) .catch((error) => {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    });
  }
  return (
    <div className="post-wrapper">
      <form className="post-card" onSubmit={handleSubmit}>
        <h2>Create Post</h2>

        <label className="upload-box">
          <input type="file" name="image" accept="image/*" required /> Image 
        </label>

        <textarea
          name="caption"
          placeholder="Write a caption..."
          rows="4"
          required
        />

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
