import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="mt-20 absolute z-10 ">
        <div className="fixed top-0 left-0 h-16 -mb-20 bg-white w-full shadow-none sm:shadow">
          <div className="container m-auto p-3 flex justify-between items-center text-gray-700">
            <Link
              to="#"
              className="shadow-md md:block hidden mt-2 w-28 h-8 bg-purple-700 hover:bg-gray-200 lg:mt-0"
            ></Link>
            <div className="flex-1 relative mx-5 text-gray-600">
              <form>
                <label>
                  <input
                    type="text"
                    name="name"
                    className="shadow-md border-gray-300 bg-gray-100 w-full md:w-auto h-10 pl-4 pr-14 border-0 rounded-xl text-sm focus:outline-none"
                    placeholder="Cari di sini ..."
                  />
                  <button
                    type="submit"
                    className="absolute right top-0 mt-3 -ml-8 "
                  >
                    <BsSearch className="text-gray-600 h-4 w-4 fill-current" />
                  </button>
                </label>
              </form>
            </div>
            <div class="flex md:block hidden">
              <Link
                to="#"
                className="shadow-md block text-md text-center w-28 h-10 py-2 text-white hover:text-gray-700 rounded-lg bg-purple-700 hover:text-white hover:bg-gray-200 hover:font-bold lg:mt-0"
              >
                {" "}
                <span className="px-2">
                  <FiLogIn class="inline-block absolute z-10 text-center mx-5 mt-1" />
                </span>
                Masuk
              </Link>
            </div>
            <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600"></div>
              <div
                className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
              >
                <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                  <Link
                    to="#"
                    className="shadow-md mb-5 block text-md text-center w-28 h-10 py-2 text-white hover:text-gray-700 rounded-lg bg-purple-700 hover:text-white hover:bg-blue-700 hover:font-bold lg:mt-0"
                  >
                    {" "}
                    <span className="px-2">
                      <FiLogIn class="inline-block absolute z-10 text-center mx-5 mt-1" />
                    </span>
                    Masuk
                  </Link>
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
