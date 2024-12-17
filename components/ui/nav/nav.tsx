"use client";

import Image from "next/image";
import { TbMenu } from "react-icons/tb";

interface NavBarProps {
  props: {
    logo: {
      filename: string;
      alt: string;
    };
    site_title: string;
  };
}

export const NavBar = ({ props }: NavBarProps) => {
  return (
    <div className="absolute px-5 top-0 flex justify-center items-center w-full py-5 z-50">
      <div className="flex justify-center text-white">
        <Image src={props.logo.filename} width={131} height={50} alt="" />
      </div>
      <div className="flex justify-end absolute right-5 top-2">
        <TbMenu fontSize={80} color="white" />
      </div>
    </div>
  );
};
