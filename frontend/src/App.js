import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Register from "./components/register/register";

import Home from "./pages/Home";
import NavbarComp from "./components/navbar/NavbarComp";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import Detail from "./components/Blog/Blog";
import Blog from "./components/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:detail-post" element={<Blogs />} />
        <Route exact path="/category" element={<Category />} />
        {/* <Route exact path="/category/:detail-category" element={</>} /> */}
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route path="*" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
