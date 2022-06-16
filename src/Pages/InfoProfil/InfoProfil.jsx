import React from "react";

import NavbarBack from "../../Components/NavbarBack/NavbarBack";

const InfoProfil = () => {
  return (
    <div className="container mt-5 sm:min-w-full p-3">
      <NavbarBack>Lengkapi Info Akun</NavbarBack>
      <div className="flex justify-center items-center">
        <button>
          <img
            src="https://i.gyazo.com/9a74bb3b374eddc5890cbe226035d818.png"
            alt=""
          />
        </button>
      </div>
      <div className="flex justify-center">
        <form>
          <div className="container w-[568px] mt-[24px]">
            <p className="mb-1">Nama*</p>
            <input
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3"
              placeholder="Nama"
            />
            <p className="mb-1">Kota*</p>
            <select
              defaultValue={"Kota"}
              name="kota"
              id="kota"
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3"
            >
              <option className="text-gray-700" value="Kota" disabled>
                Pilih Kota
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <p className="mb-1">Alamat*</p>
            <input
              className="mb-6 w-full h-[80px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3"
              placeholder="Contoh: Jalan Ikan Hiu 33"
            />
            <p className="mb-1">No Handphone*</p>
            <input
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3"
              placeholder="contoh: +628123456789"
            />
            <button className="mb-1 w-full h-[48px] shadow appearance-none bg-purple-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3">
              <p className="text-white">Simpan</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoProfil;
