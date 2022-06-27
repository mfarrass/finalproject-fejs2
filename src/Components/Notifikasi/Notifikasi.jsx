import React from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function Notifikasi() {
  return (
    <div className="relative flex justify-center top-10 lg:top-5">
      <div className="w-[auto] lg:w-[auto] h-auto bg-green-500 text-white rounded-xl shadow-md">
        <div className="flex">
          <p className="ml-5 py-3 text-sm">Masukkan Teks Notifikasi Disini</p>
          <button className="ml-10 mr-3 text-white">
            <AiOutlineClose color="white" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
