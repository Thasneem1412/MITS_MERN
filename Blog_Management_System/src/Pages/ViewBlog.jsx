import { useParams } from "react-router-dom";
import { getBlogById } from "../Utils/localStorage";

const ViewBlog = () => {
  const { id } = useParams();
  const blog = getBlogById(id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default ViewBlog;
