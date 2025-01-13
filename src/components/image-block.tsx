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
  } = blok;
  return (
    <div
      className={`lg:mt-28 mb-10 mx-auto px-5 lg:px-0 ${
        padding ? "container py-10" : " w-full"
      }`}
    >
      <div
        className={`flex justify-end gap-5 lg:gap-14 ${
          image_left
            ? "flex-col-reverse lg:flex-row-reverse"
            : " flex-col-reverse lg:flex-row lg:items-start lg:justify-end"
        }  ${heading_order ? "lg:px-20" : "lg:px-0"}`}
      >
        <div
          className={`lg:px-0 lg:w-[50%] lg:mt-20 ${
            !padding && "lg:ml-20"
          } flex flex-col ${
            heading_order
              ? "flex-col-reverse !items-start lg:w-[45%]"
              : "flex-col"
          }`}
        >
          <h2
            className={`${
              heading_order ? "text-[20px] italic" : style.imageSubtitle
            }`}
          >
            {subtitle}
          </h2>
          <h2
            className={`${
              heading_order ? "text-[20px] font-kis-italic" : style.imageTitle
            }`}
          >
            {title}
          </h2>

          <div
            className={`${
              heading_order
                ? "font-kis-italic text-[30px] lg:w-[70%] lg:text-[40px] mb-10"
                : style.imageParagraph
            } ${!padding && image_left && "pr-10"}`}
          >
            {render(content)}
          </div>
          {button &&
            button.length > 0 &&
            button.map((el: Links, index: number) => {
              return (
                <div className="flex w-[70%] text-[#1d1711]" key={index}>
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
          className={`lg:w-[50%] flex flex-col relative ${
            image_left ? "items-start" : " items-end"
          } ${
            heading_order
              ? "h-[500px] lg:h-[900px]"
              : " h-[300px] mt-4 lg:mt-0 lg:h-[600px]"
          }`}
        >
          {image.filename && (
            <Image
              src={image.filename}
              fill
              className="w-full"
              alt={image.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};
