import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getBlogById, updateBlog } from "../Utils/localStorage";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = getBlogById(id);

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBlog({
      id: blog.id,
      title,
      content,
    });

    navigate("/");
  };

  return (
    <div className="container">
      <h1>Edit Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
