import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { GiExitDoor } from "react-icons/gi";
import { Outlet, Link, useNavigate } from "react-router-dom";
import BoxNotification from "../../Components/BoxNotification/BoxNotification";
import DropDownIcon from "../DropDownIcon/DropDownIcon";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import authSlice from "../../Features/authSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const [toggleNotif, setToggleNotif] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      navigate("/search/" + search);
    } else {
      toast.warning("Silahkan isi kolom pencarian terlebih dahulu");
    }
  };

  return (
    <>
      <div className="mt-20 absolute z-10">
        <div className="fixed top-0 left-0 h-16 -mb-25 bg-white w-full shadow-none sm:shadow">
          <div className="container m-auto p-3 flex justify-between items-center text-gray-700">
            <div className="flex lg:hidden md:hidden sm:hidden">
              <button
                onClick={(e) => {
                  navigate(-1);
                  e.preventDefault();
                }}
                className="block text-md text-center w-10 h-10 py-2 text-black lg:mt-0"
              ></button>
            </div>
            <Link to="/">
              <img
                src="/Imgs/second-hand-logo2.png"
                alt=""
                className="md:block hidden mt-2 w-18 h-10 lg:mt-0 hover:shadow-sm focus:outline-none transform active:scale-50 transition-transform duration-300"
              />
            </Link>
            <div className="flex-1 relative mx-5 text-gray-600">
              <form>
                <label>
                  <input
                    type="text"
                    name="name"
                    className="shadow-md border-gray-300 bg-gray-100 w-full md:w-auto h-10 pl-4 pr-14 border-0 rounded-xl text-sm focus:outline-none"
                    placeholder="Cari di sini ..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                  <button
                    className="absolute right top-0 mt-3 -ml-8 "
                    onClick={handleSearch}
                  >
                    <BsSearch className="text-gray-600 hover:text-purple-700 h-4 w-4 fill-current" />
                  </button>
                </label>
              </form>
            </div>
            <div className="flex sm:block hidden">
              <Link
                to="/wishlist"
                className="block text-md text-center w-10 h-10 py-2 text-black hover:text-purple-700 lg:mt-0"
              >
                {" "}
                <span className="px-2">
                  <AiOutlineStar
                    fontSize="23px"
                    className="inline-block absolute text-center focus:outline-none transform active:scale-50 transition-transform duration-300"
                  />
                </span>
              </Link>
            </div>
            <div className="flex sm:block hidden">
              <Link
                to="/seller"
                className="block text-md text-center w-10 h-10 py-2 text-black hover:text-purple-700 lg:mt-0"
              >
                {" "}
                <span className="px-2">
                  <MdFormatListBulleted
                    fontSize="22px"
                    className="inline-block absolute text-center focus:outline-none transform active:scale-50 transition-transform duration-300"
                  />
                </span>
              </Link>
            </div>
            <div className="flex sm:block hidden">
              <button
                onClick={() => setToggleNotif(true)}
                className="block text-md text-center w-10 h-10 py-2 text-black hover:text-purple-700 lg:mt-0"
              >
                {" "}
                <span className="px-2">
                  <AiOutlineBell
                    fontSize="22px"
                    className="absolute text-center inline-block focus:outline-none transform active:scale-50 transition-transform duration-300"
                  />
                </span>
              </button>
            </div>
            <div className="flex sm:block hidden">
              <button
                onClick={() => setToggleProfile(true)}
                className="block text-md text-center w-10 h-10 py-2 text-black hover:text-purple-700 lg:mt-0"
              >
                {" "}
                <span className="px-2">
                  <VscAccount
                    fontSize="22px"
                    className="absolute text-center inline-block focus:outline-none transform active:scale-50 transition-transform duration-300"
                  />
                </span>
              </button>
            </div>
            <BoxNotification state={toggleNotif} setState={setToggleNotif} />
            <DropDownIcon state={toggleProfile} setState={setToggleProfile} />
            <button className="block sm:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600"></div>
              <div
                className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300 z-40"
              >
                {/* <div className="m-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 border-slate-100 focus:outline-none transform active:scale-50 transition-transform duration-300 shadow-sm hover:text-purple-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
                <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-6">
                  <div className="flex flex-col items-center w-32 mx-5">
                    <Link to="/">
                      <img src="/Imgs/second-hand-logo2.png" alt="logo" />
                    </Link>
                  </div>
                </ul>

                <ul className="inline flex-col items-center text-black w-full text-base cursor-pointer pt-10 ">
                  <li className="my-3 hover:bg-purple-700 hover:text-white">
                    <Link to="/seller">Produk</Link>
                  </li>
                  <li className="mb-3 hover:bg-purple-700 hover:text-white">
                    <Link to="notifikasi">Notifikasi</Link>
                  </li>
                  <li className="mb-3 hover:bg-purple-700 hover:text-white">
                    <Link to="/info-profil">Akun</Link>
                  </li>
                  <li className="mb-3 hover:bg-purple-700 hover:text-white">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                </ul>

                <ul className="relative flex justify-center w-full text-base cursor-pointer pt-10">
                  <button
                    onClick={() => dispatch(authSlice.actions.logout())}
                    className="shadow-md block text-md w-28 h-10 py-2 -mx-2 text-white hover:text-gray-700 rounded-lg bg-purple-700 hover:text-white hover:bg-purple-200 hover:font-bold lg:mt-0 focus:outline-none transform active:scale-50 transition-transform duration-300"
                  >
                    {" "}
                    <span className="px-5 -ml-5">
                      <GiExitDoor className="inline-block absolute z-10 text-center mt-1" />
                    </span>
                    Logout
                  </button>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
