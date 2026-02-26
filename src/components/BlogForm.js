import React, { useState } from "react";

function BlogForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Blog</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <br /><br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <br /><br />

      <button type="submit">Add Post</button>
    </form>
  );
}

export default BlogForm;

