import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Feed.css";

const Feed = () => {
  const [ posts, setPosts ] = useState([
    {
      _id: 1,
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      caption: "Calm days, sharp thoughts ☀️",
    },
    {
      _id: 2,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      caption: "Building ideas into reality 💻",
    }
  ])

  useEffect(() => {
      axios.get("http://localhost:3000/posts")
        .then((response) => {
          console.log(response.data);
          setPosts(response.data.posts);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
  }, [])


  return (
     <div className="feed-wrapper">
      <div className="feed">
        {posts.map((post) => (
          <div className="post" key={post._id}>
            <div className="post-header">
              <div className="avatar"></div>
              <span className="username">user_{post._id}</span>
            </div>

            <img
              src={post.image}
              alt="post"
              className="post-image"
            />

            <div className="post-body">
              <p className="caption">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
