import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs, deleteBlog } from "../Utils/localStorage";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    setBlogs(getBlogs());
  };

  return (
    <div className="container">
      <h1>All Blogs</h1>

      {blogs.length === 0 && <p>No blogs yet</p>}

      {blogs.map((blog) => (
        <div className="card" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>

          <Link to={`/blog/${blog.id}`}>👁 View</Link>{" "}
          <Link to={`/edit/${blog.id}`}>✏️ Edit</Link>{" "}
          <button onClick={() => handleDelete(blog.id)}>🗑 Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
