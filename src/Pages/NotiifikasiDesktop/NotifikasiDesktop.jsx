import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import API from "../../API";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import moment from "moment";
const NotifikasiDesktop = () => {
  const navigate = useNavigate();
  const [notif, setNotif] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const getNotif = () => {
    setLoading(true);
    API.get("/notifications", {
      headers: {
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        setNotif(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ada Kesalahan dalam notifikasi");
        setLoading(false);
      });
  };

  useEffect(() => {
    getNotif();
  }, []);
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="-mt-5 pl-5 absolute hover:text-purple-700 "
      >
        <BiArrowBack className="w-6 h-6 focus:outline-none transform active:scale-50 transition-transform duration-300 shadow-sm" />
      </button>
      <div className="6 z-auto right-0 py-7 mt-28 top-0 bg-white  h-screen place-items-center">
        <div className="lg:w-4/5 w-11/12 mx-auto bg-white  rounded-xl border shadow-sm">
          {loading && !error && <LoadingSpinner />}
          {!loading &&
            !error &&
            notif.map((item, i) => {
              if (item.NotifactionsInterestedProduct) {
                return (
                  <Link to="#" key={i}>
                    <div className="mt-1 px-6 py-3 bg-white hover:bg-gray-100 rounded-lg shadow w-full">
                      <div className=" inline-flex items-center justify-between w-full">
                        <div className="inline-flex items-center">
                          <img
                            src={
                              item.NotifactionsInterestedProduct.Product
                                .ProductImage[0].image
                            }
                            alt="Training Icon"
                            className="w-16 h-16 rounded-lg mr-3 hover:scale-125 ease-in duration-100"
                          />
                          <div className="text-xs text-gray-500 mt-4">
                            {item.status}
                            <ul className="mt-2">
                              <li className="text-base text-black">
                                {
                                  item.NotifactionsInterestedProduct.Product
                                    .name
                                }
                              </li>
                              <li className="text-sm text-black">
                                {" "}
                                {new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                }).format(
                                  item.NotifactionsInterestedProduct.Product
                                    .price
                                )}
                              </li>
                              <li className="text-sm text-black">
                                Ditawar{" "}
                                {new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                }).format(
                                  item.NotifactionsInterestedProduct.price
                                )}{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="inline-flex items-center">
                          <p className="text-xs mx-3 text-gray-500">
                            {moment(item.createdAt)
                              .locale("id")
                              .format("MMMM Do YYYY")}
                          </p>
                          <span className="rounded-full w-2 h-2 bg-red-500"></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          {/* <div className="mt-1 px-6 py-3 bg-white hover:bg-gray-100 rounded-lg shadow w-full">
            <div className=" inline-flex items-center justify-between w-full">
              <div className="inline-flex items-center">
                <img
                  src="/Imgs/card.png"
                  alt="Training Icon"
                  className="w-16 h-16 rounded-lg mr-3 hover:scale-125 ease-in duration-100"
                />
                <div className="text-xs text-gray-500 mt-4">
                  Penawaran Produk
                  <ul className="mt-2">
                    <li className="text-base text-black">Jam tangan Casio</li>
                    <li className="text-sm text-black">Rp. 250.000</li>
                    <li className="text-sm text-black">Ditawar Rp 200.00 </li>
                  </ul>
                </div>
              </div>
              <div className="inline-flex items-center">
                <p className="text-xs mx-3 text-gray-500">20 Apr, 14:40</p>
                <span class="rounded-full w-2 h-2 bg-red-500"></span>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-1 px-6 py-3 bg-white hover:bg-gray-100 rounded-lg shadow w-full">
            <div className=" inline-flex items-center justify-between w-full">
              <div className="inline-flex items-center">
                <img
                  src="/Imgs/card.png"
                  alt="Training Icon"
                  className="w-16 h-16 rounded-lg mr-3 hover:scale-125 ease-in duration-100"
                />
                <div className="text-xs text-gray-500 mt-4">
                  Berhasil Diterbitkan
                  <ul className="mt-2">
                    <li className="text-base text-black">Jam tangan Casio</li>
                    <li className="text-sm text-black">Rp. 250.000</li>
                  </ul>
                </div>
              </div>
              <div className="inline-flex items-center">
                <p className="text-xs mx-3 text-gray-500">20 Apr, 14:40</p>
                <span class="rounded-full w-2 h-2 bg-red-500"></span>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-1 px-6 py-3 bg-white hover:bg-gray-100 rounded-lg shadow w-full">
            <div className=" inline-flex items-center justify-between w-full">
              <div className="inline-flex items-center">
                <img
                  src="/Imgs/card.png"
                  alt="Training Icon"
                  className="w-16 h-16 rounded-lg mr-3 hover:scale-125 ease-in duration-100"
                />
                <div className="text-xs text-gray-500 mt-4">
                  Berhasil Diterbitkan
                  <ul className="mt-2">
                    <li className="text-base text-black">Jam tangan Casio</li>
                    <li className="text-sm text-black">Rp. 250.000</li>
                  </ul>
                </div>
              </div>
              <div className="inline-flex items-center">
                <p className="text-xs mx-3 text-gray-500">20 Apr, 14:40</p>
                <span class="rounded-full w-2 h-2 bg-red-500"></span>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-1 px-6 py-3 bg-white hover:bg-gray-100 rounded-lg shadow w-full">
            <div className=" inline-flex items-center justify-between w-full">
              <div className="inline-flex items-center">
                <img
                  src="/Imgs/card.png"
                  alt="Training Icon"
                  className="w-16 h-16 rounded-lg mr-3 hover:scale-125 ease-in duration-100"
                />
                <div className="text-xs text-gray-500 mt-4">
                  Berhasil Diterbitkan
                  <ul className="mt-2">
                    <li className="text-base text-black">Jam tangan Casio</li>
                    <li className="text-sm text-black">Rp. 250.000</li>
                  </ul>
                </div>
              </div>
              <div className="inline-flex items-center">
                <p className="text-xs mx-3 text-gray-500">20 Apr, 14:40</p>
                <span class="rounded-full w-2 h-2 bg-red-500"></span>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-1 px-6 py-3 bg-white hover:bg-gray-100 rounded-lg shadow w-full">
            <div className=" inline-flex items-center justify-between w-full">
              <div className="inline-flex items-center">
                <img
                  src="/Imgs/card.png"
                  alt="Training Icon"
                  className="w-16 h-16 rounded-lg mr-3 hover:scale-125 ease-in duration-100"
                />
                <div className="text-xs text-gray-500 mt-4">
                  Berhasil Diterbitkan
                  <ul className="mt-2">
                    <li className="text-base text-black">Jam tangan Casio</li>
                    <li className="text-sm text-black">Rp. 250.000</li>
                  </ul>
                </div>
              </div>
              <div className="inline-flex items-center">
                <p className="text-xs mx-3 text-gray-500">20 Apr, 14:40</p>
                <span class="rounded-full w-2 h-2 bg-red-500"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NotifikasiDesktop;
