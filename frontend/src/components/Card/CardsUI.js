import React from "react";
import img1 from "../../images/gson.png";

export default function CardsUI() {
  return (
    <div className="card h-100">
      <a href="#">
        <div className="card-img">
          <img src={img1} className="card-img-top" alt="Card Image" />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Dōtonbori Canal</h5>
          <p className="card-text mb-4">
            Is a manmade waterway dug in the early 1600's and now displays many
            landmark commercial locals and vivid neon signs.and now displays
            many landmark commercial locals and vivid neon signs
          </p>
          <a href="#" className="btn btn-primary mt-auto align-self-start">
            Liat selengkapnya
          </a>
        </div>
      </a>
    </div>
  );
}
