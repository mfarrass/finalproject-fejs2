import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import API from "../../API";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert";
import WarningAlert from "../../Components/WarningAlert/WarningAlert";

const SearchPage = () => {
  const { keyword } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    API.get(
      `/buyers/products/?page=1&size=12&search=${
        keyword === null ? "" : keyword
      }`,
      {
        headers: {
          Authorization: user ? user.access_token : "",
        },
      }
    )
      .then((res) => {
        setLoading(false);
        setProducts(res.data.data.products);
        console.log(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.data.code === 404) {
          setMessage("Produk Tidak Ditemukan");
          return;
        }
        setError("Ada Kesalahan Dalam Pengambilan Data");
      });
  }, [user]);

  return (
    <div>
      SearchPage
      <div className="container mt-20 max-w-screen mx-auto">
        <div className="mx-auto text-center my-8">
          <p className="text-xl md:text-3xl font-bold mx-5 mb-4">
            Hasil Pencarian
          </p>
          {WarningAlert && !loading && !products && (
            <WarningAlert>{message}</WarningAlert>
          )}
          {loading && !error && <LoadingSpinner />}
          {error && !loading && <ErrorAlert> {error} </ErrorAlert>}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-3 md:mx-3">
            {!loading &&
              !error &&
              products &&
              products.map((product, i) => (
                <Card
                  key={i}
                  id={product.id}
                  nama={product.name}
                  kategori={product.ProductCategory.map(
                    (category, i) => `${category.Category.name} `
                  )}
                  harga={product.price}
                  img={
                    product.ProductImage.length === 0
                      ? "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
                      : product.ProductImage[0].image
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
