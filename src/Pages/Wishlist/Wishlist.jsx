import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import API from "../../API";
import { useSelector } from "react-redux/es/exports";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert";
import WarningAlert from "../../Components/WarningAlert/WarningAlert";
import ProfileCard from "./Components/ProfileCard";

export default function Wishlist(props) {
  const { user } = useSelector((state) => state.auth);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    API.get("/buyers/wishlists", {
      headers: {
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        setLoading(false);
        setWishlist(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 404) {
          setMessage("Belum ada wishlist");
          toast.warning("Belum ada wishlist");
        }
      });
  }, []);

  return (
    <>
      {error && <ErrorAlert />}
      {loading && <LoadingSpinner />}
      {!loading && !error && (
        <div className="container mt-20 max-w-screen mx-auto">
          {/**Banner Nama Penjual */}
          {/* Card Profile Penjual */}
          <ProfileCard />
          {/* Card Profile Penjual end */}
          <div className="mx-auto text-center my-8">
            <p className="text-xl md:text-3xl font-bold mx-5">
              DAFTAR WISHLIST
            </p>
          </div>
          {message && !loading && <WarningAlert>{message}</WarningAlert>}
          {!message && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-3 md:mx-">
              {wishlist.map((item, i) => (
                <Card
                  key={i}
                  id={item.Product.id}
                  img={item.Product.ProductImage[0].image}
                  nama={item.Product.name}
                  kategori={item.Product.ProductCategory.map(
                    (category, i) => `${category.Category.name} `
                  )}
                  harga={item.Product.price}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
