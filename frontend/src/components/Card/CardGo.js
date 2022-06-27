import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardsUI from "./CardsUI";
import axios from "axios";

export default function CardGo() {
  useEffect(() => {
    getCards();
  }, []);

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState([false]);

  const getCards = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8082/api/konten?id_kategori=500002"
      );
      setCards(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div class="album py-5 ">
        <h4 class="mb-5 text-center">Golang</h4>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {loading &&
              cards.map((card) => (
                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <CardsUI judul={card.judul_konten} gambar={card.src} ulnya={`${card.path}`}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
