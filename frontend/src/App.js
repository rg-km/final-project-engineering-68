import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Axios from "axios";
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
import React, { useState, useEffect } from "react";
import Blogs from "./components/Blogs/Blogs";

function App() {

  const [datak, setDatak] = useState([]);
  const [datak1, setDatak1] = useState([]);
  const [datak2, setDatak2] = useState([]);
  const [datak3, setDatak3] = useState([]);

  const getData = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:8082/api/konten?id_kategori=500001"
      );
      setDatak(res.data);
    } catch (error) {
      alert(error.message);
    }
  };
  const getData1 = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:8082/api/konten?id_kategori=500002"
      );
      setDatak1(res.data);
    } catch (error) {
      alert(error.message);
    }
  };
  const getData2 = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:8082/api/konten?id_kategori=500003"
      );
      setDatak2(res.data);
    } catch (error) {
      alert(error.message);
    }
  };
  const getData3 = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:8082/api/konten?id_kategori=500004"
      );
      setDatak3(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
    getData1();
    getData2();
    getData3();
  });
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
        {
          datak.map((pr) => 
          (
            <Route exact path={`category/javascript/${pr.path}`} element={<Blogs tgl={pr.tanggal_post} judul={pr.judul_konten} isi={pr.isi_konten}/>} />
        ))
        }
        {
          datak1.map((pr) => 
          (
            <Route exact path={`category/Go/${pr.path}`} element={<Blogs tgl={pr.tanggal_post} judul={pr.judul_konten} isi={pr.isi_konten}/>}/>
        ))
        }
        {
          datak2.map((pr) => 
          (
            <Route exact path={`category/CSS/${pr.path}`} element={<Blogs tgl={pr.tanggal_post} judul={pr.judul_konten} isi={pr.isi_konten}/>} />
        ))
        }
        {
          datak3.map((pr) => 
          (
            <Route exact path={`category/Java/${pr.path}`} element={<Blogs tgl={pr.tanggal_post} judul={pr.judul_konten} isi={pr.isi_konten}/>} />
        ))
        }
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;