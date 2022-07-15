import React from "react";

const CardTerjual = (props) => {
  return (
    <div className="h-50 shadow-md rounded-sm py-2 px-2 border-red-900">
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
      </div>
    </div>
  );
};

export default CardTerjual;
