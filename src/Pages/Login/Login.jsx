import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="md:grid md:grid-cols-2  w-screen h-screen overflow-hidden">
      <div className="col-span-1 bg-login bg-cover"></div>
      <div className="col-span-1 flex  items-center">
        <div className="px-12 w-full">
          <div className="bg-purple-700 w-24 mb-10 aspect-[12/4] hidden md:block h-full"></div>
          <h1 className="font-bold text-3xl ">Masuk</h1>
          <div className="mt-11">
            <div>
              <label htmlFor="email" className="font-normal text-sm">
                Email
              </label>
              <div className="border-gray-500 border-2 py-3 rounded-xl w-full mt-2 px-3">
                <input
                  type="email"
                  placeholder="Contoh: johndee@gmail.com"
                  className="w-full text-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="font-normal text-sm ">
                Password
              </label>
              <div className="border-gray-500 border-2 py-3 rounded-xl w-full mt-2 px-3">
                <input
                  type="email"
                  placeholder="Contoh: johndee@gmail.com"
                  className="w-full text-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <button className="bg-purple-700 hover:bg-purple-900 text-white text-sm w-full h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300">
                Masuk
              </button>
            </div>
            <div className="mt-11">
              <h3 className="text-center">
                Belum punya akun?{" "}
                <span className="font-bold text-purple-700">
                  <Link to="#">Daftar di sini</Link>
                </span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
