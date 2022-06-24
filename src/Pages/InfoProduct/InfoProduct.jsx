import React from "react";
import NavbarBack from "../../Components/NavbarBack/NavbarBack";
import { AiOutlinePlus } from "react-icons/ai";

const InfoProduct = () => {
  return (
    <div className="relative mt-3 h-auto w-full p-3">
      <NavbarBack />
      <div className="flex justify-center">
        <p className="text-2xl mb-20 -mt-8">Lengkapi Info Produk</p>
      </div>
      {/*Body Form */}
      <div className="flex justify-center">
        <form action="">
          <div className="mb-4 flex w-[328px] flex-col justify-center px-5 md:w-[568px]">
            <p className="mb-1">Nama Produk*</p>
            <input
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
              placeholder="Nama Produk"
            />
            <p className="mb-1">Harga Produk*</p>
            <input
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
              placeholder="Harga Produk"
            />
            <p className="mb-1">Kategori*</p>
            <div className="grid grid-rows-1 md:grid-cols-3 mb-6 w-full">
              <div>
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                />
                <span class="ml-1 text-gray-700">Kat 1</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                />
                <span class="ml-1 text-gray-700">Kat 2</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                />
                <span class="ml-1 text-gray-700">Kat 3</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                />
                <span class="ml-1 text-gray-700">Kat 4</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                />
                <span class="ml-1 text-gray-700">Kat 5</span>
              </div>
            </div>
            <p className="mb-1">Deskripsi*</p>
            <input
              className="mb-6 w-full h-[80px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
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
              <button className="mb-1 w-full h-[48px] shadow appearance-none leading-tight rounded-2xl border-2 border-purple-700 focus:outline-none focus:shadow-outline indent-3 hover:scale-90 focus:bg-neutral-200">
                <p className="text-black">Preview</p>
              </button>
              <button className="mb-1 w-full h-[48px] shadow appearance-none bg-purple-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 hover:scale-90 focus:bg-purple-500">
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
