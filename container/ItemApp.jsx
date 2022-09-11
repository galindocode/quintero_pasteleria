import React from "react";
import Image from "next/image";
import { ImageFull } from "@components/Item/ImageFull";

export const ItemApp = ({ pastel }) => {
  const [showFull, setShowFull] = React.useState(false);
  const onImageFull = () => {
    setShowFull(true);
  };

  const onCloseImageFull = () => {
    setShowFull(false);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 justify-center px-4">
        <button onClick={onImageFull}>
          <Image
            src={pastel.image}
            width={250}
            height={250}
            alt="pastel image"
          />
        </button>
        <div className="w-full flex flex-col gap-2  ">
          <h1 className="text-primary font-gochi tracking-wider text-3xl font-bold">
            {pastel.name}
          </h1>
          <span className="text-primary font-gochi font-bold text-2xl">
            {pastel.price}$
          </span>
          <p className="text-[20px] text-gray-900 font-medium font-gochi tracking-wider">
            {pastel.description}
          </p>
        </div>
        <a
          href={`https://wa.me/584129282262?text=Hola%20quiero%20un%20pastel%20como%20este:%20${pastel.name}`}
          target={"_blank"}
          className="px-6 my-2 py-3 text-2xl text-white font-bold rounded-xl shadow-xl bg-pink-600 hover:bg-pink-700 transition-colors duration-500 font-gochi"
        >
          ¡Quiero una!
        </a>
      </div>
      {showFull && <ImageFull src={pastel.image} onClose={onCloseImageFull} />}
    </>
  );
};
