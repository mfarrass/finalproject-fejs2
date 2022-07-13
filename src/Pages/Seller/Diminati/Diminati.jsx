import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import API from "../../../API";
import Card from "../../../Components/Card/Card";
import { toast } from "react-toastify";
import ErrorAlert from "../../../Components/ErrorAlert/ErrorAlert";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

import CardDiminati from "../../../Components/CardDiminati/CardDiminati";
const Diminati = () => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/sellers/products?filter=interested", {
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
        if (err.response.data.code === 404) {
          setError(err.response.data.message);
        } else {
          setError("Terjadi kesalahan");
        }
        setIsLoading(false);
        toast.error("Ada Kesalahan Dalam Pengambilan Data");
      });
  }, []);

  console.log(products);
  return (
    <>
      {isLoading && !error && <LoadingSpinner />}
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {!isLoading && !error && (
        <div className="md:flex-1 grid grid-cols-2 gap-6 px-2 md:grid-cols-3 md:px-0">
          {products.map((product, i) => (
            <Link to={`/seller-tawar/${product.id}`} key={i}>
              <CardDiminati
                nama={product.Product.name}
                kategori={product.Product.ProductCategory.map(
                  (category, i) => `${category.Category.name} `
                )}
                harga={product.Product.price}
                img={product.Product.ProductImage[0].image}
                hargaTawar={product.price}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Diminati;
