import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardsUI from "./CardsUI";

export default function CardJavascript() {
  const [datak, setDatak] = useState(0);

  const getData = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:8082/api/konten?id_kategori=500001"
      );
      setDatak(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <div class="album py-5 ">
        <h4 class="mb-5 text-center">Javascript</h4>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {datak.map((pr) => (
              <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                <CardsUI judul={pr.judul_konten} gambar={pr.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
