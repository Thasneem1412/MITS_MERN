import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getCurrentUser } from "./Utils/auth";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "./App.css";


function App() {
  const user = getCurrentUser();

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/create"
          element={user ? <CreateBlog /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
