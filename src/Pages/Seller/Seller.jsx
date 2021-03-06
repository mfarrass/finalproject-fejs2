import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";
import API from "../../API";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

function Seller() {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pengguna, setPengguna] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/sellers/profile", {
      headers: {
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        setPengguna(res.data.data);
        setIsLoading(false);
        console.log(res.data.data);
      })
      .catch((err) => {
        setError("Ada Kesalahan Dalam Pengambilan Data");
        toast.error("Ada Kesalahan Dalam Pengambilan Data");
      });
  }, [user]);

  return (
    <>
      {isLoading && !error && <LoadingSpinner />}
      {error && isLoading && (
        <div className="grid h-screen place-items-center">
          {" "}
          <ErrorAlert>{error}</ErrorAlert>
        </div>
      )}
      {!isLoading && !error && (
        <div className="App">
          <div className="container max-w-screen-lg mx-auto">
            <div className="title text-xl font-bold py-6">
              <h1>Daftar Jual Saya</h1>
            </div>

            {/* Card Profile Penjual */}
            <div className="flex p-6  shadow-md justify-between rounded-3xl">
              <div className="flex h-12">
                <img
                  src={pengguna.profile_picture}
                  alt="profile"
                  className="rounded-lg"
                />
                <div className="text-profil ml-5">
                  <h1 className="text-sm md:text-xl">{pengguna.nama}</h1>
                  <p className="text-xs text-gray-300">{pengguna.alamat}</p>
                </div>
              </div>
              <button
                onClick={() => navigate("/info-profil")}
                className="border border-purple-700 rounded-md sm:px-9 sm:py-1 h-10 px-4 hover:bg-purple-900 hover:text-white"
              >
                Edit
              </button>
            </div>
            {/* Card Profile Penjual end */}

            {/* Kategori Mobile */}
            <div className=" md:hidden flex gap-3 mt-5 ml-3">
              <Link to="/seller">
                <div
                  className={`flex items-center gap-2 w-30 py-3 px-4 ${
                    location.pathname === "/seller"
                      ? "bg-purple-700"
                      : "bg-purple-300"
                  } rounded-xl`}
                >
                  <BiCube
                    color={location.pathname === "/seller" ? "#fff" : ""}
                  />
                  <p
                    className={`${
                      location.pathname === "/seller" ? "text-white" : ""
                    }`}
                  >
                    Produk
                  </p>
                </div>
              </Link>
              <Link to="/seller/diminati">
                <div
                  className={`flex items-center gap-2 w-30 py-3 px-4 ${
                    location.pathname === "/seller/diminati"
                      ? "bg-purple-700"
                      : "bg-purple-300"
                  } rounded-xl`}
                >
                  <BiHeart
                    color={
                      location.pathname === "/seller/diminati" ? "#fff" : ""
                    }
                  />
                  <p
                    className={`${
                      location.pathname === "/seller/diminati"
                        ? "text-white"
                        : ""
                    }`}
                  >
                    Diminati
                  </p>
                </div>
              </Link>
              <Link to="/seller/terjual">
                <div
                  className={`flex items-center gap-2 w-30 py-3 px-4 ${
                    location.pathname === "/seller/terjual"
                      ? "bg-purple-700"
                      : "bg-purple-300"
                  } rounded-xl`}
                >
                  <BiCube
                    color={
                      location.pathname === "/seller/terjual" ? "#fff" : ""
                    }
                  />
                  <p
                    className={`${
                      location.pathname === "/seller/terjual"
                        ? "text-white"
                        : ""
                    }`}
                  >
                    Terjual
                  </p>
                </div>
              </Link>
            </div>
            {/* Kategori Mobile */}

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
                          location.pathname === "/seller"
                            ? "text-purple-600"
                            : ""
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
                          location.pathname === "/seller/diminati"
                            ? "#9333ea"
                            : ""
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
                          location.pathname === "/seller/diminati"
                            ? "#9333ea"
                            : ""
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
                          location.pathname === "/seller/terjual"
                            ? "#9333ea"
                            : ""
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
                          location.pathname === "/seller/terjual"
                            ? "#9333ea"
                            : ""
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
      )}
    </>
    /* Kategori end */
  );
}

export default Seller;
