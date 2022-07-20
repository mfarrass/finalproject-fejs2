import React from "react";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import authSlice from "../../Features/authSlice";
import { useDispatch } from "react-redux";

const DropDownIcon = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={`absolute z-0 right-0 w-40 py-3 mt-8 bg-gradient-to-l from-gray-100 to-white rounded shadow-lg ${
          props.state ? "sm:block " : "hidden"
        }`}
      >
        <button
          onClick={() => props.setState(false)}
          className="absolute -mt-3 -ml-2 p-1 text-xs sm:text-sm bg-white text-gray-500 rounded font-medium
         shadow border focus:outline-none transform active:scale-50 transition-transform duration-300 hover:bg-purple-700
          hover:text-white hover:-translate-y-1 hover:scale-110 dark:text-gray-700 dark:hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-700 hover:text-white">
          <Link to="/info-profil">
            {" "}
            <span className="px-3">
              <VscAccount className="inline-block absolute z-10 text-center -mx-2 mt-1" />
            </span>
            Profile
          </Link>
        </div>
        <div className="block px-4 py-2 text-sm hover:font-bold text-gray-700 hover:bg-purple-700 hover:text-gray-100">
          <button onClick={() => dispatch(authSlice.actions.logout())}>
            {" "}
            <span className="px-3">
              <CgLogOut className="inline-block absolute z-10 text-center -mx-2 mt-1" />
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDownIcon;
