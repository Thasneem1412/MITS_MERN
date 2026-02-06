import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Blog App</h2>

      <div className="links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
        

        <Link to="/create">CreateBlog</Link>

      </div>
    </nav>
  );
};

export default Navbar;
