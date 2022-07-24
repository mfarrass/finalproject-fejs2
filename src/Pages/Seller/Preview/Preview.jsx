import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import SwiperGambar from "../../../Components/SwiperGambar/SwiperGambar";
import { Link, useParams } from "react-router-dom";
import API from "../../../API";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import ErrorAlert from "../../../Components/ErrorAlert/ErrorAlert";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState();
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    API.get(`/sellers/products/${prodId}`, {
      headers: {
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        setProduct(res.data.data.detailProduct);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ada Kesalahan Saat Pengambilan Data");
        toast.error("Ada Kesalahan Saat Pengambilan Data");
        setLoading(false);
      });
  }, [user, prodId]);

  const handleTerbitkan = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    API.put(
      `/sellers/products/${prodId}`,
      {
        id: prodId,
      },
      { headers: { Authorization: user ? user.access_token : "" } }
    )
      .then((res) => {
        setButtonLoading(false);
        toast.success("Produk Berhasil Diterbitkan");
        navigate("/seller");
      })
      .catch((err) => {
        setButtonLoading(false);
        toast.error("Ada Kesalahan Saat Terbitkan Produk");
      });
  };

  const deleteProduct = () => {
    console.log("Delete Product");
  };

  return (
    <>
      {error && !loading && (
        <div className="flex justify-center items-center w-screen h-screen">
          <ErrorAlert>
            {error}
            <Link to="/info-profil" className="font-bold">
              {" "}
              Lengakapi Disini
            </Link>
          </ErrorAlert>
        </div>
      )}
      {loading && <LoadingSpinner />}
      {!loading && product && (
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
                  <SwiperGambar images={product.ProductImage} />
                </div>
              </div>
              {/**container nama barang dan penjual */}
              {loading && <LoadingSpinner />}
              {!error && !loading && (
                <div className="jam_tangan+penjual md:pt-8 md:mt-20">
                  <div className="flex justify-center md:justify-start">
                    <div className="bg-white mx-4 -mt-8 h-[98px] w-[328px] border-2 rounded-2xl md:h-auto md:w-[336px] shadow-lg">
                      <div className="ml-3 grid w-[328px]">
                        <p className="font-semibold mt-3">{product.name}</p>
                        {product.ProductCategory.map((item, i) => (
                          <p
                            key={i}
                            className="text-xs font-thin mt-1 opacity-70"
                          >
                            {item.Category.name}
                          </p>
                        ))}
                        <p className="font-medium">
                          {" "}
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(product.price)}
                        </p>
                        {/**button modal desktop */}
                        {buttonLoading ? (
                          <div className="flex justify-center my-8">
                            <svg
                              role="status"
                              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                          </div>
                        ) : (
                          <>
                            <button
                              disabled={product.publish}
                              onClick={handleTerbitkan}
                              className="w-[304px] h-[48px] mb-5 rounded-xl invisible md:visible mt-10 px-3.5 hover:bg-purple-400 focus:scale-90 bg-purple-700 text-white disabled:bg-purple-200"
                            >
                              Terbitkan
                            </button>
                            <button
                              // disabled={product.publish}
                              onClick={() => {
                                deleteProduct(product.id);
                              }}
                              className="w-[304px] h-[48px] mb-5 rounded-xl invisible md:visible  hover:bg-red-400 focus:scale-90 bg-red-700 text-white disabled:bg-red-200"
                            >
                              Hapus
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <div className="mx-4 mt-4 h-[80px] w-[328px] rounded-2xl border-2 md:h-[80px] md:w-[336px]">
                      <div className="flex w-[328px]">
                        <div className="ml-3 mt-3 h-[48px] w-[48px]">
                          <img
                            src={product.User.profile_picture}
                            alt=""
                            className="rounded-lg  aspect-ratio-1/1 w-full"
                          />
                        </div>
                        <div className="mt-2 ml-4 grid w-full">
                          <p className="font-semibold">{product.User.nama}</p>
                          <p className="font-thin text-xs opacity-70">
                            {product.User.kota}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/**container deskripsi */}
              <div className="flex justify-center">
                <div className="mt-4 p-3 h-auto w-[328px] border-2 rounded-2xl md:col-span-1 md:h-auto md:w-full">
                  <p className="font-semibold mt-2">Deskripsi</p>
                  <p className="font-thin opacity-70 mt-5">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
            {/**button untuk mobile */}
            <div className="sticky bottom-10 flex justify-center">
              <button
                disabled={product.publish}
                className="mx-4 mt-4 disabled:bg-purple-200 text-white w-full h-[48px] rounded-2xl bg-purple-600 md:hidden"
              >
                Terbitkan
              </button>
              <button
                onClick={() => {
                  deleteProduct(product.id);
                }}
                className="mx-4 mt-4 text-red-700 border-2 border-red-700 w-full h-[48px] rounded-2xl bg-white md:hidden"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;
