import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import {Outlet} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className="mt-20">
        <div className="fixed top-0 left-0 h-16 -mb-20 bg-white w-full shadow-none sm:shadow">
            <div className="container m-auto p-3 flex justify-between items-center text-gray-700">
                <a
                    href="#"
                    className="md:block hidden mt-2 w-28 h-8 bg-purple-700 hover:bg-blue-700 lg:mt-0"
                ></a>
                <div className="flex-1 relative mx-5 text-gray-600">
                    <form>
                        <label>
                            <input
                                type="text"
                                name="name"
                                className=" border-gray-300 bg-gray-100 w-80 h-10 pl-4 pr-14 border-0 rounded-xl text-sm focus:outline-none"
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
                <div class="flex sm:block hidden">
                    <a
                        href="#"
                        className="block text-md text-center w-28 h-10 py-2 text-white rounded-lg bg-purple-700 hover:text-white hover:bg-blue-700 hover:font-bold lg:mt-0"
                    >
                        {" "}
                        <span className="px-2">
                            <FiLogIn class="absolute z-10 text-center mx-5 -my-5" />
                        </span>
                        Masuk
                    </a>
                </div>
            </div>
        </div>
        </div>
        {/* Content */}
        <Outlet/>
        </>
    );
};

export default Navbar;
