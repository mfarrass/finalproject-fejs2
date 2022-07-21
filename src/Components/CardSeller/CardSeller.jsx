import React from "react";
import { Link } from "react-router-dom";

const CardSeller = (props) => {
  return (
    <Link to={`/preview/${props.id}`}>
      <div className="h-70 max-h-70 shadow-md rounded-sm py-2 px-2 border-red-900">
        <div className="w-full flex justify-center">
          <img
            className="aspect-video rounded hover:scale-90 ease-in duration-100 hover:opacity"
            src={props.img}
            alt="product"
          />
        </div>
        <div className="mt-2">
          <h2 className="font-semibold text-sm">{props.nama}</h2>
          <p className="text-xs text-gray-400 font-normal">{props.kategori}</p>
          {props.harga && (
            <h2 className="font-semibold">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(props.harga)}
            </h2>
          )}
          {props.soldAt && (
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
              SOLD
            </span>
          )}
          {props.publish && (
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
              PUBLISHED
            </span>
          )}
          {!props.publish && (
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200 uppercase last:mr-0 mr-1">
              Unpublished
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CardSeller;
