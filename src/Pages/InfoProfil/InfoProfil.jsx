import React from "react";

import NavbarBack from "../../Components/NavbarBack/NavbarBack";

const InfoProfil = () => {
  return (
    <div className="App">
      <div className="relative mt-3 h-auto w-full p-3">
        <NavbarBack />
        <div className="flex justify-center">
          <p className="text-2xl mb-20 -mt-8 md:hidden">Lengkapi Info Profil</p>
        </div>
        <div className="flex justify-center">
          <button>
            <img
              src="https://i.gyazo.com/9a74bb3b374eddc5890cbe226035d818.png"
              alt=""
            />
          </button>
        </div>
        {/*Body Form */}
        <div className="flex justify-center">
          <form>
            <div className="mb-4 flex w-[328px] flex-col justify-center px-5 md:w-[568px]">
              <p className="mb-1">Nama*</p>
              <input
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="Nama"
              />
              <p className="mb-1">Kota*</p>
              <input
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="Kota"
              />
              <p className="mb-1">Alamat*</p>
              <input
                className="mb-6 w-full h-[80px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="Contoh: Jalan Ikan Hiu 33"
              />
              <p className="mb-1">No Handphone*</p>
              <input
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="contoh: +628123456789"
              />
              <button className="mb-1 w-full h-[48px] shadow appearance-none bg-purple-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 hover:scale-90 focus:bg-purple-500">
                <p className="text-white">Simpan</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoProfil;
