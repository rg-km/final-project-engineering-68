import React from "react";
import img1 from "../../images/javascript.png";

export default function CardsUI() {
  return (
    <div class="card">
      <img
        src="https://i.postimg.cc/28PqLLQC/dotonburi-canal-osaka-japan-700.jpg"
        class="card-img-top"
        alt="Card Image"
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Dōtonbori Canal</h5>
        <p class="card-text mb-4">
          Is a manmade waterway dug in the early 1600's and now displays many
          landmark commercial locals and vivid neon signs.
        </p>
        <a href="#" class="btn btn-primary mt-auto align-self-start">
          Book now
        </a>
      </div>
    </div>
  );
}
