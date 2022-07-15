import React, { useState } from "react";
import NavbarBackTitle from "../../Components/NavbarBackTitle/NavbarBackTitle";
import pf from "./img/Profile.png";
import Modal from "../../Components/Modal/Modal";
import { useEffect } from "react";
import API from "../../API";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const SellerTawar = () => {
  const [modalHubungi, setModalHubungi] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const { idTawar } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [tawar, setTawar] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [radio, setRadio] = useState(true);
  const navigate = useNavigate();

  const getTawar = () => {
    API.get(`/sellers/products/interests/${idTawar}`, {
      headers: {
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        setLoading(false);
        setTawar(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Ada Kesalahan Dalam Pengambilan Data");
        toast.error("Ada Kesalahan Dalam Pengambilan Data");
      });
  };

  useEffect(() => {
    getTawar();
  }, []);

  const onKirim = () => {
    setButtonLoading(true);
    API.put(
      `/sellers/products/interests/${idTawar}/status`,
      {
        status: radio,
      },
      {
        headers: {
          Authorization: user ? user.access_token : "",
        },
      }
    )
      .then((res) => {
        toast.success("Berhasil Mengubah Status Penawaran");
        setButtonLoading(false);
        navigate("/seller/diminati");
      })
      .catch((err) => {
        console.log(err);
        setButtonLoading(false);
        toast.error("Ada Kesalahan Saat Menyelesaikan Pesanan");
      });
  };

  const onTerima = () => {
    setButtonLoading(true);
    API.put(
      `/sellers/products/interests/${idTawar}`,
      {
        agreement: "true",
      },
      {
        headers: {
          Authorization: user ? user.access_token : "",
        },
      }
    )
      .then((res) => {
        setButtonLoading(false);
        toast.success("Berhasil Menyetujui Penawaran");
        getTawar();
      })
      .catch((err) => {
        setButtonLoading(false);
        toast.error("Ada Kesalahan Dalam Pemrosesan Data");
      });
  };

  const onTolak = () => {
    setButtonLoading(true);
    API.put(
      `/sellers/products/interests/${idTawar}`,
      {
        agreement: "false",
      },
      {
        headers: {
          Authorization: user ? user.access_token : "",
        },
      }
    )
      .then((res) => {
        setButtonLoading(false);
        toast.success("Berhasil Menolak Penawaran");
        navigate(-1);
      })
      .catch((err) => {
        setButtonLoading(false);
        toast.error("Ada Kesalahan Dalam Pemrosesan Data");
      });
  };
  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && !error && (
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
                      <h1 className="text-sm md:text-xl">{tawar.Buyer.nama}</h1>
                      <p className="text-xs text-gray-300">
                        {tawar.Buyer.kota}
                      </p>
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
                          src={tawar.Product.img}
                          alt="jam tangan"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="ml-5">
                        <p className="font-normal text-xs text-gray-500">
                          Penawaran Produk
                        </p>
                        <h3 className="text-sm mt-2">{tawar.Product.name}</h3>
                        <h3 className="text-sm mt-2">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(tawar.Product.price)}
                        </h3>
                        <h3 className="text-sm mt-2">
                          Ditawar :{" "}
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(tawar.price)}
                        </h3>
                      </div>
                    </div>
                    {buttonLoading && (
                      <div className="flex justify-end">
                        <svg
                          role="status"
                          className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                    )}
                    {tawar.agreement === null && !(buttonLoading === true) && (
                      <div className="flex justify-center md:justify-end">
                        <button
                          onClick={onTolak}
                          className="bg-purple-white border-purple-700 border-2 hover:bg-purple-900 text-black hover:text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300 w-[250px] mr-8"
                        >
                          Tolak
                        </button>
                        <button
                          onClick={onTerima}
                          className="bg-purple-700 hover:bg-purple-900 text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300  w-[250px]"
                        >
                          Terima
                        </button>
                      </div>
                    )}

                    {!(tawar.agreement === null) && !(buttonLoading === true) && (
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
                    )}
                  </div>
                </div>
                {/* End of Product lists */}
              </div>
            </div>
          </div>
          <Modal visible={modalHubungi} onClose={() => setModalHubungi(false)}>
            <div className="mt-4 mx-5">
              <h2>Yeay kamu berhasil mendapat harga yang sesuai</h2>
              <p className="text-gray-500 text-sm mt-5">
                Segera hubungi pembeli melalui whatsapp untuk transaksi
                selanjutnya
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
                    <h3 className="text-sm">{tawar.Buyer.nama}</h3>
                    <p className="text-xs text-gray-600">{tawar.Buyer.kota}</p>
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
                    <h3 className="text-sm">{tawar.Product.name}</h3>
                    <p className="text-xs line-through">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(tawar.Product.price)}
                    </p>
                    <p className="text-xs">
                      Ditawar{" "}
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(tawar.price)}
                    </p>
                  </div>
                </div>
                {/* end of barang */}
              </div>
              <div className="mb-5">
                <a
                  href={`https://wa.me/${tawar.Buyer.no_hp}`}
                  rel="noreferrer"
                  target="_blank"
                  className="bg-purple-700 hover:bg-purple-900 text-white
                  text-sm h-12 py-2 px-4 rounded-xl mt-8 transition ease-in-out
                  duration-300 flex justify-center items-center"
                >
                  {" "}
                  Hubungi via Whatsapp
                </a>
              </div>
            </div>
          </Modal>
          <Modal visible={modalStatus} onClose={() => setModalStatus(false)}>
            <div className="mx-5">
              <h1 className="font-semibold">
                Perbarui status penjualan produkmu
              </h1>

              {/* Radio */}

              <div className="mt-5">
                <form action="" onChange={(e) => console.log(e.target.value)}>
                  <div className="flex">
                    <input
                      type="radio"
                      name="status"
                      id="berhasil"
                      className="accent-purple-700"
                      onChange={(e) => setRadio(true)}
                      checked={radio}
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
                      onChange={(e) => setRadio(false)}
                      checked={!radio}
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
                  {buttonLoading && (
                    <div className="flex justify-center mt-8">
                      <svg
                        role="status"
                        className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  )}
                  {!buttonLoading && (
                    <button
                      onClick={onKirim}
                      className="bg-purple-700 hover:bg-purple-900 text-white text-sm h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300 mb-4 w-full"
                    >
                      Kirim
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default SellerTawar;
