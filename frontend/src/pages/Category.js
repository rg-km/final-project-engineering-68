import React, {useState, useEffect } from 'react'
import Axios from 'axios'
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


export default function Category() {
  const [datak,setDatak] = useState(0)

    const getData = async () => {
        try{
            const res = await Axios.get('http://localhost:8082/api/kategori')
            setDatak(res.data)
        } catch (error){
            alert(error.message)
        }
    }

    useEffect(() => {
      getData()
  })
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
        {datak.map((item) => {
            const url = `/category/${item.nama_kategori}`
            return (
              <Link to= {url} >
                <div className="feature col d-flex h-100">
                  <div className="card-box py-4 px-4" href="#">
                    <div className="feature-icon bg-primary bg-gradient">
                      <FontAwesomeIcon></FontAwesomeIcon>
                    </div>
                    <h4>{item.nama_kategori}</h4>
                    <p>{item.keterangan_kategori}</p>
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
