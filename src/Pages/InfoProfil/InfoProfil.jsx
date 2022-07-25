import React from "react";
import NavbarBack from "../../Components/NavbarBack/NavbarBack";
import { useEffect, useState } from "react";
import API from "../../API";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { type } from "@testing-library/user-event/dist/type";
// import { Navigate } from "react-router-dom";

const InfoProfil = () => {
  const { user } = useSelector((state) => state.auth);
  const [imgProfile, setImgProfile] = useState("");
  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nohp, setNohp] = useState("");
  const [gambar, setGambar] = useState(null);
  const [prevGambar, setPrevGambar] = useState(null);

  const choosePicture = (e) => {
    // mengecek adakah file apa tidak
    if (e.target.files[0]) {
      // set file yang sudah ada kesalam use State
      setGambar(e.target.files[0]);
      //  inisiai untuk merender data file yang sudah di upload
      const reader = new FileReader();
      // melakukan proses render dan di simpan dalam value
      reader.addEventListener("load", () => {
        setPrevGambar(reader.result);
      });
      // melakuan render berdasrakan image yang di pilih
      reader.readAsDataURL(e.target.files[0]);
    } else {
    }
  };

  useEffect(() => {
    API.get(`sellers/profile`, {
      headers: {
        Authorization: user ? user.access_token : null,
      },
    })
      .then((res) => {
        setNama(res.data.data.nama);
        setKota(res.data.data.kota);
        setAlamat(res.data.data.alamat);
        setNohp(res.data.data.no_hp);
        setImgProfile(res.data.data.profile_picture);
      })
      .catch((err) => {
        toast.error("Ada kesalahan");
      });
  }, []);

  // useEffect(() => {
  //   let url = { imgProfile };
  //   const urlToObject = async () => {
  //     const response = await fetch(url);
  //     // here image is url/location of image
  //     const blob = await response.blob();
  //     const file = new File([blob], "image.jpg", { type: blob.type });
  //     console.log(file);
  //     setGambar(file);
  //   };
  //   urlToObject();
  // }, [imgProfile]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(`nama`, nama);
    formData.append(`kota`, kota);
    formData.append(`alamat`, alamat);
    formData.append(`no_hp`, nohp);
    formData.append(`profile_picture`, gambar);
    console.log(user.access_token);
    API.put(`/sellers/update`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: user ? user.access_token : "",
      },
    })
      .then(() => {
        toast.success("Data telah terkirim");
        window.location.replace("/info-profil");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Data tidak berhasil dikirm");
      });
  };

  return (
    <div className="App">
      {console.log(gambar)}
      {console.log(imgProfile)}
      <div className="relative mt-3 h-auto w-full p-3">
        <NavbarBack />
        <div className="flex justify-center">
          <p className="text-2xl mb-20 -mt-8 md:hidden">Lengkapi Info Profil</p>
        </div>

        {/*Body Form */}
        <div className="flex justify-center">
          <form action="">
            <div className="mb-4 flex w-[328px] flex-col justify-center px-5 md:w-[568px]">
              <div className="flex justify-center mb-8">
                {/**gambar profile */}
                <label htmlFor="customFile" className="block">
                  <div className="flex justify-center">
                    <img
                      src={imgProfile}
                      onError={(e) =>
                        (e.target.onerror = null)(
                          (e.target.src =
                            "https://res.cloudinary.com/syafiq/image/upload/v1657626946/second-hand-assets/profile/seed-data/default.png")
                        )
                      }
                      alt="foto profil"
                      className="hover:cursor-pointer w-48 h-48 rounded-2xl object-contain mt-3"
                    />
                  </div>
                  <p className="mt-3 text-center hover:text-slate-600 hover:cursor-pointer">
                    Klik untuk mengubah gambar
                  </p>
                </label>
                <div className="">
                  <input
                    type="file"
                    name="customFile"
                    accept="image/png , image/jpeg, image/webp, link"
                    id="customFile"
                    hidden
                    onChange={choosePicture}
                  />
                  <div>
                    {prevGambar != null && (
                      <div>
                        <img
                          src={prevGambar}
                          alt="gambar baru"
                          className="hover:cursor-pointer w-48 h-48 object-contain rounded-2xl mt-3 ml-8"
                        />
                        <p className="mt-3 text-center">*Foto Profil Baru</p>
                      </div>
                    )}
                  </div>
                </div>
                {/**gambar profile */}
              </div>
              <label htmlFor="nama" className="mb-1">
                Nama*
              </label>
              <input
                id="nama"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                }}
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="Nama"
                required
              />
              <label htmlFor="kota" className="mb-1">
                Kota*
              </label>
              <input
                id="kota"
                value={kota}
                onChange={(e) => {
                  setKota(e.target.value);
                }}
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="Kota"
                required
              />
              <label htmlFor="alamat" className="mb-1">
                Alamat*
              </label>
              <textarea
                id="alamat"
                value={alamat}
                onChange={(e) => {
                  setAlamat(e.target.value);
                }}
                className="mb-6 w-full h-[80px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline focus:border-black focus:border-4"
                required
              ></textarea>
              <label htmlFor="nohp" className="mb-1">
                No Handphone*
              </label>
              <input
                type="text"
                maxLength="12"
                id="nohp"
                value={nohp}
                onChange={(e) => {
                  setNohp(e.target.value);
                }}
                className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
                placeholder="contoh: +628123456789"
                required
              />
              <button
                type="submit"
                onClick={handleOnSubmit}
                className="mb-1 w-full h-[48px] shadow appearance-none bg-purple-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 hover:scale-90 focus:bg-purple-500"
              >
                <p className="text-white">Simpan</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoProfil;
