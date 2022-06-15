import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../Components/Card/Card";

const Diminati = () => {
  return (
    <div className="md:flex-1 grid grid-cols-2 gap-6 px-2 md:grid-cols-3 md:px-0">
      <Link to="#">
        <Card
          nama="Sepatu Lokal"
          kategori="Sepatu"
          harga="80.000"
          img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
        />
      </Link>
      <Link to="#">
        <Card
          nama="Sepatu Lokal"
          kategori="Sepatu"
          harga="80.000"
          img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
        />
      </Link>
    </div>
  );
};

export default Diminati;
