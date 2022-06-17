import React from "react";

const Preview = () => {
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
            <div className="w-[328px] h-[98px] lg:w-[336px] lg:h-[266px] rounded-2xl indent-4 p-1 bg-white border-2">
              <div className="grid grid-rows-3 content-center mt-3">
                <p className="font-semibold mt-1">Jam Tangan Casio</p>
                <p className="text-xs font-thin mt-1 opacity-70">Aksesoris</p>
                <p className="font-medium">Rp.250.000</p>
                <div className="sm:invisible lg:visible lg:flex lg:flex-col lg:mt-5">
                  <button className="w-[304px] h-[48px] bg-purple-700 text-white rounded-xl self-center">
                    Terbitkan
                  </button>
                  <button className="w-[304px] h-[48px] border border-purple-700 text-black rounded-xl mt-3 self-center">
                    Edit
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
      <div className="flex justify-center lg:justify-start lg:ml-56 lg:mt-50">
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
      <button className="w-[328px] h-[48px] bg-purple-700 sticky -ml-2 translate-x-2/4 bottom-10 rounded-2xl text-white lg:invisible">
        Terbitkan
      </button>
    </div>
  );
};

export default Preview;
