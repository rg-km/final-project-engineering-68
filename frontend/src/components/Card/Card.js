import axios from "axios";
import React from "react";
import CardUI from "./CardsUI";
// import axios from "axios";

export default function Card() {
  const [card, setCard] = React.useState([]);
  const getCard = async () => {
    const res = await axios.get("http://localhost:8082/api/kategori");
    setCard(res.data.data);
  };

  // const listCard = card.map((item, index) => {
  //   return (
  //     <Card
  //       key={index}
  //       image={item.image}
  //       title={item.title}
  //       description={item.description}
  //     />
  //   );
  // });

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
            <CardUI />
          </div>
        </div>
      </div>
    </div>
  );
}
