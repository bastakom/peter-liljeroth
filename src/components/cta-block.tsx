"use client"

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
  };
}
export const CTABlock = ({ blok }: CTAblockProps) => {
  return (
    <div className="relative py-44 mx-auto w-full flex justify-center">
      <div className="z-10 flex flex-col  items-center justify-center text-center max-w-[50%] gap-5 relative italic">
        {blok.three_images ? (
          <>
            <span className="text-orange-400 text-[20px]">
              {blok.sub_title}
            </span>
            <h3 className="text-white text-[40px]">{render(blok.title)}</h3>
            {}
            <Link href="/gallery" className="button"></Link>
          </>
        ) : (
          <>
            <h3 className="text-white text-[40px]">{render(blok.title)}</h3>
            <span className="text-orange-400 text-[20px]">
              {blok.sub_title}
            </span>
          </>
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
            <div className="bg-black opacity-30 w-full h-full absolute top-0" />
            {blok.fields?.map((field: CTAGallery) => {
              return (
                <Image
                  key={field.img.filename}
                  src={field.img.filename}
                  alt={field.img.alt}
                  width={500}
                  height={500}
                  className="w-full h-full top-0"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
