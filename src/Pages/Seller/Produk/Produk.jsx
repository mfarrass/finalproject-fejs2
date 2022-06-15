import React from "react";
import Card from "../../../Components/Card/Card";

const Produk = () => {
  return (
    <div className="md:flex-1 grid grid-cols-3 gap-6">
      <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-slate-300 p-5 shadow-sm">
        <div className="w-full">
          <div className="flex justify-center text-3xl font-bold">+</div>
          <div className="flex justify-center">Tambah Produk</div>
        </div>
      </div>
      <Card
        nama="Sepatu Converse"
        kategori="Sepatu"
        harga="250.000"
        img="https://media.suara.com/pictures/970x544/2021/03/12/43016-sepatu-sneakers-dok-instagramaxwearapparel.jpg"
      />
    </div>
  );
};

export default Produk;
