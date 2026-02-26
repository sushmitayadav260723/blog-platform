function BlogList({ posts, deletePost }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;