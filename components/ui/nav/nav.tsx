"use client";

import useStore from "@/lib/store";
import Link from "next/link";
import Image from "next/image";

import { TbMenu } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

interface Link {
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

interface LinkItem {
  _uid: string;
  link: Link;
  title: string;
  component: string;
  _editable: string;
  cached_url?: string;
}

interface NavBarProps {
  props: {
    logo: {
      filename: string;
      alt: string;
    };
    site_title: string;
    Menu: LinkItem[];
    SoMe_links: LinkItem[];
    Contact: LinkItem[];
    phone_number: string;
  };
}

export const NavBar = ({ props }: NavBarProps) => {
  const { open, setIsOpenMenu } = useStore();

  const { Menu, SoMe_links, Contact, phone_number } = props;
  console.log(props);
  return (
    <div
      className={`absolute px-5 top-0 flex justify-center items-center w-full py-5 z-50`}
    >
      <div className="flex justify-center text-white">
        <Image src={props.logo.filename} width={131} height={50} alt="" />
      </div>
      <div className="flex justify-end absolute right-5 top-2">
        <TbMenu
          fontSize={80}
          color="white"
          className={` ${open ? "hidden" : "block"} cursor-pointer`}
          onClick={() => setIsOpenMenu(true)}
        />
        {open && (
          <div
            className={`nav-bg-color w-[100vw] h-[100vh] lg:w-[32vw] lg:h-[129.3vh] absolute -top-2 -right-5 lg:-top-2 lg:-right-5 transition-all duration-500 ${
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
              {Menu.map((el: LinkItem, index: number) => {
                console.log("heeeeej", el);
                return (
                  <Link
                    href={el.link.cached_url}
                    key={index}
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
              <Link href={SoMe_links[0].link.cached_url}>
                <FaFacebookF fontSize={30} color="#F6EEDC" />
              </Link>

              <Link href={SoMe_links[1].link.cached_url}>
                <FaInstagram fontSize={30} color="#F6EEDC" />
              </Link>
            </div>

            <div className="px-10 lg:px-[4.5rem] mt-6 flex flex-col gap-2">
              <Link
                href={`mailto:${Contact[0].link.cached_url}`}
                className="text-[#FFFFFF] text-xl"
              >
                {Contact[0].link.url}
              </Link>
              <div className="text-[#FFFFFF] text-xl">{phone_number}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
