import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/gson.png";
import "./card.css";

export default function CardsUI({ image, title, description }) {
  return (
    <>
      {Array(6)
        .fill(1)
        .map((_, i) => {
          return (
            <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100">
                <a href="#">
                  <div className="card-img">
                    <img src={img1} className="card-img-top" alt="Card Image" />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Dōtonbori Canal</h5>
                    <p className="card-text mb-4">
                      Is a manmade waterway dug in the early 1600's and now
                      displays many landmark commercial locals and vivid neon
                      signs.and now displays many landmark commercial locals and
                      vivid neon signs
                    </p>
                    <Link
                      to="/post/:detail-post"
                      className="btn btn-primary mt-auto align-self-start"
                    >
                      Lihat selengkapnya
                    </Link>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
}
