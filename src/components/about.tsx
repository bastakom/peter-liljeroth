"use client";

import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";
import style from "./scss/about.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import useStore from "@/lib/store";

import Image from "next/image";

interface ImageBlockProps {
  blok: {
    heading: string;
    subtitle?: string;
    linktitle?: string;
    about_page?: boolean;
    img_left?: boolean;
    home_page?: boolean;
    link: {
      cached_url: string;
    };
    content: React.ReactNode;
    secondcontent: React.ReactNode;
    image: {
      filename: string;
      name: string;
    };
  };
}

export const AboutBlock = ({ blok }: ImageBlockProps) => {
  const {
    content,
    image,
    heading,
    subtitle,
    secondcontent,
    about_page,
    home_page,
    linktitle,
    link,
    img_left,
  } = blok;
  const { isDropdownAboutOpen, setDropdownAboutOpen } = useStore();

  return (
    <div className="lg:w-full mt-10 mb-10 lg:mt-28 lg:mb-20 lg:px-20 ">
      <div
        className={`lg:flex lg:w-[100%] lg:gap-32 ${
          img_left ? "lg:flex-row-reverse lg:gap-4" : ""
        }`}
      >
        <div className="px-4 lg:px-0 lg:w-[50%] flex flex-col lg:ml-16 lg:justify-center">
          <h2 className={style.subtitle}>{subtitle}</h2>
          <h2 className="text-[28px] lg:text-[58px] pt-10 lg:pt-0 mb-10">
            {heading}
          </h2>
          <div className={style.aboutParagraph}>{render(content)}</div>

          {isDropdownAboutOpen && (
            <div className={style.aboutSecondParagraph}>
              {render(secondcontent)}
            </div>
          )}

          {home_page && (
            <Link className={style.contentButton} href={link.cached_url}>
              {linktitle}
            </Link>
          )}

          <div
            className={`${
              about_page
                ? "flex items-center justify-end cursor-pointer mt-4 mb-4 lg:mb-0 lg:mt-2"
                : "hidden"
            }`}
            onClick={() => setDropdownAboutOpen(!isDropdownAboutOpen)}
          >
            {isDropdownAboutOpen ? (
              <>
                <div className="font-kis-normal text-[18px]">Läs mindre</div>
                <MdKeyboardArrowUp fontSize={20} className="ml-2" />
              </>
            ) : (
              <>
                <div className="font-kis-normal text-[18px]">Läs mer</div>
                <IoIosArrowDown fontSize={20} className="ml-2" />
              </>
            )}
          </div>
        </div>
        <div className="lg:w-[50%] flex flex-col items-end">
          {image.filename && (
            <Image
              src={image.filename}
              width={894}
              height={120}
              alt={image.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};
