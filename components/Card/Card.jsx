import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export const Card = ({ pastel }) => {
  return (
    <>
      <Link href={`${pastel.id}/`}>
        <div className="relative font-gochi bg-pink-200 w-72 h-72 rounded-3xl shadow-xl flex items-center justify-between pt-6 pb-10 flex-col">
          <h1 className="text-2xl text-pink-500 font-bold">{pastel.name}</h1>
          <Image
            width={"200px"}
            height={"200px"}
            src={pastel.image}
            alt="red birthday cake png @transparentpng.com"
          />
          <span className="absolute bottom-1 text-xl px-4 font-bold text-pink-500 py-1  rounded-md">
            {pastel.price}$
          </span>
        </div>
      </Link>
    </>
  );
};
