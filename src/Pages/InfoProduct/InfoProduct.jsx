import React from "react";
import NavbarBack from "../../Components/NavbarBack/NavbarBack";
import { AiOutlinePlus } from "react-icons/ai";

const InfoProduct = () => {
  return (
    <div className="container mt-5 sm:min-w-full p-3">
      <NavbarBack>Lengkapi Data Produk</NavbarBack>

      <div className="flex justify-center">
        <form action="">
          <div className="container w-[568px] mt-[24px]">
            <p className="mb-1">Nama Produk*</p>
            <input
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3"
              placeholder="Nama Produk"
            />
            <p className="mb-1">Harga Produk*</p>
            <input
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3"
              placeholder="Harga Produk"
            />
            <p className="mb-1">Kategori*</p>
            <div className="flex mb-6 max-w-[568px]">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600"
              />
              <span class="ml-1 text-gray-700">Kat 1</span>
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600 ml-2"
              />
              <span class="ml-1 text-gray-700">Kat 2</span>
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600 ml-2"
              />
              <span class="ml-1 text-gray-700">Kat 3</span>
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600 ml-2"
              />
              <span class="ml-1 text-gray-700">Kat 4</span>
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600 ml-2"
              />
              <span class="ml-1 text-gray-700">Kat 5</span>
            </div>
            <p className="mb-1">Deskripsi*</p>
            <input
              className="mb-6 w-full h-[80px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3"
              placeholder="Contoh: Jalan Ikan Hiu 33"
            />
            <p className="mb-1">Foto Produk*</p>
            <label className="w-[96px] h-[96px] flex flex-col items-center px-4 py-6 text-blue rounded-lg shadow-lg tracking-wide uppercase border-4 border-dashed cursor-pointer">
              <span className="mt-3 text-base leading-normal">
                <AiOutlinePlus />
              </span>
              <input type="file" className="hidden" />
            </label>
            <div className="flex space-x-7 mt-5">
              <button className="mb-1 w-full h-[48px] shadow appearance-none leading-tight rounded-2xl border-2 border-purple-700 focus:outline-none focus:shadow-outline indent-3">
                <p className="text-black">Preview</p>
              </button>
              <button className="mb-1 w-full h-[48px] shadow appearance-none bg-purple-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3">
                <p className="text-white">Terbitkan</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoProduct;
