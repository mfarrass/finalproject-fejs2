import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const ButtonAdd = () => {
  return (
    // <div className="sticky bottom-0 w-32 -mt-24 z-20">
    //   <Link
    //     to="/info-product"
    //     className="shadow-lg toggle rounded-md flex justify-center p-2.5 text-white hover:text-gray-700 bg-purple-700 hover:bg-purple-200"
    //   >
    //     <AiOutlinePlus className=" h-4 w-4 fill-current" />
    //     <span className="iconify mt-1 mr-1" data-icon="carbon:search"></span>Add
    //   </Link>
    // </div>
    <div className='sticky flex flex-auto justify-center align-bottom -mt-28 z-20'>
    <a href="#" class="shadow-lg toggle rounded-lg flex p-2.5 text-sm mb-1 dark:text-gray-700 dark:bg-gray-200 text-white hover:text-gray-700 bg-purple-700 hover:bg-gray-200 h-10 w-32 justify-center"><AiOutlinePlus className="mt-0.5 fill-current" /><span className="iconify m-1" data-icon="carbon:search"></span>Add</a>
</div>
  );
};

export default ButtonAdd;
