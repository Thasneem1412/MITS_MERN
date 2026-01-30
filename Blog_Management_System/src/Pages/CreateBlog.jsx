import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveBlog } from "../Utils/localStorage";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      content,
    };

    saveBlog(newBlog);
    navigate("/"); // go to Home after saving
  };

  return (
    <div>
      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
