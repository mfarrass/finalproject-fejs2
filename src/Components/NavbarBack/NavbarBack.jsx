import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavbarBack = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`lg:ml-[341px] ml-2 ${props.className}`}>
        <button
          onClick={(e) => {
            navigate(-1);
            e.preventDefault();
          }}
        >
          <AiOutlineArrowLeft size={42} />
        </button>
      </div>
      <div className="md:hidden flex justify-center font-bold -mt-7 mb-5">
        <p>{props.children}</p>
      </div>
    </>
  );
};

export default NavbarBack;
