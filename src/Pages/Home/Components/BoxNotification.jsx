import React from 'react'


const BoxNotification = () => {
  return (
    <>

    <div className="absolute z-30 right-0 top-0 h-screen -my-10 place-items-center sm:block hidden">
  <div className="lg:w-4/5 sm:w-3/5 w-11/12 mx-20 bg-white dark:bg-gray-800 rounded-xl border p-4 shadow-sm">
  <button
        class="inline-flex text-xs sm:text-sm bg-white text-gray-500 rounded font-medium
         shadow border focus:outline-none transform active:scale-50 transition-transform duration-300 hover:bg-purple-700
          hover:text-white hover:-translate-y-1 hover:scale-110 dark:text-gray-800 dark:hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>
    <div className="mt-2 px-6 py-4 rounded-lg shadow w-full">
      <div className=" inline-flex items-center justify-between w-full">
        <div className="inline-flex items-center">
          <img
            src="/Imgs/jam-kecil.png"
            alt="Training Icon" className="w-6 h-6 mr-3" />
           <p className="text-xs text-gray-500">
          Penawaran Produk
        </p>
        </div>
        <p className="text-xs text-gray-500">
          20 Apr, 14:40
        </p>
        <span class="rounded-full -ml-6 w-2 h-2 bg-red-500"></span>
      </div>
      <p className="mt-1 text-sm">
        Jam Tangan Casio
      </p>
      <p className="mt-1 text-sm">
        Rp 250.000
      </p>
      <p className="mt-1 text-sm">
        Ditawar Rp 200.000
      </p>
    </div>
    <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
      <div className=" inline-flex items-center justify-between sm:justify-items-stretch w-full">
        <div className="inline-flex items-center">
          <img
            src="/Imgs/jam-kecil.png"
            alt="Messages Icon" className="w-6 h-6 mr-3" />
          <p className="text-xs text-gray-500">
          Berhasil Diterbitkan
        </p>
        </div>
        <p className="text-xs text-gray-500">
          19 Apr, 12:00
        </p>
        <span class="rounded-full -ml-6 w-2 h-2 bg-red-500"></span>
      </div>
      <p className="mt-1 text-sm">
      Jam Tangan Casio
      </p>
      <p className="mt-1 text-sm">
      Rp 250.000
      </p>
    </div>
  </div>
</div>
</>

  )
}

export default BoxNotification