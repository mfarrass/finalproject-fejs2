import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavbarAuth = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-0 px-11 md:hidden block mt-8 mb-8">
      <button
        className="bg-white rounded-full p-2"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft size={30} />
      </button>
    </div>
  );
};

export default NavbarAuth;
