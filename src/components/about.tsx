"use client";
import { render } from "storyblok-rich-text-react-renderer";
import style from "./scss/about.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import useStore from "@/lib/store";

import Image from "next/image";

interface Mark {
  type: string;
}

interface TextNode {
  text: string;
  type: "text";
  marks?: Mark[];
}

interface ContentNode {
  type: "heading" | "paragraph" | "hard_break";
  attrs?: {
    level?: number;
  };
  content?: TextNode[];
  heading: string;
}

interface ImageBlockProps {
  blok: {
    heading: string;
    subtitle?: string;
    content: ContentNode;
    secondcontent: ContentNode;
    image: {
      filename: string;
      name: string;
    };
  };
}

const AboutBlock = ({ blok }: ImageBlockProps) => {
  const { content, image, heading, subtitle, secondcontent } = blok;
  const { isDropdownAboutOpen, setDropdownAboutOpen } = useStore();

  return (
    <div className="lg:w-[100vw] mt-10 mb-10 lg:mt-28 lg:mb-20 lg:px-20 ">
      <div className="lg:flex lg:w-[100%]">
        <div className="px-4 lg:px-0 lg:w-[50%] flex flex-col lg:ml-16">
          <h2 className={style.imageSubtitle}>{subtitle}</h2>
          <h2 className="text-[28px] lg:text-[58px] pt-10 lg:pt-0 mb-10">
            {heading}
          </h2>
          <div className={style.aboutParagraph}>{render(content)}</div>

          {isDropdownAboutOpen && (
            <div className={style.aboutSecondParagraph}>
              {render(secondcontent)}
            </div>
          )}

          <div
            className="flex items-center justify-end cursor-pointer mt-4 mb-4 lg:mb-0 lg:mt-2"
            onClick={() => setDropdownAboutOpen(!isDropdownAboutOpen)}
          >
            {isDropdownAboutOpen ? (
              <>
                <div className="text-[18px]">Läs mindre</div>
                <MdKeyboardArrowUp fontSize={20} className="ml-2" />
              </>
            ) : (
              <>
                <div className="text-[18px]">Läs mer</div>
                <IoIosArrowDown fontSize={20} className="ml-2" />
              </>
            )}
          </div>
        </div>
        <div className="lg:w-[50%] flex flex-col items-end">
          {image.filename && (
            <Image
              src={image.filename}
              width={728}
              height={120}
              alt={image.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
