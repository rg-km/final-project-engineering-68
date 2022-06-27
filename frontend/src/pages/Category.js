import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Category.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";

// // export default function Category() {
// //   const [card, setCard] = React.useState([]);
// //   const getCard = async () => {
// //     const res = await axios.get("http://localhost:8082/api/kategori");
// //     console.log(res);
// //     setCard(res.data.data);
// //   };
// //   React.useEffect(() => {
// //     getCard();
// //   }, []);

// //   return (
// //     <div>
// //       <div className="container px-4 py-5" id="featured-3">
// //         <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
// //           {card.map((item, index) => (
// //             <div className="feature col" key={index}>
// //               <div className="card-box py-4 px-4" href="#">
// //                 <div className="feature-icon bg-primary bg-gradient">
// //                   <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
// //                 </div>
// //                 <h4>{item.nama_kategori}</h4>
// //                 <p>Testing</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

export default function Category() {
  const [datak, setDatak] = useState([]);

import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Category = () => {
  useEffect(() => {
    getCategory();
  }, []);

  const [categorys, setCategory] = useState([]);
  const [loading, setLoading] = useState([false]);

  const getCategory = async () => {
    try {
      const res = await axios.get("http://localhost:8082/api/kategori");
      setCategory(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
        {datak.map((item) => (
              <Link to= {`${item.nama_kategori}`}>
                <div className="feature col d-flex h-100">
                  <div className="card-box py-4 px-4" href="#">
                    <div className="feature-icon bg-primary bg-gradient">
                      <FontAwesomeIcon></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>

  );
};

export default Category;
