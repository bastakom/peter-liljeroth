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
      <div className="absolute z-10 flex flex-col justify-center items-center text-white text-center w-full">
        <h2 className="text-[34px] text-center lg:text-[58px] max-w-[850px]">
          {title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-10">
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
            small_hero
              ? "w-full min-h-[180px]"
              : "w-full lg:w-1/2 min-h-[900px]"
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
          <div className="relative lg:w-1/2 h-full min-h-[900px]">
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
