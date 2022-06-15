import pf from "./img/Profile.png";
import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";
import Card from "../../Components/Card/Card";
import { Outlet, Link, useLocation } from "react-router-dom";

function Seller() {
  const location = useLocation();

  console.log(location);
  return (
    <div className="App">
      <div className="container max-w-screen-lg mx-auto">
        <div className="title text-xl font-bold py-6">
          <h1>Daftar Jual Saya</h1>
        </div>

        {/* card nama penjual */}
        <div className="flex p-6  shadow-md justify-between rounded-3xl">
          <div className="flex h-12">
            <img src={pf} alt="profile" />
            <div className="text-profil ml-5">
              <h1 className="text-xl">Nama Penjual</h1>
              <p className="text-sm text-gray-300">Kota</p>
            </div>
          </div>
          <button className="border border-purple-700 rounded-md px-9 py-1 hover:bg-purple-900 hover:text-white">
            Edit
          </button>
        </div>
        {/* card nama penjual end */}

        {/* Kategori start */}
        <div className="md:flex mt-8 block">
          <div className="md:w-1/3">
            <div className=""></div>
            <div className="hidden md:flex justify-center md:justify-start">
              <div className="shadow-md rounded-lg p-6 h-fit md:w-60 w-11/12">
                <h2 className="text-xl">Kategori</h2>
                <Link
                  to="/seller"
                  className="flex items-center space-x-2 text-puborder-purple-700 py-3  w-full"
                >
                  <BiCube
                    color={location.pathname === "/seller" ? "#9333ea" : ""}
                  />
                  <div
                    className={`w-8/12 text-left ${
                      location.pathname === "/seller" ? "text-purple-600" : ""
                    }`}
                  >
                    Semua Produk
                  </div>
                  <BiChevronRight
                    color={location.pathname === "/seller" ? "#9333ea" : ""}
                  />
                </Link>
                <hr className=""></hr>

                <Link
                  to="/seller/diminati"
                  className="flex items-center space-x-2 text-puborder-purple-700 py-3  w-full"
                >
                  <BiHeart
                    color={
                      location.pathname === "/seller/diminati" ? "#9333ea" : ""
                    }
                  />
                  <div
                    className={`w-8/12 text-left ${
                      location.pathname === "/seller/diminati"
                        ? "text-purple-600"
                        : ""
                    }`}
                  >
                    Diminati
                  </div>
                  <BiChevronRight
                    color={
                      location.pathname === "/seller/diminati" ? "#9333ea" : ""
                    }
                  />
                </Link>
                <hr className=""></hr>

                <Link
                  to="/seller/terjual"
                  className="flex items-center space-x-2 text-puborder-purple-700 py-3  w-full"
                >
                  <BiDollar
                    color={
                      location.pathname === "/seller/terjual" ? "#9333ea" : ""
                    }
                  />
                  <div
                    className={`w-8/12 text-left ${
                      location.pathname === "/seller/terjual"
                        ? "text-purple-600"
                        : ""
                    }`}
                  >
                    Terjual
                  </div>
                  <BiChevronRight
                    color={
                      location.pathname === "/seller/terjual" ? "#9333ea" : ""
                    }
                  />
                </Link>
              </div>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
    /* Kategori end */
  );
}

export default Seller;
