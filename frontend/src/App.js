import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Register from "./components/register/register";

import Home from "./pages/Home";
import NavbarComp from "./components/navbar/NavbarComp";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <Blogs />
      
    </div>
  );
}

export default App;
