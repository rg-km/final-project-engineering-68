import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/gson.png";
import "./card.css";

export default function CardI() {
  const kata = `Is a manmade waterway dug in the early 1600's and now
  displays many landmark commercial locals and vivid neon
  signs.and now displays many `;
  return (
    <>
      <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div className="card h-100">
          <a href="#">
            <div className="card-img">
              <img src={img1} className="card-img-top" alt="Card Image" />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Dōtonbori Canal</h5>
              <p className="card-text mb-4">{kata}</p>
              <Link
                to="/post/:detail-post"
                className="btn  btn-lg btn-primary btn-block align-self-start"
              >
                Lihat selengkapnya
              </Link>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
