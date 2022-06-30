import React from "react";

import TambahGambar from "../../Components/TambahGambar/TambahGambar";

const InfoProduct = () => {
  return (
    <div className="relative mt-24 h-auto w-full p-3">
      {/*Body Form */}
      <div className="flex justify-center">
        <form action="">
          <div className="mb-4 flex w-[328px] flex-col justify-center px-5 md:w-[568px]">
            <label htmlFor="nama_prod" className="mb-1">
              Nama Produk*
            </label>
            <input
              id="nama_prod"
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
              placeholder="Nama Produk"
            />
            <label htmlFor="harga_prod" className="mb-1">
              Harga Produk*
            </label>
            <input
              id="harga_prod"
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
              placeholder="Harga Produk"
            />
            <label htmlFor="kategori" className="mb-1">
              Kategori*
            </label>
            <div className="grid grid-rows-1 md:grid-cols-3 mb-6 w-full">
              <div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-1 text-gray-700">Kat 1</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-1 text-gray-700">Kat 2</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-1 text-gray-700">Kat 3</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-1 text-gray-700">Kat 4</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-1 text-gray-700">Kat 5</span>
              </div>
            </div>
            <label htmlFor="deskripsi" className="mb-1">
              Deskripsi*
            </label>
            <textarea
              id="deskripsi"
              className="mb-6 w-full h-[80px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
              placeholder="Contoh: Jalan Ikan Hiu 33"
            ></textarea>
            <label className="mb-1">Foto Produk*</label>
            <TambahGambar />
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
