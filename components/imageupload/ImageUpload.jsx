"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ImageUpload = ({ title, image, setImage }) => {
  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => console.log("error :", error);
  };

  return (
    <div className="w-[500px] min-h-[500px] flex flex-col items-center">
      <h2 className="w-[400px]">{title}</h2>
      <div className="mt-2">
        <label
          htmlFor="imageupload"
          className="relative w-[400px] h-[500px] bg-[#ef8bf7]/30 flex items-center justify-center rounded-xl cursor-pointer"
        >
          {!image && (
            <div>
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                className="text-[#ff4ff3] text-[100px]"
              />
            </div>
          )}
          {image && (
            <Image
              src={image || "/assets/nftsample.jpg"}
              alt="upload sample"
              className="w-full h-[500px] object-cover rounded-xl absolute"
              width={"750"}
              height={"750"}
            />
          )}
          <input
            type="file"
            className="hidden"
            id="imageupload"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );
};
export default ImageUpload;
