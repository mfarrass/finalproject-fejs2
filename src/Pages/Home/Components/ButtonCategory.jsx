import React from "react";
import { BsSearch } from "react-icons/bs";

const CategoryButton = () => {
  return (
    <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 flex overflow-x-auto whitespace-nowrap">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-auto gap-6">
            <li className="text-white hover:text-gray-700">
              <a
                href="#"
                class="shadow-md toggle rounded-xl flex p-2.5 text-right bg-purple-700 hover:bg-purple-200"
              >
                <BsSearch className="h-4 w-4 fill-current" />
                <span
                  class="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Semua
              </a>
            </li>
            <li className="hover:text-white">
              <a
                href="#"
                class="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  hover rounded-xl"
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  class="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Hobi
              </a>
            </li>
            <li className="hover:text-white">
              <a
                href="#"
                class="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  rounded-xl"
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  class="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Kendaraan
              </a>
            </li>
            <li className="hover:text-white">
              <a
                href="#"
                class="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  rounded-xl"
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  class="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Baju
              </a>
            </li>
            <li className="hover:text-white">
              <a
                href="#"
                class="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  rounded-xl"
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  class="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Elektronik
              </a>
            </li>
            <li className="hover:text-white">
              <a
                href="#"
                class="shadow-md toggle flex p-2.5 text-right bg-purple-200 hover:bg-purple-700  rounded-xl"
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  class="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Kesehatan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryButton;
