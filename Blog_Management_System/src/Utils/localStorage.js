export const getBlogs = () => {
  const blogs = localStorage.getItem("blogs");
  return blogs ? JSON.parse(blogs) : [];
};

export const saveBlog = (blog) => {
  const blogs = getBlogs();
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

export const deleteBlog = (id) => {
  const blogs = getBlogs().filter((blog) => blog.id !== id);
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

export const updateBlog = (updatedBlog) => {
  const blogs = getBlogs().map((blog) =>
    blog.id === updatedBlog.id ? updatedBlog : blog
  );
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

export const getBlogById = (id) => {
  return getBlogs().find((blog) => blog.id === Number(id));
};
