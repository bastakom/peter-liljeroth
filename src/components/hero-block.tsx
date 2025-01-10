import { getAllSettings } from "@/app/data/get-settings";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

interface HeroBlockProps {
  blok: {
    title: string;
    extra_img: {
      filename: string;
      alt: string;
    };
    img: {
      filename: string;
      alt: string;
    };
    button: any;
    small_hero: boolean;
  };
}

export const HeroBlock = ({
  blok: { title, img, button, extra_img, small_hero },
}: HeroBlockProps) => {
  return (
    <div
      {...storyblokEditable}
      className="relative flex justify-center items-center"
    >
      <div className="absolute z-10 text-white text-center">
        <h2 className="text-[58px] max-w-[850px]">{title}</h2>
        <div className="flex gap-5 justify-center mt-10">
          {button.map((item: any) => {
            return (
              <Link
                href={item.link.cached_url}
                key={item._uid}
                className="button"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex w-full">
        <div
          className={`relative ${
            small_hero ? "w-full lg:min-h-[180px]" : "w-1/2 lg:min-h-[900px]"
          } h-full`}
        >
          <Image
            src={img.filename}
            fill
            alt={img.alt}
            className="object-cover"
          />
        </div>
        {!small_hero && (
          <div className="relative w-1/2 h-full lg:min-h-[900px]">
            <Image
              src={extra_img.filename}
              fill
              alt={img.alt}
              className="object-cover w-1/2"
            />
          </div>
        )}
      </div>
    </div>
  );
};
