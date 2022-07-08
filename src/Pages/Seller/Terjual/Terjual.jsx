import React from "react";

import Card from "../../../Components/Card/Card";

const Terjual = () => {
  return (
    <div className="md:flex-1 grid grid-cols-2 gap-6 px-2 md:grid-cols-3 md:px-0">
      <Card
        nama="Sepatu Sneakers"
        kategori="Sepatu"
        harga="100.000"
        img="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/murah-dan-berkualitas-sepatu-pria-model-minimalis-karya-anak-ba_20210806_160940.jpg"
      />

      <Card
        nama="Sepatu Sneakers"
        kategori="Sepatu"
        harga="100.000"
        img="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/murah-dan-berkualitas-sepatu-pria-model-minimalis-karya-anak-ba_20210806_160940.jpg"
      />
    </div>
  );
};

export default Terjual;
