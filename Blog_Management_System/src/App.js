import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";
import EditBlog from "./Pages/EditBlog";
import ViewBlog from "./Pages/ViewBlog";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </Router>
    
  );
}

export default App;
