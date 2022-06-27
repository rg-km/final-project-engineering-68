import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
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

  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
          {loading &&
            categorys.map((category) => {
              const url = `/category/${category.nama_kategori}`;
              return (
                <Link to={url}>
                  <div className="feature col d-flex h-100">
                    <div className="card-box py-4 px-4" href="#">
                      <div className="feature-icon bg-primary bg-gradient">
                        <FontAwesomeIcon></FontAwesomeIcon>
                      </div>
                      <h4>{category.nama_kategori}</h4>
                      <p>{category.keterangan_kategori}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>

  );
};

export default Category;
