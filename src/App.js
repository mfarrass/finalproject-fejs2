import {  Routes, Route, } from "react-router-dom";
import Seller from "./Pages/Seller/Seller";
import Produk from "./Pages/Seller/Produk/Produk";
import Terjual from "./Pages/Seller/Terjual/Terjual";
import Diminati from "./Pages/Seller/Diminati/Diminati";
import Login from "./Pages/Login/Login";
import InfoProfil from "./Pages/InfoProfil/InfoProfil";
import InfoProduct from "./Pages/InfoProduct/InfoProduct";
import Daftar from "./Pages/Daftar/Daftar";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Pages/Home/Banner";





function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/" element={<Navbar />}>
        <Route path="/seller" element={<Seller />}>
          <Route path="" element={<Produk />} />
          <Route path="terjual" element={<Terjual />} />
          <Route path="diminati" element={<Diminati />} />
        </Route>
      <Route path="/info-profil" element={<InfoProfil />}></Route>
      <Route path="/info-product" element={<InfoProduct />}></Route>
      <Route path="/banner" element={<Banner />}></Route>
      </Route>
      
    </Routes>
  );
}

export default App;
