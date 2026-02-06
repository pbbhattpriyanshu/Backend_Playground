import React from "react";

const CreatePost = () => {
  return (
    <div className="post-wrapper">
      <form className="post-card">
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
