<<<<<<< HEAD


import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> 18babd4b4b8d6475041cc1e490f12930564d5658

import Seller from "./Pages/Seller/Seller";
import Produk from "./Pages/Seller/Produk/Produk";
import Terjual from "./Pages/Seller/Terjual/Terjual";
import Diminati from "./Pages/Seller/Diminati/Diminati";
<<<<<<< HEAD
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Pages/Home/Home'
function App() {
  return (
    <Routes>
      <Route path="" element={<Sidebar/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/seller" element={<Seller />}>
          <Route path="" element={<Produk />} />
          <Route path="terjual" element={<Terjual />} />
          <Route path="diminati" element={<Diminati />} />
        </Route>
=======
import Login from "./Pages/Login/Login";
import InfoProfil from "./Pages/InfoProfil/InfoProfil";
import InfoProduct from "./Pages/InfoProduct/InfoProduct";
import Daftar from "./Pages/Daftar/Daftar";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/seller" element={<Seller />}>
        <Route path="" element={<Produk />} />
        <Route path="terjual" element={<Terjual />} />
        <Route path="diminati" element={<Diminati />} />
>>>>>>> 18babd4b4b8d6475041cc1e490f12930564d5658
      </Route>
      <Route path="/info-profil" element={<InfoProfil />}></Route>
      <Route path="/info-product" element={<InfoProduct />}></Route>
    </Routes>
  );
}

export default App;
