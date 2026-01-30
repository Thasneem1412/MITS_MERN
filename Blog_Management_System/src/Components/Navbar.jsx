import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#333",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/create" style={{ color: "white", textDecoration: "none" }}>
        Create Blog
      </Link>
    </nav>
  );
};

export default Navbar;
