import React, { useState } from "react";
import NavbarBackTitle from "../../Components/NavbarBackTitle/NavbarBackTitle";
import pf from "./img/Profile.png";
import Modal from "../../Components/Modal/Modal";

const SellerTawar = () => {
  const [modalHubungi, setModalHubungi] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <div>
      <div className="w-full md:w-10/12 md:mx-auto">
        <div>
          {/* NAV */}
          <NavbarBackTitle>Info Penawar</NavbarBackTitle>
          {/* Nav */}

          <div className="mx-2">
            {/* Profile */}
            <div className="flex p-6  shadow-md justify-between rounded-3xl">
              <div className="flex h-12">
                <img src={pf} alt="profile" />
                <div className="text-profil ml-5">
                  <h1 className="text-sm md:text-xl">Nama Penjual</h1>
                  <p className="text-xs text-gray-300">Kota</p>
                </div>
              </div>
            </div>
            {/* end of Profile */}
            {/* Title */}
            <div className="mt-5">
              <h3 className="font-semibold">Daftar Produk Yang Ditawar</h3>
            </div>
            {/* end of title */}
            {/* Product Lists */}
            <div className="mt-5">
              {/* List Comp */}
              <div>
                <div className="flex mx-5">
                  <div className="w-14">
                    <img
                      src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-13534303/lige_lige_jam_tangan_quartz_fashion_fungsi_chronograph_stainless_steel_anti_air_untuk_pria_full01_25378a23.jpg"
                      alt="jam tangan"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="ml-5">
                    <p className="font-normal text-xs text-gray-500">
                      Penawaran Produk
                    </p>
                    <h3 className="text-sm mt-2">Jam Tangan Casio</h3>
                    <h3 className="text-sm mt-2">Rp. 250.000</h3>
                    <h3 className="text-sm mt-2">Ditawar : Rp.200.000</h3>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <button
                    onClick={() => setModalStatus(true)}
                    className="bg-purple-white border-purple-700 border-2 hover:bg-purple-900 text-black hover:text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300 w-[250px] mr-8"
                  >
                    Status
                  </button>
                  <button
                    onClick={() => setModalHubungi(true)}
                    className="bg-purple-700 hover:bg-purple-900 text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300  w-[250px]"
                  >
                    Hubungi
                  </button>
                </div>
              </div>
              {/* end of list comp */}
              {/* List Comp */}
              <div>
                <div className="flex mt-5 mx-5">
                  <div className="w-14">
                    <img
                      src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-13534303/lige_lige_jam_tangan_quartz_fashion_fungsi_chronograph_stainless_steel_anti_air_untuk_pria_full01_25378a23.jpg"
                      alt="jam tangan"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="ml-5">
                    <p className="font-normal text-xs text-gray-500">
                      Penawaran Produk
                    </p>
                    <h3 className="text-sm mt-2">Jam Tangan Casio</h3>
                    <h3 className="text-sm mt-2">Rp. 250.000</h3>
                    <h3 className="text-sm mt-2">Ditawar : Rp.200.000</h3>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <button
                    onClick={() => setModalStatus(true)}
                    className="bg-purple-white border-purple-700 border-2 hover:bg-purple-900 text-black hover:text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300 w-[250px] mr-8"
                  >
                    Status
                  </button>
                  <button
                    onClick={() => setModalHubungi(true)}
                    className="bg-purple-700 hover:bg-purple-900 text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300  w-[250px]"
                  >
                    Hubungi
                  </button>
                </div>
              </div>
              {/* end of list comp */}
            </div>
            {/* End of Product lists */}
          </div>
        </div>
      </div>
      <Modal visible={modalHubungi} onClose={() => setModalHubungi(false)}>
        <div className="mt-4 mx-5">
          <h2>Yeay kamu berhasil mendapat harga yang sesuai</h2>
          <p className="text-gray-500 text-sm mt-5">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <div className="bg-gray-200 mt-5 py-4 rounded-xl">
            <h1 className="text-center font-semibold">Product Match</h1>

            {/* Pembeli */}
            <div className="mx-3 flex items-center">
              <img
                src="https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg"
                className="w-14 h-14 object-cover rounded-xl"
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-sm">Nama Pembeli</h3>
                <p className="text-xs text-gray-600">kota</p>
              </div>
            </div>
            {/* end of pembeli */}
            {/* barang */}
            <div className="mx-3 flex items-center mt-4">
              <img
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-13534303/lige_lige_jam_tangan_quartz_fashion_fungsi_chronograph_stainless_steel_anti_air_untuk_pria_full01_25378a23.jpg"
                className="w-14 h-14 object-cover rounded-xl"
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-sm">Jam Tangan</h3>
                <p className="text-xs line-through">Rp. 200.000</p>
                <p className="text-xs">Ditawar Rp. 150.000</p>
              </div>
            </div>
            {/* end of barang */}
          </div>
          <div className="mb-5">
            <button className="bg-purple-700 hover:bg-purple-900 text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300  w-full">
              Hubungi via Whatsapp
            </button>
          </div>
        </div>
      </Modal>
      <Modal visible={modalStatus} onClose={() => setModalStatus(false)}>
        <div className="mx-5">
          <h1 className="font-semibold">Perbarui status penjualan produkmu</h1>

          {/* Radio */}

          <div className="mt-5">
            <form action="">
              <div className="flex">
                <input
                  type="radio"
                  name="status"
                  id="berhasil"
                  className="accent-purple-700"
                />
                <label className="ml-4" htmlFor="berhasil">
                  <h2>Berhasil Terjual</h2>
                  <p className="text-sm mt-2 text-gray-400">
                    Kamu telah sepakat menjual produk ini kepada pembeli
                  </p>
                </label>
              </div>
              {/* End of Radio */}
              {/* Radio */}
              <div className="flex mt-5">
                <input
                  type="radio"
                  name="status"
                  id="batalkan"
                  className="accent-purple-700"
                />
                <label className="ml-4" htmlFor="batalkan">
                  <h2>Batalkan transaksi</h2>
                  <p className="text-sm mt-2 text-gray-400">
                    Kamu membatalkan transaksi produk ini dengan pembeli
                  </p>
                </label>
              </div>
            </form>
            {/* End of Radio */}
            <div>
              <button className="bg-purple-700 hover:bg-purple-900 text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300 mb-4 w-full">
                Hubungi via Whatsapp
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SellerTawar;
