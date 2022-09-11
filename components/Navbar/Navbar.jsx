import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MobileMenu } from "@components/Navbar/MobileMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => {
    setIsOpen(true);
  };
  const closeMobileMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex w-full h-16 text-white text-2xl font-bold justify-between px-4 py-2 items-center">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={70} height={70} alt="Logo.png" />
        </Link>
        <button onClick={openMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="text-primary text-[35px]" />
        </button>
      </div>
      {isOpen && <MobileMenu onClose={closeMobileMenu} />}
    </>
  );
};
