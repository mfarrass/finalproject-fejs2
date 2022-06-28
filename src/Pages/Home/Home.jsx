import React from 'react'
// import Navbar from './Components/Navbar'
// import NavigationBar from './Components/NavigationBar'
import Banner from './Components/Banner'
import ButtonCategory from './Components/ButtonCategory'
import ProductCard from './Components/ProductCard'
import ButtonAdd from './Components/ButtonAdd'
import NavbarIcon from './Components/NavbarIcon'
import BoxNotification from './Components/BoxNotification'
import Footer from './Components/Footer'




const Dashboard = () => {
  return (
    <div className='min-h-screen bg-white'>
     <NavbarIcon />
    <Banner />
    <div className='mx-3 lg:mx-[200px]'>
        <h1 className='mb-3 mt-8 text-xl font-bold '>Telusuri Kategori</h1>
        <ButtonCategory />
        <div className='my-6 pb-6 grid grid-cols-2 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <BoxNotification />
          <ButtonAdd />
          <Footer />
    </div>
  )
}

export default Dashboard