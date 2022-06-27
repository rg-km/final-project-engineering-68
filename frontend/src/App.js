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
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cardcat from "./components/Card/Cardcat";
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
        <Route exact path="/category/Javascript" element={<Cardcat kategori={'500001'}/>} />
        {/* <Route exact path="category/Go" element={<Cardcat kategori={'500002'}/>} />
        <Route exact path="category/CSS" element={<Cardcat kategori={'500003'}/>} />
        <Route exact path="category/Java" element={<Cardcat kategori={'500004'}/>} /> */}
        {/* {
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
            <Route exact path={`category/CSS/${pr.path}`} element={<Cardcat kategori={'500001'}/>} />
        ))
        }
        {
          datak3.map((pr) => 
          (
            <Route exact path={`category/Java/${pr.path}`} element={<Cardcat kategori={'500001'}/>} />
        ))
        } */}
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
