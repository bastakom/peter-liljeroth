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
    <div className="px-12 mt-4" {...storyblokEditable}>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold pb-4">{blok.title}</h1>
        <div className="font-inter-normal">{render(blok.content)}</div>
      </div>
    </div>
  );
};

export default OtherInformation;
