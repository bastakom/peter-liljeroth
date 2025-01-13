"use client";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

interface ContentBlock {
  blok: {
    title: string;
    subtitle?: string;
    content: React.ReactNode;
    secondcontent?: React.ReactNode;
    logo?: {
      filename: string;
      name: string;
    };
  };
}

export const ContentBlock = ({ blok }: ContentBlock) => {
  const { logo, subtitle, title, content, secondcontent } = blok;

  return (
    <div className="p-4 lg:p-0 lg:w-full mb-14">
      <div className="grid grid-cols-1 place-items-center ">
        <div className="lg:w-[45%] flex justify-center lg:pt-10">
          {logo && (
            <Image src={logo.filename} width={54} height={54} alt={logo.name} />
          )}
        </div>
        <div className="lg:w-[45%] text-center flex flex-col gap-8">
          <h2 className="text-[22px] mt-8">{subtitle}</h2>
          <h2 className="text-[30px] lg:text-[58px]">{title}</h2>

          <div> {render(content)}</div>
        </div>
      </div>
    </div>
  );
};
