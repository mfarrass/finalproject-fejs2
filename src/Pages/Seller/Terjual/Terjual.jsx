import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import API from "../../../API";
import CardTerjual from "../../../Components/CardTerjual/CardTerjual";

import ErrorAlert from "../../../Components/ErrorAlert/ErrorAlert";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const Terjual = () => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    API.get("/sellers/products?filter=sold", {
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
        console.log(err);
        if (err.response.data.code === 404) {
          setMessage(
            "Belum ada produkmu yang diminati nih, sabar ya rejeki gak kemana kok"
          );
        } else {
          toast.error("Ada Kesalahan Dalam Pengambilan Data");
          setError("Terjadi kesalahan");
        }
        setIsLoading(false);
      });
  }, [user]);

  return (
    <>
      {message && <div className="text-center">{message}</div>}
      {isLoading && !error && <LoadingSpinner />}
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {!isLoading && !error && (
        <div className="md:flex-1 grid grid-cols-2 gap-6 px-2 md:grid-cols-3 md:px-0">
          {products.map((product, i) => (
            <CardTerjual
              key={i}
              nama={product.name}
              kategori={product.ProductCategory.map(
                (category, i) => `${category.Category.name} `
              )}
              harga={product.price}
              img={product.ProductImage[0].image}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Terjual;
