import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const ButtonAdd = () => {
  return (
    <div className="flex flex-auto justify-center align-bottom -mt-28 z-20">
      <Link
        to="/info-product"
        className="shadow-lg toggle rounded-lg flex p-2.5 text-white hover:text-gray-700 bg-purple-700 hover:bg-purple-200"
      >
        <AiOutlinePlus className=" h-4 w-4 fill-current" />
        <span className="iconify mt-1 mr-1" data-icon="carbon:search"></span>Add
      </Link>
    </div>
  );
};

export default ButtonAdd;
