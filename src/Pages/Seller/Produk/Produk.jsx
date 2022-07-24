import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../Components/Card/Card";
import API from "../../../API";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../../Components/ErrorAlert/ErrorAlert";
import { toast } from "react-toastify";
import CardSeller from "../../../Components/CardSeller/CardSeller";

const Produk = () => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/sellers/products", {
      headers: {
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        setIsLoading(false);
        setProducts(res.data.data.products);
        if (res.data.data.products.length === 0) {
          toast.warning("Tidak ada produk yang tersedia");
        }
      })
      .catch((err) => {
        setError("Ada Kesalahan Dalam Pengambilan Data");
        setIsLoading(false);
        toast.error("Ada Kesalahan Dalam Pengambilan Data");
      });
  }, []);

  return (
    <>
      {isLoading && !error && <LoadingSpinner />}
      {error && (
        <ErrorAlert>
          {" "}
          Ada Kesalahan Dalam Komunikasi Data Silahkan Periksa Data Pribadi Anda
        </ErrorAlert>
      )}
      {!isLoading && !error && (
        <div className="md:flex-1 grid grid-cols-2 gap-6 px-2 md:grid-cols-3 md:px-0">
          <Link to="/info-product">
            <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-slate-300 p-5 shadow-sm">
              <div className="w-full">
                <div className="flex justify-center text-3xl font-bold">+</div>
                <div className="flex justify-center">Tambah Produk</div>
              </div>
            </div>
          </Link>

          {products.map((product, i) => (
            <CardSeller
              key={i}
              nama={product.name}
              kategori={product.ProductCategory.map(
                (category, i) => `${category.Category.name} `
              )}
              harga={product.price}
              img={product.ProductImage[0].image}
              soldAt={product.soldAt}
              publish={product.publish}
              id={product.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Produk;
