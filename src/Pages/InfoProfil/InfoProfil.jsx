import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const InfoProfil = () => {
  return (
    <div className="container">
      InfoProfil
      <div className="container ml-[341px]">
        <button>
          <AiOutlineArrowLeft size={42} />
        </button>
      </div>
      <div className="flex justify-center">
        <button>
          <img
            src="https://i.gyazo.com/9a74bb3b374eddc5890cbe226035d818.png"
            alt="Icon Profile Picture"
          />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="container w-[568px] mt-[24px] border border-blue-400">
          <p className="mb-3">Nama*</p>
          <input
            className="w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl focus:outline-none focus:shadow-outline indent-3"
            placeholder="Nama"
          />
          <p className="mb-3">Kota*</p>
        </div>
      </div>
    </div>
  );
};

export default InfoProfil;
