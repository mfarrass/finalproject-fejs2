import React from "react";
import Banner from "./Components/Banner";
import ButtonCategory from "./Components/ButtonCategory";
// import ProductCard from "./Components/ProductCard";
import ButtonAdd from "./Components/ButtonAdd";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import API from "../../API";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert";

const Home = () => {
  //auth
  const { user } = useSelector((state) => state.auth);

  /////////////////////////////////////////////////////////////
  //Product State
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  /////////////////////////////////////////////////////////////

  useEffect(() => {
    setLoading(true);
    setError("");
    API.get(
      `/buyers/products/?page=1&size=12&category=${
        category === null ? "" : category
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
        setError("Ada Kesalahan Dalam Pengambilan Data");
        console.log(err);
      });
  }, [user, category]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="min-h-screen bg-white">
            <Banner />
            <div className="mx-3 lg:mx-[200px]">
              <h1 className="mb-3 mt-8 text-xl font-bold ">
                Telusuri Kategori
              </h1>
              <ButtonCategory state={category} setState={setCategory} />
              {error ? (
                <ErrorAlert>{error}</ErrorAlert>
              ) : (
                <div className="my-6 pb-20 grid grid-cols-2 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
                  {products.map((product, i) => (
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
              )}
            </div>
            {!error && <ButtonAdd />}
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
