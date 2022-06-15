import React from "react";

const Card = (props) => {
  return (
    <div className="h-48 shadow-md rounded-sm py-2 px-2 border-red-900">
      <div className="w-full flex justify-center">
        <img className="w rounded" src={props.img} alt="product" />
      </div>
      <div className="mt-2">
        <h2 className="font-semibold text-sm">{props.nama}</h2>
        <p className="text-xs text-gray-400 font-normal">{props.kategori}</p>
        <h2 className="font-semibold">Rp {props.harga}</h2>
      </div>
    </div>
  );
};

export default Card;
