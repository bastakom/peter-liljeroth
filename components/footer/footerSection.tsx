"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "@/lib/store";
import { render } from "storyblok-rich-text-react-renderer";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

interface MultiLink {
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

interface LinkItem {
  _uid: string;
  link: MultiLink;
  title: string;
  component: string;
  _editable: string;
}

interface ContentItem {
  type: string;
  content: ParagraphContent[];
}

interface ParagraphContent {
  text: string;
}
interface RichTextContent {
  type: string;
  content: ParagraphContent[] | ContentItem[];
}

interface ParagraphContent {
  text: string;
  type: string;
}

interface BusinessInfoItem {
  _uid: string;
  title: string;
  content: RichTextContent;
  component: string;
  _editable: string;
}

interface EmailLink extends MultiLink {
  id: string;
}

interface ContactFooterItem {
  _uid: string;
  email: EmailLink;
  title: string;
  phone_number: string;
  component: string;
  _editable: string;
}

interface Logo {
  filename: string;
  alt: string;
}

interface FooterProps {
  props: {
    logo: Logo;
    business_info: BusinessInfoItem[];
    contact_footer: ContactFooterItem[];
    some_links: LinkItem[];
    menu_footer: LinkItem[];
    copyright: string;
  };
}

export const FooterSection = ({ props }: FooterProps) => {
  const {
    logo,
    business_info,
    contact_footer,
    some_links,
    menu_footer,
    copyright,
  } = props;
  const { isDropdownFooterOpen, setDropdownFooterOpen } = useStore();
  return (
    <footer className="footer-bg-color lg:h-[100vh]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-40 p-6 lg:pt-20 pt-10 lg:p-0 lg:pl-16">
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
              {menu_footer.map((el: LinkItem, index: number) => {
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

        <div className="text-[#FFFFFF] mt-6 lg:mt-0 lg:flex flex-row gap-32">
          <div className="text-[#FFFFFF] flex flex-row gap-32">
            {business_info.map((el: BusinessInfoItem) => (
              <div key={el._uid} className="mb-4 ml-14 lg:ml-0">
                <h3 className="text-3xl mb-4 font-footer-heading">
                  {el.title}
                </h3>
                <div
                  key={el._uid}
                  className="text-[18px] lg:text-[22px] font-footer-content"
                >
                  {el.content && render(el.content)}
                </div>
              </div>
            ))}
          </div>

          {contact_footer.map((element: ContactFooterItem) => {
            return (
              <div key={element._uid} className="mt-6 ml-14 lg:ml-0 lg:mt-0">
                <h3 className="text-3xl mb-4 font-footer-heading">
                  {element.title}
                </h3>
                <div className="text-[18px] lg:text-[22px] mb-0 lg:mb-6 font-footer-content">
                  {element.phone_number}
                </div>
                <Link
                  href={`mailto:${element.email.url}`}
                  className="text-[18px] lg:text-[22px] font-footer-content"
                >
                  {element.email.url}
                </Link>
                <div className="flex pt-0 lg:pt-8 gap-5 mt-6 lg:mt-[7.2rem] items-center">
                  <Link href={some_links[0].link.cached_url}>
                    <FaFacebookF fontSize={24} color="#F6EEDC" />
                  </Link>

                  <Link href={some_links[1].link.cached_url}>
                    <FaInstagram fontSize={24} color="#F6EEDC" />
                  </Link>
                </div>
              </div>
            );
          })}

          <ul className=" hidden lg:flex flex-col gap-[2.2rem]">
            {menu_footer.map((el: LinkItem, index: number) => {
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
      <div className="text-[#FFFFFF] flex flex-row p-6 gap-5 lg:justify-end lg:p-0 lg:px-10 text-[18px] lg:text-[22px] mt-4 lg:mt-40 font-footer-heading">
        <Link href={"#"}>Integritetspolicy</Link>
        <Link href={"#"}>Cookies</Link>
        <Link href={"#"}>Köpvillkor</Link>
      </div>

      <div className="text-[#FFFFFF] justify-center pb-4 flex lg:justify-end lg:pb-0 lg:px-10 text-[18px] lg:text-[22px] mt-0 lg:mt-6 font-footer-heading">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};
