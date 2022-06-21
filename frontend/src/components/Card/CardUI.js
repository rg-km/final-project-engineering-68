import React from "react";
import img1 from "../../images/javascript.png";

export default function CardUI() {
  return (
    <div class="card">
      <img src={img1} class="card-img-top" alt="Card Image" />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Porto Timoni Double Beach</h5>
        <p class="card-text mb-4">
          Near Afionas village, on the west coast of Corfu island. The two
          beaches form two unique bays. The turquoise color of the sea contrasts
          to the high green hills surrounding it.
        </p>
        <a href="#" class="btn btn-primary mt-auto align-self-start">
          Liat selengkapnya
        </a>
      </div>
    </div>
  );
}
