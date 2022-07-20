import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Seller from "./Pages/Seller/Seller";
import Produk from "./Pages/Seller/Produk/Produk";
import Terjual from "./Pages/Seller/Terjual/Terjual";
import Diminati from "./Pages/Seller/Diminati/Diminati";
import Login from "./Pages/Login/Login";
import InfoProfil from "./Pages/InfoProfil/InfoProfil";
import InfoProduct from "./Pages/InfoProduct/InfoProduct";
import Daftar from "./Pages/Daftar/Daftar";
import Preview from "./Pages/Seller/Preview/Preview";
import HalamanProduct from "./Pages/Buyer/HalamanProduct";
import SellerTawar from "./Pages/SellerTawar/SellerTawar";
import Home from "./Pages/Home/Home";
import NavbarIcon from "./Components/NavbarIcon/NavbarIcon";
import NotifikasiDesktop from "./Pages/NotiifikasiDesktop/NotifikasiDesktop";
// import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Auth from "./Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "./Features/authSlice";
import Navbar from "./Components/Navbar/Navbar";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./Pages/Wishlist/Wishlist";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(authSlice.actions.retrieveLocalStorage());
    }
  }, [dispatch]);
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        theme="colored"
        autoClose={2000}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />

        <Route path="" element={user ? <NavbarIcon /> : <Navbar />}>
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
          <Route element={<Auth />}>
            <Route path="/info-profil" element={<InfoProfil />} />
            <Route
              path="/buyer-product/:productId"
              element={<HalamanProduct />}
            />
            <Route path="/preview/:prodId" element={<Preview />} />
            <Route path="/notifikasi" element={<NotifikasiDesktop />} />
            <Route path="/seller-tawar/:idTawar" element={<SellerTawar />} />
            <Route path="/info-product" element={<InfoProduct />} />
            <Route path="/seller" element={<Seller />}>
              <Route path="" element={<Produk />} />
              <Route path="terjual" element={<Terjual />} />
              <Route path="diminati" element={<Diminati />} />
            </Route>
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
