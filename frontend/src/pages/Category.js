import React from "react";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

export default function Category() {
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="card-box py-4 px-4" href="#">
              <div className="feature-icon bg-primary bg-gradient">
                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
              </div>
              <h4>Basic Programming</h4>
              <p>
                Baca tutorial dasar-dasar pemograman menggunakan c, c++, c#,
                Java, Javascript dan masih banyak lagi
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="card-box py-4 px-4">
              <div className="feature-icon bg-primary bg-gradient">
                <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
              </div>
              <h4>Web Programming</h4>
              <p>
                Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP,
                MySQL, Codeigniter, React dan masih banyak lagi
              </p>
            </div>
          </div>
          <div className="feature col">
            <div className="card-box py-4 px-4">
              <div className="feature-icon bg-primary bg-gradient">
                <FontAwesomeIcon icon={faWindowRestore}></FontAwesomeIcon>
              </div>
              <h4>Lainnya</h4>
              <p>
                Baca tutorial dalam kategori lainnya seperti Mobile programming,
                Game Programming, IoT, dan masih banyak lagi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
