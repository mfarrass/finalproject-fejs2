import React from "react";
import { BsSearch } from "react-icons/bs";

const CategoryButton = ({ state, setState }) => {
  return (
    <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  flex overflow-x-auto whitespace-nowrap">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-auto gap-6">
            <li
              className={`${
                state === null
                  ? "text-white hover:text-gray-700"
                  : "hover:text-white"
              }`}
            >
              <button
                onClick={() => setState(null)}
                className={`shadow-md toggle rounded-xl flex p-2.5 text-right ${
                  state === null
                    ? "bg-purple-700 hover:bg-purple-200"
                    : "bg-purple-200 hover:bg-purple-700"
                }  `}
              >
                <BsSearch className="h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Semua
              </button>
            </li>
            <li
              className={`${
                state === 1
                  ? "text-white hover:text-gray-700"
                  : "hover:text-white"
              }`}
            >
              <button
                onClick={() => setState(1)}
                className={`shadow-md toggle rounded-xl flex p-2.5 text-right ${
                  state === 1
                    ? "bg-purple-700 hover:bg-purple-200"
                    : "bg-purple-200 hover:bg-purple-700"
                }  `}
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Hobi
              </button>
            </li>
            <li
              className={`${
                state === 2
                  ? "text-white hover:text-gray-700"
                  : "hover:text-white"
              }`}
            >
              <button
                onClick={() => setState(2)}
                className={`shadow-md toggle rounded-xl flex p-2.5 text-right ${
                  state === 2
                    ? "bg-purple-700 hover:bg-purple-200"
                    : "bg-purple-200 hover:bg-purple-700"
                }  `}
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Kendaraan
              </button>
            </li>
            <li
              className={`${
                state === 3
                  ? "text-white hover:text-gray-700"
                  : "hover:text-white"
              }`}
            >
              <button
                onClick={() => setState(3)}
                className={`shadow-md toggle rounded-xl flex p-2.5 text-right ${
                  state === 3
                    ? "bg-purple-700 hover:bg-purple-200"
                    : "bg-purple-200 hover:bg-purple-700"
                }  `}
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Baju
              </button>
            </li>
            <li
              className={`${
                state === 4
                  ? "text-white hover:text-gray-700"
                  : "hover:text-white"
              }`}
            >
              <button
                onClick={() => setState(4)}
                className={`shadow-md toggle rounded-xl flex p-2.5 text-right ${
                  state === 4
                    ? "bg-purple-700 hover:bg-purple-200"
                    : "bg-purple-200 hover:bg-purple-700"
                }  `}
              >
                <BsSearch className=" h-4 w-4 fill-current" />
                <span
                  className="iconify mt-1 mr-1"
                  data-icon="carbon:search"
                ></span>
                Elektronik
              </button>
            </li>
            <li
              className={`${
                state === 5
                  ? "text-white hover:text-gray-700"
                  : "hover:text-white"
              }`}
            >
              <button
                onClick={() => setState(5)}
                className={`shadow-md toggle rounded-xl flex p-2.5 text-right ${
                  state === 5
                    ? "bg-purple-700 hover:bg-purple-200"
                    : "bg-purple-200 hover:bg-purple-700"
                }  `}
              >
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
