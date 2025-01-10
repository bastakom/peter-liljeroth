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
    content: React.ReactNode;
    image: {
      filename: string;
      name: string;
    };
    button: Links[];
  };
}

export const ImageBlock = ({ blok }: ImageBlockProps) => {
  const { content, image, image_left, title, heading_order, subtitle, button } =
    blok;
  return (
    <div className="mt-28 mb-10 w-[90%] mx-auto">
      <div
        className={`flex justify-end gap-0 lg:gap-14 ${
          image_left
            ? "flex-col-reverse lg:flex-row-reverse"
            : " flex-col-reverse lg:flex-row items-start justify-end"
        }  ${heading_order ? "lg:px-20" : "lg:px-0"}`}
      >
        <div
          className={`px-4 lg:px-0 lg:w-[50%] mt-20 flex flex-col ${
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
              heading_order ? "text-[20px] italic" : style.imageTitle
            }`}
          >
            {title}
          </h2>

          <div
            className={`${
              heading_order
                ? "text-[30px] lg:text-[40px] mb-10"
                : style.imageParagraph
            }`}
          >
            {render(content)}
          </div>
          {button &&
            button.length > 0 &&
            button.map((el: Links, index: number) => {
              return (
                <div className="flex w-[70%]" key={index}>
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
          className={`lg:w-[50%] flex flex-col h-[900px] relative ${
            image_left ? "items-start" : " items-end"
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
