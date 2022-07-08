import React from "react";
import Card from "../../Components/Card/Card";


export default function Wishlist(props) {
  return (
    <div className="container mt-20 max-w-screen mx-auto">
      {/**Banner Nama Penjual */}
      {/* Card Profile Penjual */}
      <div className="flex p-6  shadow-md justify-between rounded-3xl">
        <div className="flex h-12">
          <img src="./fotopenjual.png" alt="profile" />
          <div className="text-profil ml-5">
            <h1 className="text-sm md:text-xl">Nama Penjual</h1>
            <p className="text-xs text-gray-300">Kota</p>
          </div>
        </div>
      </div>
      {/* Card Profile Penjual end */}
      <div className="mx-auto text-center my-8">
        <p className="text-xl md:text-3xl font-bold mx-5">DAFTAR WISHLIST</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-3 md:mx-">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
