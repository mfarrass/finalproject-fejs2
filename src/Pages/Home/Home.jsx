import React from "react";
// import Navbar from './Components/Navbar'
// import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Banner from "./Components/Banner";
import ButtonCategory from "./Components/ButtonCategory";
import ProductCard from "./Components/ProductCard";
import ButtonAdd from "./Components/ButtonAdd";
import NavbarIcon from "../../Components/NavbarIcon/NavbarIcon";
import BoxNotification from "../../Components/BoxNotification/BoxNotification";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <NavbarIcon /> */}
      <Banner />
      <div className="mx-3 lg:mx-[200px]">
        <h1 className="mb-3 mt-8 text-xl font-bold ">Telusuri Kategori</h1>
        <ButtonCategory />
        <div className="my-6 pb-6 grid grid-cols-2 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
          <Card
            nama="Sepatu Lokal"
            kategori="Sepatu"
            harga="80.000"
            img="https://cdn1-production-images-kly.akamaized.net/SjzpUdT6s-6FDivNYNMi7l8ix3E=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3406097/original/002318700_1616163517-95641484_328123948168136_7478771153872793130_n.jpg"
          />
        </div>
      </div>
      {/* <BoxNotification /> */}
      <ButtonAdd />
      <Footer />
    </div>
  );
};

export default Dashboard;
