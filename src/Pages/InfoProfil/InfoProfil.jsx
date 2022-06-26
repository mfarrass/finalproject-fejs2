import React from "react";
import NavbarBack from "../../Components/NavbarBack/NavbarBack";
import TambahGambarSatu from "../../Components/TambahGambarSatu/TambahGambarSatu";

const InfoProfil = () => {
  return (
    <div className="App">
      <div className="relative mt-3 h-auto w-full p-3">
        <NavbarBack />
        <div className="flex justify-center">
          <p className="text-2xl mb-20 -mt-8 md:hidden">Lengkapi Info Profil</p>
        </div>

        {/*Body Form */}
        <div className="flex justify-center">
          <form action="">
            <div className="mb-4 flex w-[328px] flex-col justify-center px-5 md:w-[568px]">
              <div className="flex justify-center mb-8">
                <TambahGambarSatu />
              </div>
              <label htmlFor="nama" className="mb-1">
                Nama*
              </label>
              <input
                id="nama"
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="Nama"
                required
              />
              <label htmlFor="kota" className="mb-1">
                Kota*
              </label>
              <input
                id="kota"
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="Kota"
                required
              />
              <label htmlFor="alamat" className="mb-1">
                Alamat*
              </label>
              <textarea
                id="alamat"
                className="mb-6 w-full h-[80px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline focus:border-black focus:border-4"
                required
              ></textarea>
              <label htmlFor="nohp" className="mb-1">
                No Handphone*
              </label>
              <input
                id="nohp"
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="contoh: +628123456789"
                required
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
