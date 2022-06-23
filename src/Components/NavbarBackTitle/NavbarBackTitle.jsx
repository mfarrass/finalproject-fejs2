import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavbarBackTitle = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-20 flex items-center">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="w-10 flex justify-center"
        >
          <AiOutlineArrowLeft size={30} />
        </button>
      </div>
      <div className="ml-auto mr-auto">
        <h3 className="font-semibold">{props.children}</h3>
      </div>
    </div>
  );
};

export default NavbarBackTitle;
