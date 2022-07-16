import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import SwiperGambar from "../../../Components/SwiperGambar/SwiperGambar";
import { useParams } from "react-router-dom";
import API from "../../../API";

const Preview = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState();
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.get(`/sellers/products/${prodId}`, {
      headers: {
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        setProduct(res.data.data.product);
        setLoading(false);
        console.log(product);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  }, [user, prodId]);

  return (
    <div>
      {/**main container */}
      <div className="relative h-auto w-full pb-5 pt-5">
        <div className="md:grid md:grid-cols-2 md:gap-3 md:px-40 xl:ml-60 lg:ml-32">
          {/**container gambar utama */}
          <div className="flex justify-center">
            <div className="h-[300px] w-[360px] md:h-full md:w-full">
              {/* <img
                src="./casio.png"
                alt=""
                className="h-[300px] w-[360px] md:h-full md:w-full rounded-2xl"
              /> */}
              {/* <SwiperGambar /> */}
            </div>
          </div>
          {/**container nama barang dan penjual */}
          <div className="jam_tangan+penjual md:pt-8">
            <div className="flex justify-center md:justify-start">
              <div className="bg-white mx-4 -mt-8 h-[98px] w-[328px] border-2 rounded-2xl md:h-auto md:w-[336px] shadow-lg">
                <div className="ml-3 grid w-[328px]">
                  <p className="font-semibold mt-3">Jam Tangan Casio</p>
                  <p className="text-xs font-thin mt-1 opacity-70">Aksesoris</p>
                  <p className="font-medium">Rp.250.000</p>
                  {/**button modal desktop */}
                  <button className="w-[304px] h-[48px] rounded-xl invisible md:visible mt-10 px-3.5 hover:bg-purple-400 focus:scale-90 bg-purple-700 text-white">
                    Terbitkan
                  </button>
                  <button className="w-[304px] h-[48px] rounded-xl invisible md:visible my-4 px-3.5 hover:bg-slate-300 focus:scale-90 bg-purple-white text-purple-700 border-2 border-purple-700">
                    Edit
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
        {/**button untuk mobile */}
        <div className="sticky bottom-10 flex justify-center">
          <button className="mx-4 mt-4 text-white w-full h-[48px] rounded-2xl bg-purple-600 md:hidden">
            Terbitkan
          </button>
          <button className="mx-4 mt-4 text-purple-700 border-2 border-purple-700 w-full h-[48px] rounded-2xl bg-white md:hidden">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
