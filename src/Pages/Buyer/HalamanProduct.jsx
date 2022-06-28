import React from "react";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import Notifikasi from "../../Components/Notifikasi/Notifikasi";
import SwiperGambar from "../../Components/SwiperGambar/SwiperGambar";

const HalamanProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);

  const [disableButton, setDisableButton] = useState(false);
  return (
    <div>
      {/**main container */}
      <div className="relative h-auto w-full pb-5 pt-5 md:flex md:justify-center md:mt-16">
        <div className="md:grid md:grid-cols-2 md:gap-3 md:px-40 xl:ml-60 lg:ml-32 ">
          {/**container gambar utama */}
          <div className="flex justify-center">
            <div className="h-[300px] w-[360px] md:h-full md:w-full z-0">
              <SwiperGambar />
            </div>
          </div>
          {/**container nama barang dan penjual */}
          <div className="jam_tangan+penjual md:pt-8">
            <div className="flex justify-center md:justify-start">
              <div className="bg-white mx-4 -mt-8 h-[98px] w-[328px] border-2 rounded-2xl md:h-[204px] md:w-[336px] shadow-lg z-10">
                <div className="ml-3 grid w-[328px]">
                  <p className="font-semibold mt-3">Jam Tangan Casio</p>
                  <p className="text-xs font-thin mt-1 opacity-70">Aksesoris</p>
                  <p className="font-medium">Rp.250.000</p>
                  {/**button modal desktop */}
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className={`w-[304px] h-[48px] rounded-xl invisible md:visible mt-10 px-3.5 py-3.5 hover:bg-purple-400 focus:scale-90 ${
                      disableButton
                        ? "bg-slate-600 opacity-25 text-white"
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
            <div className="flex justify-center md:justify-start">
              <div className="mx-4 mt-4 h-[80px] w-[328px] rounded-2xl border-2 md:h-[80px] md:w-[336px]">
                <div className="flex w-[328px]">
                  <div className="ml-3 mt-3 h-[48px] w-[48px]">
                    <img
                      src="./fotopenjual.png"
                      alt=""
                      className="h-[48px] w-full"
                    />
                  </div>
                  <div className="mt-2 ml-4 grid w-full">
                    <p className="font-semibold">Nama Penjual</p>
                    <p className="font-thin text-xs opacity-70">Kota</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**container deskripsi */}
          <div className="flex justify-center">
            <div className="mt-4 p-3 h-auto w-[328px] border-2 rounded-2xl md:col-span-1 md:h-auto md:w-full">
              <p className="font-semibold mt-2">Deskripsi</p>
              <p className="font-thin opacity-70 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget tincidunt elit. Praesent interdum ex magna, id tincidunt
                felis elementum aliquam. Pellentesque quis odio quis diam
                interdum commodo eu vel eros. Mauris facilisis sem ac nisl
                ultrices consequat. Vestibulum feugiat odio non velit viverra
                euismod. Maecenas a interdum enim. Suspendisse rhoncus bibendum
                condimentum. Donec id quam id metus sollicitudin fermentum. Ut
                imperdiet metus vitae ornare interdum. Fusce ac nisl dapibus,
                suscipit augue vitae, sagittis enim. Sed non hendrerit dolor. Ut
                non malesuada justo. Curabitur aliquam libero vitae ipsum
                tristique iaculis eget ac neque. Sed feugiat augue eu ante
                egestas luctus.
              </p>
            </div>
          </div>
        </div>
        {/**button modal untuk mobile */}
        <div className="sticky bottom-10 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className={
              "mx-4 mt-4 text-white w-[328px] h-[48px] rounded-2xl bg-purple-600 md:hidden"
            }
          >
            Saya Tertarik dan Ingin Nego
          </button>
        </div>
      </div>

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
              className="w-[296px] bg-purple-700 text-white active:bg-purple-700 hover:bg-purple-400 focus:scale-90 font-bold uppercase text-sm py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
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
