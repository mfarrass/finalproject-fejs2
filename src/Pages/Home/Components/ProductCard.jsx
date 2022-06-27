import React from 'react'

const ProductCard = () => {
  return (
    <div className='group shadow hover:shadow-md bg-white rounded-lg overflow-hidden cursor-pointer w-fit hover:ring-gray-200'>
      <img className="object-cover hover:scale-90 ease-in duration-100 hover:opacity-75 w-full filter drop-shadow-lg" src="/Imgs/card.png" alt='' />
      <h4 className="text-base py-2 mb-2 ml-2 font-medium text-gray-800">
              Jam Tangan Casio
            </h4>
      <span className="text-gray-500 ml-2">Aksesoris</span>
      <h3 className='font-medium pb-2 ml-2'>Rp. 250.000</h3>
    </div>
  )
}

export default ProductCard