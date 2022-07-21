import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "../../Components/NavbarAuth/NavbarAuth";
import { login } from "../../Features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(data));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  });

  return (
    <div className="md:grid md:grid-cols-2  w-screen h-screen overflow-hidden">
      <div className="col-span-1 bg-login bg-cover"></div>
      <NavbarAuth />
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
                  name="email"
                  value={data.email}
                  onChange={handleChange}
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
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              {isLoading ? (
                <div className="flex justify-center mt-8 ">
                  <svg
                    role="status"
                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-purple-700 hover:bg-purple-900 text-white text-sm w-full h-12  py-2 px-4 rounded-xl mt-8 transition ease-in-out duration-300"
                >
                  Masuk
                </button>
              )}
            </div>
            <div className="mt-11">
              <h3 className="text-center">
                Belum punya akun?{" "}
                <span className="font-bold text-purple-700">
                  <Link to="/daftar">Daftar di sini</Link>
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
