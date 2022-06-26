import React from "react";
import { useState } from "react";

export default function TambahGambarSatu() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [Gambar, setGambar] = useState(null);
  const [PrevGambar, setPrevGambar] = useState(null);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

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
    }
  };

  return (
    <div>
      <label htmlFor="customFile" className="block">
        <div className="flex justify-center">
          <img src="./camera.png" alt="" className="hover:cursor-pointer" />
        </div>
      </label>
      <div className="flex justify-center">
        <input
          type="file"
          name="customFile"
          accept="image/png , image/jpeg, image/webp"
          id="customFile"
          hidden
          onChange={choosePicture}
        />
        <div className="p-10">
          {PrevGambar != null && (
            <img src={PrevGambar} alt="gambar mobil" className="rounded-2xl" />
          )}
        </div>
      </div>
    </div>
  );
}
