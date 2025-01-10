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
    <div className="relative mx-auto w-full flex justify-center">
      <div className="z-10 flex flex-col  items-center justify-center text-center max-w-[50%] gap-5 relative italic">
        {blok.three_images ? (
          <div className="py-44 flex flex-col items-center justify-center gap-5">
            <span className="text-white text-[20px]">
              {blok.sub_title}
            </span>
            <h3 className="text-white text-[40px]">{render(blok.title)}</h3>
            <div>
              {blok.buttons.map((button: LinkType, index: number) => {
                return (
                  <Link
                    key={index}
                    className="button text-white"
                    href={button.link.cached_url}
                  >
                    {button.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="py-44 flex flex-col items-center justify-center gap-5">
            <h3 className="text-white text-[40px]">{render(blok.title)}</h3>
            <span className="text-orange-400 text-[20px]">
              {blok.sub_title}
            </span>
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
                <div className="w-full relative h-[600px]" key={index}>
                  <Image
                    key={field.img.filename}
                    src={field.img.filename}
                    alt={field.img.alt}
                    fill
                    className="w-full h-full top-0"
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
