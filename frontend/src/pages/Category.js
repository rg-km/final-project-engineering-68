import React from "react";
import "./Category.css";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

// export default function Category() {
//   const [card, setCard] = React.useState([]);
//   const getCard = async () => {
//     const res = await axios.get("http://localhost:8082/api/kategori");
//     console.log(res);
//     setCard(res.data.data);
//   };
//   React.useEffect(() => {
//     getCard();
//   }, []);

//   return (
//     <div>
//       <div className="container px-4 py-5" id="featured-3">
//         <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
//           {card.map((item, index) => (
//             <div className="feature col" key={index}>
//               <div className="card-box py-4 px-4" href="#">
//                 <div className="feature-icon bg-primary bg-gradient">
//                   <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
//                 </div>
//                 <h4>{item.nama_kategori}</h4>
//                 <p>Testing</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

let listCategory = [
  {
    icon: faHtml5,
    title: "HTML",
    description: `Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP,
    MySQL, Codeigniter, React dan masih banyak lagi`,
  },
  {
    icon: faCss3Alt,
    title: "CSS",
    description: `Baca tutorial dasar-dasar pemograman menggunakan c, c++, c#,
    Java, Javascript dan masih banyak lagi`,
  },
  {
    icon: faJs,
    title: "JavaScript",
    description: `Baca tutorial dalam kategori lainnya seperti Mobile programming,
    Game Programming, IoT, dan masih banyak lagi`,
  },
];

export default function Category() {
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {listCategory.map((item) => {
            return (
              <Link to="/category/detail-kategori">
                <div className="feature col">
                  <div className="card-box py-4 px-4" href="#">
                    <div className="feature-icon bg-primary bg-gradient">
                      <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
