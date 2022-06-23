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
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/seller" element={<Seller />}>
        <Route path="" element={<Produk />} />
        <Route path="terjual" element={<Terjual />} />
        <Route path="diminati" element={<Diminati />} />
      </Route>
      <Route path="/info-profil" element={<InfoProfil />}></Route>
      <Route path="/info-product" element={<InfoProduct />}></Route>
      <Route path="/preview" element={<Preview />} />
      <Route path="/buyer-product" element={<HalamanProduct />} />
      <Route path="/seller-tawar" element={<SellerTawar />} />
    </Routes>
  );
}

export default App;
