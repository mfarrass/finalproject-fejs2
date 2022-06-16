

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Seller from "./Pages/Seller/Seller";
import Produk from "./Pages/Seller/Produk/Produk";
import Terjual from "./Pages/Seller/Terjual/Terjual";
import Diminati from "./Pages/Seller/Diminati/Diminati";
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
      </Route>
    </Routes>
  );
}

export default App;
