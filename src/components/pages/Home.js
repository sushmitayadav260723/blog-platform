import React, { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from backend
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Posts</h2>

      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;