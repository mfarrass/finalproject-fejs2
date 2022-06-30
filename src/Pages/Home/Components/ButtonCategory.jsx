import React from "react";
import { BsSearch } from "react-icons/bs";

const CategoryButton = () => {
  return (
    <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  flex overflow-x-auto whitespace-nowrap">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-auto gap-6">
            <li className="text-white hover:text-gray-700">
              <button className="shadow-md toggle rounded-xl flex p-2.5 text-right bg-purple-700 hover:bg-purple-200">
                <BsSearch className="h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Semua
              </button>
            </li>
            <li className="hover:text-white">
              <button className="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  hover rounded-xl">
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Hobi
              </button>
            </li>
            <li className="hover:text-white">
              <button className="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  rounded-xl">
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Kendaraan
              </button>
            </li>
            <li className="hover:text-white">
              <button
                href="#"
                className="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  rounded-xl"
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Baju
              </button>
            </li>
            <li className="hover:text-white">
              <button className="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  rounded-xl">
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Elektronik
              </button>
            </li>
            <li className="hover:text-white">
              <button className="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  rounded-xl">
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Kesehatan
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryButton;
