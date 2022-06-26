import React from "react";
import { useState } from "react";

export default function TambahGambar() {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <div>
      <label htmlFor="customFile" className="customFile">
        <img src="./plus.png" alt="" className="hover:cursor-pointer" />
      </label>
      <div className="grid grid-cols-2 gap-5">
        <input
          type="file"
          name="customFile"
          accept="image/png , image/jpeg, image/webp"
          id="customFile"
          hidden
          onChange={onSelectFile}
        />
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div className="">
                <img src={image} className="w-full h-auto my-3 " alt="upload" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
