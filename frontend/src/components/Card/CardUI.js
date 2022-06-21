import React from "react";
import img1 from "../../images/javascript.png";
import "./card.css";

export default function CardUI() {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img1} className="card-img-top" alt="Card Image" />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Porto Timoni Double Beach</h5>
        <p className="card-text mb-4">
          Near Afionas village, on the west coast of Corfu island. The two
          beaches form two unique bays. The turquoise color of the sea contrasts
          to the high green hills surrounding it.
        </p>
        <a href="#" className="btn btn-primary mt-auto align-self-start">
          Liat selengkapnya
        </a>
      </div>
    </div>
  );
}
