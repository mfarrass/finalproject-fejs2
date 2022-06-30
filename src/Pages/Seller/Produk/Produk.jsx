import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../Components/Card/Card";

const Produk = () => {
  return (
    <div className="md:flex-1 grid grid-cols-2 gap-6 px-2 md:grid-cols-3 md:px-0">
      <Link to="/info-product">
        <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-slate-300 p-5 shadow-sm">
          <div className="w-full">
            <div className="flex justify-center text-3xl font-bold">+</div>
            <div className="flex justify-center">Tambah Produk</div>
          </div>
        </div>
      </Link>
      <Link to="#">
        <Card
          nama="Sepatu Converse"
          kategori="Sepatu"
          harga="250.000"
          img="https://media.suara.com/pictures/970x544/2021/03/12/43016-sepatu-sneakers-dok-instagramaxwearapparel.jpg"
        />
      </Link>
      <Link to="#">
        <Card
          nama="Sepatu Converse"
          kategori="Sepatu"
          harga="250.000"
          img="https://media.suara.com/pictures/970x544/2021/03/12/43016-sepatu-sneakers-dok-instagramaxwearapparel.jpg"
        />
      </Link>
      <Link to="#">
        <Card
          nama="Sepatu Converse"
          kategori="Sepatu"
          harga="250.000"
          img="https://media.suara.com/pictures/970x544/2021/03/12/43016-sepatu-sneakers-dok-instagramaxwearapparel.jpg"
        />
      </Link>
    </div>
  );
};

export default Produk;
