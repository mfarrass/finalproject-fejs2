import React from "react";
import API from "../../API";
import { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router-dom";

//style dropzone
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 250,
  height: "auto",
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
//style dropzone

//reat-select animation
const animatedComponents = makeAnimated(); //animasi untuk select
const styleSelect = {
  width: "full",
};
//reat-select animation

const InfoProduct = () => {
  //state untuk auth token
  const { user } = useSelector((state) => state.auth);
  //state untuk auth token

  const [namaProduk, setNamaProduk] = useState(""); //nama produk
  const [hargaProduk, setHargaProduk] = useState(""); //harga produk
  const [kategori, setKategori] = useState(); //array kategori
  const [deskripsi, setDeskripsi] = useState(""); //teks deskripsi
  const [files, setFiles] = useState([]); //array gambar produk
  const navigate = useNavigate();

  //fungsi tambah gambar -----------------------------------------
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt=""
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  //fungsi tambah gambar -----------------------------------------

  //handle form data----------------------------------------------
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("nama produk", namaProduk);
    console.log("harga produk", hargaProduk);
    console.log("array lategori", kategori);
    console.log("isi deskripsi", deskripsi);
    console.log("array foto produk", files);
    const formData = new FormData();
    formData.append(`name`, namaProduk);
    formData.append(`price`, hargaProduk);
    formData.append(`description`, deskripsi);
    kategori.forEach((el) => {
      formData.append("categories", el.value);
    });
    files.forEach((file) => {
      formData.append("image", file);
    });
    // formData.append(`image`, files);
    API.post(`/sellers/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: user ? user.access_token : "",
      },
    })
      .then((res) => {
        toast.success("Data telah terkirim");
        navigate(`/preview/${res.data.data.id}`);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Data tidak berhasil dikirm");
      });
    console.log(formData);
  };
  //handle form data----------------------------------------------

  const options = [
    { value: 1, label: "Hobi" },
    { value: 2, label: "Kendaraan" },
    { value: 3, label: "Baju" },
    { value: 4, label: "Elektronik" },
    { value: 5, label: "Kesehatan" },
  ];
  console.log(kategori);

  return (
    <div className="relative mt-24 h-auto w-full p-3">
      {/*Body Form */}
      <div className="flex justify-center">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4 flex w-[328px] flex-col justify-center px-5 md:w-[568px]">
            <label htmlFor="nama_prod" className="mb-1">
              Nama Produk*
            </label>
            <input
              onChange={(e) => {
                setNamaProduk(e.target.value);
              }}
              id="namaProduk"
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
              placeholder="Nama Produk"
            />
            <label htmlFor="harga_prod" className="mb-1">
              Harga Produk*
            </label>
            <input
              onChange={(e) => {
                setHargaProduk(e.target.value);
              }}
              id="harga_prod"
              className="mb-6 w-full h-[48px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
              placeholder="Harga Produk"
            />
            <label htmlFor="kategori" className="mb-1">
              Kategori*
            </label>
            <div className="grid grid-rows-1 md:grid-cols-3 mb-6 w-full">
              {/**kategori checkbox */}
              <Select
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    borderRadius: "14px",
                  }),
                }}
                closeMenuOnSelect={false}
                onChange={setKategori}
                components={animatedComponents}
                isMulti
                options={options}
              />
              {/**kategori checkbox */}
            </div>
            <label htmlFor="deskripsi" className="mb-1">
              Deskripsi*
            </label>
            <textarea
              onChange={(e) => {
                setDeskripsi(e.target.value);
              }}
              id="deskripsi"
              className="mb-6 w-full h-[80px] shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-black focus:border-4"
              placeholder="Contoh: Jalan Ikan Hiu 33"
            ></textarea>
            <label className="mb-1">Foto Produk*</label>{" "}
            <label className="mb-1">* Maksimal jumlah file gambar : 4</label>
            {/**tambah gambar */}
            <section className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <img
                  src="./plus.png"
                  className="hover:cursor-pointer"
                  alt="gambar produk"
                />
              </div>
              <aside style={thumbsContainer}>{thumbs}</aside>
            </section>
            {/**tambah gambar */}
            <div className="flex space-x-7 mt-5">
              <button className="mb-1 w-full h-[48px] shadow appearance-none leading-tight rounded-2xl border-2 border-purple-700 focus:outline-none focus:shadow-outline indent-3 hover:scale-90 focus:bg-neutral-200">
                <p className="text-black">Preview</p>
              </button>
              <button
                type="submit"
                className="mb-1 w-full h-[48px] shadow appearance-none bg-purple-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 hover:scale-90 focus:bg-purple-500"
              >
                <p className="text-white">Terbitkan</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoProduct;
