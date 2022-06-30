import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "../../Components/NavbarAuth/NavbarAuth";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import API from "../../API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Daftar = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const submitHandler = (e) => {
    console.log(
      isStrongPassword(data.password, {
        min: 8,
        minLowercase: 1,
        minSymbols: 0,
      })
    );
    e.preventDefault();
    if (data.name && data.email && data.password) {
      if (isEmail(data.email)) {
        if (
          isStrongPassword(data.password, {
            min: 8,
            minLowercase: 1,
            minSymbols: 0,
          })
        ) {
          API.post("/auth/register", data)
            .then((res) => {
              toast.success("Berhasil mendaftar");
              navigate("/login");
            })
            .catch((err) => {
              toast.error("Ada Kesalahan");
            });
        } else {
          toast.error("Password tidak sesuai");
        }
      } else {
        toast.error("Email tidak sesuai");
      }
    } else {
      toast.error("Data tidak lengkap");
    }
  };
  return (
    <div className="md:grid md:grid-cols-2 w-screen h-screen overflow-hidden">
      <div className="col-span-1 bg-login bg-cover"></div>
      <NavbarAuth />
      <div className="col-span-1 flex  items-center">
        <div className="px-12 w-full">
          <div className="bg-purple-700 w-24 mb-10 aspect-[12/4] hidden md:block h-full"></div>
          <h1 className="font-bold text-3xl ">Daftar</h1>
          <div className="mt-11">
            <div>
              <label htmlFor="email" className="font-normal text-sm">
                Nama
              </label>
              <div className="border-gray-500 border-2 py-3 rounded-xl w-full mt-2 px-3">
                <input
                  type="Nama"
                  placeholder="Nama Lengkap"
                  className="w-full text-gray-500 focus:outline-none"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  name="name"
                  value={data.name}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="font-normal text-sm">
                Email
              </label>
              <div className="border-gray-500 border-2 py-3 rounded-xl w-full mt-2 px-3">
                <input
                  type="email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  name="email"
                  value={data.email}
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
                  type="password"
                  placeholder="Contoh: johndee@gmail.com"
                  className="w-full text-gray-500 focus:outline-none"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  name="password"
                  value={data.password}
                />
              </div>
            </div>
            <div>
              <button
                className="bg-purple-700 hover:bg-purple-900 text-white text-sm w-full h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300"
                onClick={submitHandler}
              >
                Daftar
              </button>
            </div>
            <div className="mt-11">
              <h3 className="text-center">
                Sudah punya akun?{" "}
                <span className="font-bold text-purple-700">
                  <Link to="/login">Masuk di sini</Link>
                </span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
