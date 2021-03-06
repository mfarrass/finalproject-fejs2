import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";
import SwiperGambar from "../../Components/SwiperGambar/SwiperGambar";
import API from "../../API";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux/es/exports";
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const HalamanProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  const [disableButton, setDisableButton] = useState(false);

  //product
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tawarInput, setTawarInput] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const [checkWishlist, setCheckWishlist] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.get(`/buyers/products/${productId}`, {
      headers: {
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        setProduct(res.data.data.products);
        setLoading(false);
        setTawarInput(res.data.data.products.price);
        setCheckWishlist(res.data.data.cekWishlist);

        if (res.data.data.cekPenawaran) {
          setDisableButton(true);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  }, [user, productId]);

  const handleOnClickWishlist = () => {
    setLoadingWishlist(true);
    if (checkWishlist === false) {
      API.post(
        `/buyers/wishlists/`,
        { productId: productId },
        { headers: { Authorization: user ? user.access_token : "" } }
      )
        .then((res) => {
          toast.success("Berhasil ditambahkan ke wishlist");
          setCheckWishlist(true);
          setLoadingWishlist(false);
        })
        .catch((err) => {
          toast.error("Gagal Menambahkan ke wishlist");
          setLoadingWishlist(false);
        });
    } else if (checkWishlist === true) {
      API.delete(`/buyers/wishlists/products/${productId}`, {
        headers: { Authorization: user ? user.access_token : "" },
      })
        .then((res) => {
          toast.success("Berhasil dihapus dari wishlist");
          setCheckWishlist(false);
          setLoadingWishlist(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Gagal Menghapus dari wishlist");
          setLoadingWishlist(false);
        });
    }
  };

  const submitTawar = () => {
    setDisableButton(true);
    API.post(
      `/buyers/products/${productId}/offer`,
      {
        price: tawarInput,
      },
      {
        headers: {
          Authorization: user ? user.access_token : "",
        },
      }
    )
      .then((res) => {
        setDisableButton(true);
        setShowModal(false);
        toast.success("Tawaran berhasil dikirim");
      })
      .catch((err) => {
        setDisableButton(false);
        setShowModal(false);
        toast.error("Tawaran gagal dikirim");
        console.log(err);
      });
  };
  return (
    <>
      {error && !loading && (
        <div className="flex justify-center items-center w-screen h-screen">
          <ErrorAlert>
            {error}
            <Link to="/info-profil" className="font-bold">
              {" "}
              Lengkapi Disini
            </Link>
          </ErrorAlert>
        </div>
      )}
      {loading && <LoadingSpinner />}
      {!error && !loading && (
        <div>
          {/**main container */}
          <div className="relative h-auto w-full pb-5 pt-5 md:flex md:justify-center md:mt-16">
            <div className="md:grid md:grid-cols-2 md:gap-3 md:px-40 xl:ml-60 lg:ml-32 ">
              {/**container gambar utama */}
              <div className="flex justify-center">
                <div className="h-[300px] w-[360px] md:h-full md:w-full z-0">
                  <SwiperGambar images={product.ProductImage} />
                </div>
              </div>
              {/**container nama barang dan penjual */}
              <div className="jam_tangan+penjual md:pt-8">
                <div className="flex justify-center md:justify-start">
                  <div className="bg-white mx-4 -mt-8 h-[98px] w-[328px] border-2 rounded-2xl md:h-auto md:w-[336px] shadow-lg z-10">
                    <div className="ml-3 grid w-[328px]">
                      <p className="font-semibold mt-3">{product.name}</p>
                      <div className="flex gap-2">
                        {product.ProductCategory.map((item, i) => (
                          <p
                            key={i}
                            className="text-xs font-thin mt-1 opacity-70"
                          >
                            {item.Category.name}
                          </p>
                        ))}
                      </div>
                      <p className="font-medium">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(product.price)}
                      </p>
                      {/**button modal desktop */}
                      <button
                        onClick={() => {
                          setShowModal(true);
                        }}
                        className={`w-[304px] h-[48px] rounded-xl invisible md:visible mt-10 px-3.5 py-3.5 hover:bg-purple-400  ${
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
                      {loadingWishlist ? (
                        <div className="flex justify-center items-center mt-4 mb-4">
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
                        <button
                          className="w-[304px] h-[48px] rounded-xl invisible md:visible my-3 border-3 bg-blue-600 border-black px-3.5 py-3.5 hover:bg-blue-500 text-white flex justify-center items-center gap-4"
                          onClick={handleOnClickWishlist}
                        >
                          {checkWishlist ? (
                            <AiFillStar />
                          ) : (
                            <AiOutlineStar size={20} />
                          )}
                          {checkWishlist
                            ? "Sudah di wishlist"
                            : "Tambah ke wishlist"}
                        </button>
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
                          className=" rounded-lg  aspect-ratio-1/1 w-full"
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
            {/**button modal untuk mobile */}
            <div className="sticky bottom-10 flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className={
                  "mx-4 mt-4 p-1 text-white w-[328px] h-[48px] rounded-2xl bg-purple-600 hover:bg-purple-400 focus:scale-90 md:hidden"
                }
              >
                Saya Tertarik dan Ingin Nego
              </button>
              <button
                className="mx-4 mt-4 p-1 text-white w-[328px] h-[48px] rounded-2xl bg-blue-600 hover:bg-blue-500 md:hidden flex items-center justify-center gap-4"
                onClick={handleOnClickWishlist}
              >
                {checkWishlist ? <AiFillStar /> : <AiOutlineStar size={20} />}
                {checkWishlist ? "Sudah di wishlist" : "Tambah ke wishlist"}
              </button>
            </div>
          </div>

          <Modal onClose={handleOnClose} visible={showModal}>
            <div className="flex items-start justify-between rounded-t">
              <p className="font-semibold mx-8">Masukkan Harga Tawaranmu</p>
            </div>
            <p className="w-[296px] mx-8 mt-4 font-thin opacity-40">
              Harga tawaranmu akan diketahui penual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </p>
            {/*body*/}
            <div className="mt-2 relative flex-auto bg-slate-100 shadow-lg rounded-2xl mx-8 p-4 w-[296px]">
              <div className="flex">
                <img
                  src={product.ProductImage[0].image}
                  alt=""
                  className="w-[48px] h-[48px] rounded-lg"
                />
                <div className="ml-4">
                  <p className="font-semibold">{product.name}</p>
                  <p className="font-semibold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(product.price)}
                  </p>
                </div>
              </div>
            </div>
            {/*form*/}
            <form>
              <p className="ml-8 mt-4">Harga Tawar</p>
              <input
                type="number"
                className="w-[296px] h-[48px] mx-8 rounded-2xl border-2 mt-1 indent-4"
                placeholder="Rp.0,00"
                value={tawarInput}
                onChange={(e) => setTawarInput(e.target.value)}
              />
              <div className="flex items-center justify-center p-4">
                <button
                  disabled={disableButton}
                  className="w-[296px] bg-purple-700 text-white active:bg-purple-700 hover:bg-purple-400 focus:scale-90 font-bold uppercase text-sm py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={submitTawar}
                >
                  Kirim
                </button>
              </div>
            </form>
          </Modal>
        </div>
      )}
    </>
  );
};

export default HalamanProduct;
