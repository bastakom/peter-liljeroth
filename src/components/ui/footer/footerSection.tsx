"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "@/lib/store";
import { render } from "storyblok-rich-text-react-renderer";
import { LinkType, SomeLink } from "@/lib/interface";

import styles from "@/components/scss/footer.module.scss";
import { Socials } from "@/components/ui/socials/socials";

import { IoIosArrowDown } from "react-icons/io";

interface FooterProps {
  props: {
    logo: {
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
    logo,
    some_links,
    menu_footer,
    copyright,
    contact_title,
    phone_number,
    mail,
  } = props;
  const { isDropdownFooterOpen, setDropdownFooterOpen } = useStore();
  return (
    <footer className={`footer-bg-color py-20 lg:mt-24 ${styles.footer}`}>
      <div className="flex flex-col lg:flex-row items-center  lg:items-start gap-10 lg:gap-40 p-6 lg:pt-20 pt-10 lg:p-0 lg:pl-16">
        <div className="block lg:hidden">
          <div className="flex text-[#FFFFFF] items-center justify-center ">
            <h3 className="text-3xl mb-4 font-footer-heading">Länkar</h3>

            <IoIosArrowDown
              fontSize={30}
              className={`mb-3 ml-3 transform ${
                isDropdownFooterOpen ? "rotate-180" : "rotate-0"
              } transition-transform`}
              onClick={() => setDropdownFooterOpen(!isDropdownFooterOpen)}
            />
          </div>
          {isDropdownFooterOpen && (
            <ul className=" flex flex-col gap-4">
              {menu_footer.map((el: LinkType) => {
                return (
                  <Link
                    href={el.link.cached_url}
                    key={el._uid}
                    className="text-xl text-white font-footer-heading"
                  >
                    {el.title}
                  </Link>
                );
              })}
            </ul>
          )}
        </div>
        <div>
          <Image src={logo.filename} height={188} width={214} alt="" />
        </div>

        <div className="text-[#FFFFFF] mt-6  lg:ml-0 lg:mt-0 lg:flex flex-row gap-32">
          <div className="text-[#FFFFFF] flex flex-row gap-32  text-center lg:text-start ">
            <div className="mb-4 lg:ml-0">
              <h3 className="text-3xl mb-4 font-footer-heading">
                {props.business_title}
              </h3>
              <div className="text-[18px] lg:text-[22px] font-footer-content">
                {props && render(props.business_content)}
              </div>
            </div>
          </div>

          <div className="mt-6 lg:ml-0 lg:mt-0 text-center lg:text-start">
            <h3 className="text-3xl mb-4 font-footer-heading">
              {contact_title}
            </h3>
            <div className="text-[18px] lg:text-[22px] mb-0 lg:mb-6 font-footer-content">
              {phone_number}
            </div>
            <Link
              href={`mailto:${mail}`}
              className="text-[18px] lg:text-[22px] font-footer-content"
            >
              {mail}
            </Link>
            <div className="flex pt-0 lg:pt-8 gap-5 mt-6 lg:mt-[7.2rem] justify-center lg:justify-start items-center">
              <Socials props={some_links} />
            </div>
          </div>

          <ul className=" hidden lg:flex flex-col gap-[2.2rem]">
            {menu_footer.map((el: LinkType) => {
              return (
                <Link
                  href={el.link.cached_url}
                  key={el._uid}
                  className="text-3xl text-white font-footer-heading"
                >
                  {el.title}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="text-[#FFFFFF] flex flex-col text-center lg:text-start mb-2 lg:mb-0 lg:flex-row p-6 gap-5 lg:justify-end lg:p-0 lg:px-10 text-[18px] lg:text-[22px] mt-4 lg:mt-40 font-footer-heading">
        <Link href={"#"}>Integritetspolicy</Link>
        <Link href={"#"}>Cookies</Link>
        <Link href={"#"}>Övrig information</Link>
      </div>

      <div className="text-[#FFFFFF] justify-center pb-4 flex lg:justify-end lg:pb-0 lg:px-10 text-[18px] lg:text-[22px] mt-0 lg:mt-6 font-footer-heading">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};
