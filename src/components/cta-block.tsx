"use client";

import { LinkType } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

interface CTAGallery {
  img: {
    filename: string;
    alt: string;
  };
}

interface CTAblockProps {
  blok: {
    sub_title: string;
    title: string;
    three_images: boolean;
    bg: {
      filename: string;
      alt: string;
    };
    fields: CTAGallery[];
    buttons: LinkType[];
  };
}
export const CTABlock = ({ blok }: CTAblockProps) => {
  return (
    <div
      className={`relative mx-auto w-full flex justify-center h-[60vh] lg:mb-0 lg:h-full px-5 lg:px-0 ${
        blok.three_images ? "mb-20 mt-20 lg:mb-20 lg:mt-32" : "mb-10"
      }`}
    >
      <div
        className={`${
          blok.three_images
            ? "bg-black opacity-30 w-full absolute top-0 h-[70vh] md:hidden z-10"
            : "hidden"
        }`}
      />
      <div className="z-10 flex flex-col items-center justify-center text-center max-w-[70%] lg:max-w-[50%] gap-5 relative">
        {blok.three_images ? (
          <div className="py-32 lg:py-44 flex flex-col items-center justify-center gap-5">
            <h4 className="text-white text-[18px] lg:text-[22px] tracking-[1.5px] lg:tracking-[0.66px]">
              {blok.sub_title}
            </h4>

            <h2 className="text-white text-[32px] lg:text-[40px] tracking-[1px] lg:tracking-[0.66px]">
              {render(blok.title)}
            </h2>
            <div>
              {blok.buttons.map((button: LinkType, index: number) => {
                return (
                  <Link
                    key={index}
                    className="button text-white mt-6 lg:mt-8 cursor-pointer"
                    href={button.link.cached_url}
                  >
                    {button.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="py-44 flex flex-col-reverse items-center justify-center gap-5 lg:w-[70%]">
            <span className="text-[#DDCA7D] text-[16px] lg:text-[20px] font-kis-italic">
              {blok.sub_title}
            </span>
            <h3 className="text-white text-[22px] leading-9 lg:leading-[60px] lg:text-[40px] text-center">
              {render(blok.title)}
            </h3>
          </div>
        )}
      </div>
      {blok.bg.filename && (
        <Image
          src={blok.bg.filename}
          fill
          alt={blok.bg.alt}
          className="object-cover"
        />
      )}
      {blok.three_images && (
        <div className="absolute top-0 w-full">
          <div className="grid grid-cols-3">
            {blok.fields?.map((field: CTAGallery, index: number) => {
              return (
                <div
                  className="w-full relative h-[500px] lg:h-[600px]"
                  key={index}
                >
                  <Image
                    key={field.img.filename}
                    src={field.img.filename}
                    alt={field.img.alt}
                    fill
                    className="w-full h-full top-0 object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
