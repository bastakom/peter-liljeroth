"use client";
import { render } from "storyblok-rich-text-react-renderer";
import style from "./scss/image-block.module.scss";
import { Links } from "@/lib/interface.image-block";
import Image from "next/image";
import Link from "next/link";

interface ImageBlockProps {
  blok: {
    title: string;
    subtitle: string;
    image_left: boolean;
    heading_order: boolean;
    small_text: boolean;
    padding: boolean;
    content: React.ReactNode;
    image: {
      filename: string;
      name: string;
    };
    button: Links[];
  };
}

export const ImageBlock = ({ blok }: ImageBlockProps) => {
  const {
    content,
    image,
    image_left,
    title,
    heading_order,
    subtitle,
    button,
    padding,
    small_text,
  } = blok;

  return (
    <div
      className={`imageBlockContainer lg:mt-28 lg:mb-10 mx-auto px-5 pb-0 lg:px-0 ${
        padding ? "container py-10" : " w-full"
      }`}
    >
      <div
        className={`flex justify-end lg:gap-14 ${
          image_left
            ? "flex-col-reverse lg:flex-row-reverse"
            : " flex-col-reverse lg:flex-row lg:items-start lg:justify-end"
        }  ${heading_order ? "lg:px-20" : "lg:px-0"}
        ${padding ? "mb-8 lg:mb-0" : ""}
        `}
      >
        <div
          className={`w-[100%] items-center lg:items-start lg:px-0 lg:w-[50%] lg:mt-20 ${
            !padding && "lg:ml-20"
          } flex flex-col ${
            heading_order
              ? "flex-col-reverse !items-start lg:w-[45%]"
              : "flex-col"
          }`}
        >
          {subtitle && (
            <h2
              className={`${
                heading_order ? "text-[20px] italic" : style.imageSubtitle
              } ${!small_text ? "text-[#AB8100]" : ""}`}
            >
              {subtitle}
            </h2>
          )}
          <h2
            className={`${
              !small_text && heading_order
                ? "text-[18px] lg:text-[20px] tracking-[1px] lg:tracking-[0.66px] font-kis-italic text-[#AB8100] mb-12 lg:mb-0"
                : style.imageTitle
            } ${small_text && "text-[100px]"} `}
          >
            {title}
          </h2>

          <div
            className={`${
              heading_order
                ? "font-kis-italic mt-8 lg-mt-0 text-[30px] lg:w-[70%] lg:text-[40px] mb-10"
                : style.imageParagraph
            } ${!padding && image_left && "pr-10"}`}
          >
            {render(content)}
          </div>
          {button &&
            button.length > 0 &&
            button.map((el: Links, index: number) => {
              return (
                <div
                  className="flex w-[100%] mt-4 lg:mt-0 justify-center lg:justify-start lg:w-[70%] text-[#1d1711]"
                  key={index}
                >
                  <Link
                    className={style.contentButton}
                    href={el.link.cached_url}
                  >
                    {el.title}
                  </Link>
                </div>
              );
            })}
        </div>
        <div
          className={`lg:w-[50%] md:h-[75vh] flex flex-col relative ${
            image_left ? "items-start" : " items-end"
          } ${
            heading_order
              ? "h-[380px] lg:h-[900px]"
              : " h-[300px] lg:mt-0 lg:h-[750px]"
          } ${
            padding && !heading_order
              ? "mb-8 lg:mb-0 mt-0"
              : "mb-0 lg:mt-0 mt-4"
          }`}
        >
          {image.filename && (
            <Image
              src={image.filename}
              fill
              className="w-full object-cover md:object-top"
              alt={image.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};
