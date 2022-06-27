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
import Card from "./components/Card/Card";
import CardCSS from "./components/Card/CardCSS";
import CardGo from "./components/Card/CardGo";
import CardJava from "./components/Card/CardJava";
import CardJavascript from "./components/Card/CardJavascript";

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:detail-post" element={<Detail />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/category/Css" element={<CardCSS />} />
        <Route exact path="/category/Go" element={<CardGo />} />
        <Route exact path="/category/Java" element={<CardJava />} />
        <Route exact path="/category/Javascript" element={<CardJavascript />} />
        {/* <Route exact path="/categor y/:detail-category" element={</>} /> */}
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route path="*" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
