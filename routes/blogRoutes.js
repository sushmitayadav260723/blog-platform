app.get("/blogs", (req, res) => {
  res.json([
    {
      _id: 1,
      title: "First Blog",
      content: "This is my first blog post",
    },
    {
      _id: 2,
      title: "Second Blog",
      content: "This is my second blog post",
    },
  ]);
});
