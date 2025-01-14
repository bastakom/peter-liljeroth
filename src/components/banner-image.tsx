"use client";
import { render } from "storyblok-rich-text-react-renderer";
import style from "./scss/banner-image.module.scss";
import Image from "next/image";
import Link from "next/link";

interface BannerImageProps {
  blok: {
    title: string;
    subtitle: string;
    img: {
      filename: string;
      name: string;
    };
    link?: {
      cached_url: string;
    };
    linktitle: string;
  };
}

export const BannerImage = ({ blok }: any) => {
  const { img, title, subtitle, link, linktitle } = blok;

  return (
    <div className="flex justify-center my-10 lg:mt-28" id={blok.tag}>
      <div className="w-[90%] mx-auto h-[400px] lg:h-[567px] relative">
        <div className="bg-black opacity-30 w-full absolute top-0 h-full z-10" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
          <h2 className="text-white text-center text-[18px] lg:text-[22px] mb-4">
            {subtitle}
          </h2>
          <h2 className="text-white text-center text-[30px] lg:text-[48px] lg:w-[30%]">
            {title}
          </h2>

          {link.cached_url && (
            <div className={style.contentButton}>
              <Link href={link.cached_url}>{linktitle}</Link>
            </div>
          )}
        </div>
        {img.filename && (
          <Image
            src={img.filename}
            alt={img.name}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
    </div>
  );
};
