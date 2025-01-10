"use client";

interface Mark {
  type: string;
}

interface ContentNode {
  type: "heading" | "paragraph" | "hard_break";
  attrs?: {
    level?: number;
  };
  content?: Array<{
    text: string;
    type: "text";
    marks?: Mark[];
  }>;
}

interface ContactContent {
  type: "doc";
  content: ContentNode[];
}

interface ContactProps {
  heading: string;
  info: string;
  business_information: ContactContent;
}

import { Form } from "@/components/Form/Form";
import { render } from "storyblok-rich-text-react-renderer";

export const Contact = ({ blok }: any) => {
  return (
    <div className="lg:mt-16 lg:mb-16">
      <h1 className="font-kis-normal px-32 text-[22px] uppercase">
        {blok.heading}
      </h1>

      <div className="w-full lg:h-full text-center lg:text-start px-6 lg:flex lg:px-32 mt-10 text-[18px]">
        <div>
          <div className="font-inter-thin lg:w-[80%] mb-10">
            {render(blok.info)}
          </div>
          <div className="font-dupincel render-content">
            {render(blok.business_information)}
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};
