import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/pro-solid-svg-icons";

export const ImageFull = ({ src, onClose }) => {
  return (
    <>
      <button
        onClick={onClose}
        className="fixed right-5 top-4 text-[35px] text-pink-200 z-30"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="fixed top-0 left-0 bg-gray-800 opacity-80 w-screen h-screen z-10"></div>
      <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-20">
        <Image
          src={src}
          alt="red birthday cake png @transparentpng.com"
          width={"500px"}
          height={"500px"}
        />
      </div>
    </>
  );
};
