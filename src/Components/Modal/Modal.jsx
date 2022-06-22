import React from "react";
import { GrClose } from "react-icons/gr";

export default function Modal({ visible, onClose, children }) {
  if (!visible) return null;

  return (
    <>
      <div className="justify-center lg:items-center items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[360px] h-[438px] mx-auto max-w-3xl">
          {/*content*/}
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-end pr-8 pt-4 sm:invisible lg:visible">
              <button onClick={onClose} className="flex justify-end items-end">
                <GrClose />
              </button>
            </div>
            <div className="flex justify-center">
              <button className="mb-4 -mt-3 lg:invisible" onClick={onClose}>
                <img src="./close_button_modal_mobile.png" alt="" />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
