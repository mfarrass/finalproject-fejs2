import React from "react";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";

const HalamanProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);

  const [disableButton, setDisableButton] = useState(false);
  return (
    <div>
      <div className="container lg:w-full lg:flex lg:px-56 lg:mb-40">
        <div className="flex justify-center lg:flex">
          <div className="w-fill h-[360px] -mb-20 lg:mt-10">
            <img
              src="./casio.png"
              className="lg:w-[600px] lg:h-auto  rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="lg:mt-14 lg:ml-10">
          <div className="flex justify-center container -mt-4">
            <div className="w-[328px] h-[98px] lg:w-[336px] lg:h-[204px] rounded-2xl indent-4 p-1 bg-white border-2">
              <div className="grid grid-rows-3 content-center mt-3">
                <p className="font-semibold mt-1">Jam Tangan Casio</p>
                <p className="text-xs font-thin mt-1 opacity-70">Aksesoris</p>
                <p className="font-medium">Rp.250.000</p>
                <div className="sm:invisible lg:visible lg:flex lg:flex-col lg:mt-5">
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className={`w-[304px] h-[48px] rounded-xl self-center ${
                      disableButton
                        ? "bg-slate-600 text-white"
                        : "bg-purple-700 text-white"
                    }`}
                    disabled={disableButton}
                  >
                    {disableButton
                      ? "Menunggu Respon Penjual"
                      : "Saya Tertarik dan Ingin Nego"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center container">
            <div className="w-[328px] h-[80px] lg:w-[336px] rounded-2xl indent-3 p-1 bg-white mt-4 border-2">
              <div className="flex">
                <div class="flex-none">
                  <img src="./fotopenjual.png" alt="" className="ml-3 my-2" />
                </div>
                <div className="flex flex-col my-2">
                  <div class="flex-none font-semibold">Nama Penjual</div>
                  <p className="font-thin text-xs mt-1 opacity-70">Kota</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start lg:ml-56 lg:mt-60">
        <div className="w-[328px] h-auto lg:w-[600px] lg:h-auto rounded-2xl p-1 bg-white border-2 mt-4 container mb-14">
          <p className="font-semibold ml-3 mt-2">Deskripsi</p>
          <p className="font-thin opacity-70 ml-3 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            eget tincidunt elit. Praesent interdum ex magna, id tincidunt felis
            elementum aliquam. Pellentesque quis odio quis diam interdum commodo
            eu vel eros. Mauris facilisis sem ac nisl ultrices consequat.
            Vestibulum feugiat odio non velit viverra euismod. Maecenas a
            interdum enim. Suspendisse rhoncus bibendum condimentum. Donec id
            quam id metus sollicitudin fermentum. Ut imperdiet metus vitae
            ornare interdum. Fusce ac nisl dapibus, suscipit augue vitae,
            sagittis enim. Sed non hendrerit dolor. Ut non malesuada justo.
            Curabitur aliquam libero vitae ipsum tristique iaculis eget ac
            neque. Sed feugiat augue eu ante egestas luctus.
          </p>
        </div>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="w-[328px] h-[48px] bg-purple-700 sticky -ml-2 left-50% translate-x-2/4 bottom-10 rounded-2xl text-white lg:invisible"
      >
        Saya Tertarik dan Ingin Nego
      </button>
      <Modal onClose={handleOnClose} visible={showModal}>
        <div className="flex items-start justify-between rounded-t">
          <p className="font-semibold mx-8">Masukkan Harga Tawaranmu</p>
        </div>
        <p className="w-[296px] mx-8 mt-4 font-thin opacity-40">
          Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
          segera dihubungi penjual.
        </p>
        {/*body*/}
        <div className="mt-2 relative flex-auto bg-slate-100 shadow-lg rounded-2xl mx-8 p-4 w-[296px]">
          <div className="flex">
            <img
              src="./casio.png"
              alt=""
              className="w-[48px] h-[48px] rounded-lg"
            />
            <div className="ml-4">
              <p className="font-semibold">Jam Tangan Casio</p>
              <p className="font-semibold">250.000</p>
            </div>
          </div>
        </div>
        {/*form*/}
        <form>
          <p className="ml-8 mt-4">Harga Tawar</p>
          <input
            type="text"
            className="w-[296px] h-[48px] mx-8 rounded-2xl border-2 mt-1 indent-4"
            placeholder="Rp.0,00"
          />
          <div className="flex items-center justify-center p-4">
            <button
              className="w-[296px] bg-purple-700 text-white active:bg-purple-700 font-bold uppercase text-sm py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setDisableButton(true)}
            >
              Kirim
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default HalamanProduct;
