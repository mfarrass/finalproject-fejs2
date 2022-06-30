import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to="/buyer-product">
      <div className="h-50 shadow-md rounded-sm py-2 px-2 border-red-900">
        <div className="w-full flex justify-center">
          <img
            className="w rounded hover:scale-90 ease-in duration-100 hover:opacity-50"
            src={props.img}
            alt="product"
          />
        </div>
        <div className="mt-2">
          <h2 className="font-semibold text-sm">{props.nama}</h2>
          <p className="text-xs text-gray-400 font-normal">{props.kategori}</p>
          <h2 className="font-semibold">Rp {props.harga}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
