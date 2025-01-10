"use client";

import useStore from "@/lib/store";
import Link from "next/link";
import Image from "next/image";

import { TbMenu } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LinkType, SomeLink } from "@/lib/interface";

interface NavBarProps {
  props: {
    logo: {
      filename: string;
      alt: string;
    };
    site_title: string;
    menu: LinkType[];
    some_links: SomeLink[];
    phone_number: string;
    mail: string;
  };
}

export const NavBar = ({ props }: NavBarProps) => {
  const { open, setIsOpenMenu } = useStore();
  const { menu, some_links, mail, phone_number } = props;

  return (
    <header
      className={`absolute px-5 top-0 flex justify-center items-center w-full py-5 z-50`}
    >
      <Link href="/" className="flex justify-center text-white">
        <Image src={props.logo.filename} width={131} height={50} alt="" />
      </Link>
      <div className="flex justify-end fixed right-5 top-2">
        <TbMenu
          fontSize={80}
          color="white"
          className={` ${open ? "hidden" : "block"} cursor-pointer`}
          onClick={() => setIsOpenMenu(true)}
        />

        <nav
          className={`nav-bg-color w-[100vw] h-[100vh] lg:w-[35vw] lg:h-[100vh] absolute -top-2 -right-5 lg:-top-2 lg:-right-5 transition-all duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between px-8 lg:px-10 pt-8">
            <Image src={props.logo.filename} width={87} height={76} alt="" />
            <IoCloseOutline
              fontSize={70}
              color="white"
              className="cursor-pointer"
              onClick={() => setIsOpenMenu(false)}
            />
          </div>

          <ul className="flex flex-col pl-8 lg:pl-16 pt-16 gap-3">
            {menu.map((el: LinkType, index: number) => {
              return (
                <Link
                  href={el.link.cached_url}
                  key={index}
                  onClick={() => setIsOpenMenu(false)}
                  className="text-[24px] lg:text-[40px] text-white"
                >
                  {el.title}
                </Link>
              );
            })}
          </ul>

          <div className="flex justify-center mt-14 lg:mt-32">
            <hr className="w-[80%] color-black opacity-20 border-t-4" />
          </div>

          <div className="flex px-8 lg:px-16 gap-5 items-center pt-8">
            {some_links.map((el: SomeLink) => {
              switch (el.some) {
                case "fb":
                  return (
                    <Link key={el._uid} href={el.link.cached_url}>
                      <FaFacebookF fontSize={30} color="#F6EEDC" />
                    </Link>
                  );

                case "ig":
                  return (
                    <Link key={el._uid} href={el.link.cached_url}>
                      <FaInstagram fontSize={30} color="#F6EEDC" />
                    </Link>
                  );
                default:
                  "no value";
              }
            })}
          </div>

          <div className="px-10 lg:px-[4.5rem] mt-6 flex flex-col gap-2">
            <Link href={`mailto:${mail}`} className="text-[#FFFFFF] text-xl">
              {mail}
            </Link>
            <div className="text-[#FFFFFF] text-xl">{phone_number}</div>
          </div>
        </nav>
      </div>
    </header>
  );
};
