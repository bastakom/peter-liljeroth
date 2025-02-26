"use client";

import useStore from "@/lib/store";
import Link from "next/link";
import Image from "next/image";

import { TfiClose } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LinkType, SomeLink } from "@/lib/interface";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

interface NavBarProps {
  props: {
    menu_logo: {
      filename: string;
      alt: string;
    };
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
  const { menu, some_links, mail, phone_number, menu_logo } = props;
  const [scroll, setScroll] = useState(false);
  const [headerActive, setHeaderActive] = useState(0);
  const handleMenuClick = (id: any) => {
    setHeaderActive(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`absolute px-5 top-0 flex justify-center items-center w-full py-5 z-50`}
    >
      <Link href="/" className="flex justify-center text-white">
        <Image src={props.logo.filename} width={131} height={50} alt="" />
      </Link>
      <div className={`flex justify-end fixed right-5 top-2`}>
        <Menu
          size={80}
          strokeWidth={0.5}
          color="white"
          className={` ${
            open ? "hidden" : "block"
          } cursor-pointer text-[60px] mt-5 lg:mt-0 lg:text-[80px] transition-all ease-linear ${
            scroll ? "bg-[#1d1411] rounded-full p-2" : "bg-transparent"
          }   `}
          onClick={() => setIsOpenMenu(true)}
        />

        <nav
          className={`pb-8 lg:pb-0 overflow-y-auto nav-bg-color w-[100vw] h-[100vh] lg:w-[35vw] lg:h-[100vh] absolute -top-2 -right-5 lg:-top-2 lg:-right-5 transition-all duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between px-8 lg:px-10 pt-8">
            <Link href="/" onClick={() => setIsOpenMenu(false)}>
              <Image
                src={props.menu_logo.filename}
                width={94}
                height={76}
                alt=""
              />
            </Link>
            <TfiClose
              fontSize={40}
              color="white"
              className="cursor-pointer"
              onClick={() => setIsOpenMenu(false)}
            />
          </div>

          <ul className="font-kis-normal flex flex-col pl-8 lg:pl-16 pt-16 gap-3">
            {menu.map((el: LinkType, index: number) => {
              return (
                <Link
                  href={el.link.cached_url}
                  key={index}
                  onClick={() => {
                    setIsOpenMenu(false);
                    handleMenuClick(index);
                  }}
                  className={`text-[38px] lg:text-[40px] text-white relative hover:underline decoration-[#16110D] underline-offset-8 
                  ${
                    headerActive === index
                      ? "underline decoration-[#16110D] underline-offset-8"
                      : "no-underline"
                  }
                  lg:${headerActive === index && "no-underline"}`}
                >
                  {el.title}
                </Link>
              );
            })}
          </ul>

          <div className="flex justify-center mt-14 lg:mt-32">
            <hr className="w-[80%] color-black opacity-20 border-t-2" />
          </div>

          <div className="flex px-8 lg:px-16 gap-5 items-center pt-8">
            {some_links.map((el: SomeLink) => {
              switch (el.some) {
                case "fb":
                  return (
                    <Link key={el._uid} href={el.link.cached_url}>
                      <FaFacebookF fontSize={30} color="#DDCA7D" />
                    </Link>
                  );

                case "ig":
                  return (
                    <Link key={el._uid} href={el.link.cached_url}>
                      <FaInstagram fontSize={30} color="#DDCA7D" />
                    </Link>
                  );
                default:
                  "no value";
              }
            })}
          </div>

          <div className="font-inter-thin px-10 lg:px-[4.5rem] mt-6 flex justify-between lg:flex-col gap-2 lg:pb-4">
            <Link
              href={`mailto:${mail}`}
              className="text-[#FFFFFF] text-[18px] lg:text-xl"
            >
              {mail}
            </Link>
            <div className="text-[#FFFFFF] text-[18px] lg:text-xl">
              {phone_number}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
