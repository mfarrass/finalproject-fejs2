import React from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-16 bg-white w-full shadow">
            <div className="container m-auto p-3 flex justify-between items-center text-gray-700">
                <a
                    href="#"
                    className="block mt-2 w-28 h-8 bg-purple-700 hover:bg-blue-700 lg:mt-0"
                ></a>
                <div className="flex-1 relative mx-5 text-gray-600 md:block hidden">
                    <form>
                        <label>
                            <input
                                type="text"
                                name="name"
                                className=" border-gray-300 bg-gray-100 w-80 h-10 pl-4 pr-14 border-0 rounded-lg text-sm focus:outline-none"
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
                <div class="flex lg:block hidden">
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
                <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
                    <div class="w-5 h-1 bg-gray-600 mb-1"></div>
                    <div class="w-5 h-1 bg-gray-600 mb-1"></div>
                    <div class="w-5 h-1 bg-gray-600"></div>
                    <div
                        class="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
                    >
                        <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                            <a
                                href="#"
                                className="block text-md text-center w-28 h-10 py-2 text-white rounded-lg bg-purple-700 hover:text-white hover:bg-blue-700 lg:mt-0"
                            >
                                <span className="px-2">
                                    <FiLogIn class="absolute z-10 text-center mx-5 -my-5" />
                                </span>
                                Masuk
                            </a>
                        </ul>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
