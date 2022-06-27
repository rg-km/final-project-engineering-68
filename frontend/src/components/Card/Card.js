import React, { useState, useEffect } from "react";
import CardsUI from "./CardsUI";
import axios from "axios";

export default function Card() {
  const [datak, setDatak] = useState([]);
  console.log(datak)
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8082/api/konten?id_kategori=500001"
      );
      console.log(res.data,'ini res data')
      setDatak(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <div>
      <div class="album py-5 ">
        <h4 class="mb-5 text-center">Apa yang baru dari di Nakama?</h4>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {loading &&
              cards.map((card) => (
                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <CardsUI judul={card.judul_konten} gambar={card.src} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

