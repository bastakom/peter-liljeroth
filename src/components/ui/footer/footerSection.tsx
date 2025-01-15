"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "@/lib/store";
import { render } from "storyblok-rich-text-react-renderer";
import { LinkType, SomeLink } from "@/lib/interface";
import style from "@/components/scss/footer.module.scss";

import styles from "@/components/scss/footer.module.scss";
import { Socials } from "@/components/ui/socials/socials";

import { IoIosArrowDown } from "react-icons/io";

interface FooterProps {
  props: {
    menu_logo: {
      filename: string;
      alt: string;
    };
    footer_bg: {
      filename: string;
      alt: string;
    };
    contact_title: string;
    phone_number: string;
    business_title: string;
    business_content: React.ReactNode;
    mail: string;
    some_links: SomeLink[];
    menu_footer: LinkType[];
    copyright: string;
  };
}

export const FooterSection = ({ props }: FooterProps) => {
  const {
    menu_logo,
    some_links,
    menu_footer,
    copyright,
    contact_title,
    phone_number,
    footer_bg,
    mail,
  } = props;
  const { isDropdownFooterOpen, setDropdownFooterOpen } = useStore();
  return (
    <footer
      className={`relative footer-bg-color pt-10 pb-10 lg:py-20 mt-14 lg:mt-24 ${styles.footer}`}
    >
      <Image src={footer_bg.filename} fill className="object-cover" alt="" />
      <div className="flex flex-col lg:flex-row items-center  lg:items-start gap-10 lg:gap-48 p-6 lg:pt-20 pt-10 lg:p-0 lg:pl-16 z-20">
        <div className="relative min-w-[214px] h-[188px]">
          <Link href={"/"}>
            <Image
              src={menu_logo.filename}
              fill
              className="object-contain"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="block z-10 lg:hidden">
          <div className="flex text-[#FFFFFF] items-center">
            <h2 className="font-dupincel mt-4 lg:mt-0 text-3xl mb-2">Länkar</h2>

            <IoIosArrowDown
              fontSize={30}
              className={` mt-4 lg:mt-0 mb-3 ml-3 transform ${
                isDropdownFooterOpen ? "rotate-180" : "rotate-0"
              } transition-transform`}
              onClick={() => setDropdownFooterOpen(!isDropdownFooterOpen)}
            />
          </div>
          {isDropdownFooterOpen && (
            <ul className=" flex flex-col gap-4 lg:w-[336px] text-center lg:text-start">
              {menu_footer.map((el: LinkType) => {
                return (
                  <Link
                    href={el.link.cached_url}
                    key={el._uid}
                    className="text-xl text-white font-dupincel"
                  >
                    {el.title}
                  </Link>
                );
              })}
            </ul>
          )}
        </div>

        <div className="text-[#FFFFFF] lg:ml-0 lg:mt-0 lg:flex flex-row gap-[9rem] z-10">
          <div className="text-[#FFFFFF] flex flex-row gap-32  text-center lg:text-start ">
            <div className="mb-4 lg:ml-0">
              <h2 className="text-3xl mb-4 font-dupincel">
                {props.business_title}
              </h2>
              <div className={style.footerContent}>
                {props && render(props.business_content)}
              </div>
            </div>
          </div>

          <div className="mt-6 lg:ml-0 lg:mt-0 text-center lg:text-start lg:w-[336px]">
            <h2 className="text-3xl mb-4 font-dupincel">{contact_title}</h2>
            <div className="!font-inter-thin text-[18px] lg:text-[22px] mb-0 lg:mb-6">
              {phone_number}
            </div>
            <Link
              href={`mailto:${mail}`}
              className="font-inter-thin text-[18px] lg:text-[22px]"
            >
              {mail}
            </Link>
            <div className="flex pt-0 lg:pt-8 gap-5 mt-6 lg:mt-[7.2rem] justify-center lg:justify-start items-center">
              <Socials props={some_links} />
            </div>
          </div>

          <ul className="hidden lg:flex flex-col gap-[2.2rem] w-[336px]">
            {menu_footer.map((el: LinkType) => {
              return (
                <Link
                  href={el.link.cached_url}
                  key={el._uid}
                  className="text-3xl text-white font-dupincel"
                >
                  {el.title}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="cursor-pointer font-dupincel text-[#FFFFFF] flex flex-col text-center
       lg:text-start mb-2 lg:mb-0 lg:flex-row p-6 gap-5 lg:justify-end lg:p-0 lg:px-10 text-[18px] 
       lg:text-[22px] mt-4 lg:mt-40 z-index"
      >
        <Link href={"/integritetspolicy"}>Integritetspolicy</Link>
        <Link href={"/cookies"}>Cookies</Link>
        <Link href={"/oevrig-information"}>Övrig information</Link>
      </div>

      <div className="text-[#FFFFFF] justify-center pb-4 flex lg:justify-end lg:pb-0 lg:px-10 text-[18px] lg:text-[22px] mt-0 lg:mt-6">
        <p className="font-dupincel z-10">{copyright}</p>
      </div>
    </footer>
  );
};
