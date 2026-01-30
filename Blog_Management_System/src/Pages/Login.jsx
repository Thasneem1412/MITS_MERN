import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, setCurrentUser } from "../Utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = loginUser(email, password);

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    setCurrentUser(user);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
