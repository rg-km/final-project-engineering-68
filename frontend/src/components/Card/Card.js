import React from "react";
import CardUI from "./CardUI";
import CardsUI from "./CardsUI";

export default function Card() {
  return (
    <div>
      <div class="album py-5 ">
        <h4 class="mb-5 text-center">Apa yang baru dari di Nakama?</h4>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <CardUI />
            </div>
            <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <CardUI />
            </div>
            <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <CardUI />
            </div>

            <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <CardUI />
            </div>
            <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <CardUI />
            </div>
            <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <CardsUI />
            </div>

            <div class="col">
              <CardUI />
            </div>
            <div class="col">
              <CardUI />
            </div>
            <div class="col">
              <CardUI />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
