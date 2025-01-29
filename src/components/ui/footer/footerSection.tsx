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
    mobile_bg: {
      filename: string;
      alt: string;
    };
    contact_title: string;
    phone_number: string;
    business_title: string;
    second_business_title: string;
    business_content: React.ReactNode;
    second_business_content: React.ReactNode;
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
    mobile_bg,
    second_business_title,
    second_business_content,
    mail,
  } = props;
  const { isDropdownFooterOpen, setDropdownFooterOpen } = useStore();
  const { isBusinessInfoFirstOpen, setBusinessInfoFirstOpen } = useStore();
  const { isBusinessInfoSecondOpen, setBusinessInfoSecondOpen } = useStore();
  return (
    <footer className={` relative pt-10 pb-10 lg:py-20 lg:mt-24`}>
      <Image
        src={mobile_bg.filename}
        alt="Footer mobile background"
        layout="fill"
        className="object-cover w-full h-full lg:hidden"
      />
      {/* Bild för större skärmar */}
      <Image
        src={footer_bg.filename}
        alt="Footer background"
        layout="fill"
        className="object-cover w-full h-full hidden lg:block "
      />
      <div className="grid lg:grid-cols-4 lg:flex-row items-center  lg:items-start gap-10 lg:gap-24  p-6 lg:pt-20 pt-10 lg:p-0 z-20">
        <div className="relative  h-[10vh] lg:h-[200px] lg:ml-[2rem]">
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
          <div className="flex text-[#FFFFFF] justify-center items-center">
            <h2 className="font-dupincel mt-4 lg:mt-0 text-[25px] mb-2">
              Länkar
            </h2>

            <IoIosArrowDown
              fontSize={25}
              className={` mt-4 lg:mt-0 mb-3 ml-3 transform ${
                isDropdownFooterOpen ? "rotate-180" : "rotate-0"
              } transition-transform`}
              onClick={() => setDropdownFooterOpen(!isDropdownFooterOpen)}
            />
          </div>
          {isDropdownFooterOpen && (
            <ul className=" flex flex-col gap-4 text-center lg:text-start">
              {menu_footer.map((el: LinkType) => {
                return (
                  <Link
                    href={el.link.cached_url}
                    key={el._uid}
                    className="text-[20px] lg:text-xl text-white font-dupincel"
                  >
                    {el.title}
                  </Link>
                );
              })}
            </ul>
          )}
        </div>

        <div className="text-[#FFFFFF] flex flex-col  lg:gap-16  text-center lg:text-start z-10">
          <div className="mb-4 lg:ml-0">
            <div className="flex items-center justify-center lg:justify-start">
              <h2 className="text-[25px] lg:text-3xl mb-4 font-dupincel">
                {props.business_title}
              </h2>
              <IoIosArrowDown
                fontSize={25}
                className={`-mt-4 ml-3 transform lg:hidden ${
                  isBusinessInfoFirstOpen ? "rotate-180" : "rotate-0"
                } transition-transform`}
                onClick={() =>
                  setBusinessInfoFirstOpen(!isBusinessInfoFirstOpen)
                }
              />
            </div>
            <div
              className={`${
                isBusinessInfoFirstOpen ? "block" : "hidden"
              } lg:block ${style.footerContent}`}
              style={{
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "100",
              }}
            >
              {props && render(props.business_content)}
            </div>
          </div>
          <div className="mb-4 lg:ml-0 z-10">
            <div className="flex items-center justify-center lg:justify-start">
              <h2 className="text-[25px] lg:text-3xl mb-4 font-dupincel">
                {second_business_title}
              </h2>
              <IoIosArrowDown
                fontSize={25}
                className={`-mt-4 ml-3 transform lg:hidden ${
                  isBusinessInfoSecondOpen ? "rotate-180" : "rotate-0"
                } transition-transform`}
                onClick={() =>
                  setBusinessInfoSecondOpen(!isBusinessInfoSecondOpen)
                }
              />
            </div>
            <div
              className={`${
                isBusinessInfoSecondOpen ? "block" : "hidden"
              } lg:block ${style.footerContent}`}
              style={{
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "100",
              }}
            >
              {props && render(second_business_content)}
            </div>
          </div>
        </div>

        <div className="mt-6 lg:ml-0 lg:mt-0 text-center  lg:text-start z-10 text-white">
          <h2 className="text-[25px] lg:text-3xl mb-4 font-dupincel">
            {contact_title}
          </h2>
          <div className="font-inter-thin text-[16px] lg:text-[22px] mb-0 lg:mb-6">
            {phone_number}
          </div>
          <Link
            href={`mailto:${mail}`}
            className="font-inter-thin text-[16px] lg:text-[22px]"
          >
            {mail}
          </Link>
          <div className="flex pt-0 lg:pt-8 gap-5 mt-8 lg:mt-10 justify-center lg:justify-start items-center">
            <Socials props={some_links} />
          </div>
        </div>

        <ul className="hidden lg:flex flex-col gap-[2.2rem] z-10">
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
      <div
        className="cursor-pointer font-dupincel text-[#FFFFFF] flex flex-col text-center
       lg:text-start mb-2 lg:mb-0 lg:flex-row p-6 gap-5 lg:justify-end lg:p-0 lg:px-10 text-[18px] 
       lg:text-[22px] mt-4 lg:mt-40 z-index "
      >
        <Link href={"/integritetspolicy"}>Integritetspolicy</Link>
        <Link href={"/cookies"}>Cookies</Link>
        <Link href={"/oevrig-information"}>Övrig information</Link>
      </div>

      <div className="text-[#FFFFFF] justify-center pb-4 flex lg:justify-end lg:pb-0 lg:px-10 text-[14px] lg:text-[22px] mt-0 lg:mt-6 z-10">
        <p className="font-dupincel z-10">{copyright}</p>
      </div>
    </footer>
  );
};
