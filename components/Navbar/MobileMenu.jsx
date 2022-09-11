import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faChild,
  faRingDiamond,
  faBalloons,
  faXmark,
} from "@fortawesome/pro-solid-svg-icons";

export const MobileMenu = ({ onClose }) => {
  return (
    <div className="top-0 left-0 w-screen h-screen z-10 fixed bg-blue-800 text-white flex items-center justify-center font-gochi text-3xl overflow-hidden">
      <button className="absolute right-5 top-4 text-[35px]" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <ul className="flex flex-col gap-8 tracking-wider text-left">
        <li>
          <FontAwesomeIcon icon={faMars} /> Chicos
        </li>
        <li>
          <FontAwesomeIcon icon={faVenus} /> Chicas
        </li>
        <li>
          <FontAwesomeIcon icon={faChild} /> Animados
        </li>
        <li>
          <FontAwesomeIcon icon={faRingDiamond} /> Bodas
        </li>
        <li>
          <FontAwesomeIcon icon={faBalloons} /> Otros
        </li>
      </ul>
    </div>
  );
};
