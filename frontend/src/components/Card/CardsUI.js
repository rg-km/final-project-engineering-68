import React from "react";
import img1 from "../../images/gson.png";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";


export default function CardsUI({judul, gambar,ulnya}) {
  return (
    <div className="card h-100">
      <a href="#">
        <div className="card-img">
          <img src={gambar} className="card-img-top" alt="Card Image" />
    
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{judul}</h5>
          <p className="card-text mb-4">
            Is a manmade waterway dug in the early 1600's and now displays many
            landmark commercial locals and vivid neon signs.and now displays
            many landmark commercial locals and vivid neon signs
          </p>
          <Link to={ulnya} className="btn btn-primary mt-auto align-self-start">
            Liat selengkapnya
          </Link>
        </div>
      </a>
    </div>
  );
}
