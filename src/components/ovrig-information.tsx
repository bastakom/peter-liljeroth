"use client";

interface OtherInformationProps {
  blok: {
    title: string;
    content: React.ReactNode;
  };
}

import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const OtherInformation = ({ blok }: OtherInformationProps) => {
  return (
    <div
      className="px-6 mb-14 lg:mb-0 lg:px-40 lg:pt-28"
      {...storyblokEditable}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold pb-4">{blok.title}</h2>
        <div className="text-[18px]">{render(blok.content)}</div>
      </div>
    </div>
  );
};

export default OtherInformation;
