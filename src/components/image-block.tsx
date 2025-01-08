"use client";
import { render } from "storyblok-rich-text-react-renderer";
import style from "./scss/image-block.module.scss";
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
    title: string;
    image_left: boolean;
    heading_order: boolean;
    content: ContentNode;
    image: {
      filename: string;
      name: string;
    };
  };
}

const ImageBlock = ({ blok }: ImageBlockProps) => {
  const { content, image, image_left, title, heading_order } = blok;

  return (
    <div className="lg:w-[100vw] mt-28 mb-10">
      <div
        className={`flex w-[100%] ${
          image_left
            ? "flex-col-reverse lg:flex-row-reverse"
            : " flex-col-reverse lg:flex-row items-start justify-end"
        }  ${heading_order ? "lg:px-20" : "lg:px-0"}`}
      >
        <div
          className={`px-4 lg:px-0 lg:w-[50%] mt-20 flex flex-col ${
            image_left ? "lg:items-start" : "lg:items-end"
          } ${
            heading_order
              ? "flex-col-reverse !items-start lg:w-[45%]"
              : "flex-col"
          }`}
        >
          <h2
            className={`${
              heading_order ? "text-[20px] italic" : style.imageTitle
            }`}
          >
            {title}
          </h2>
          <div
            className={`${
              heading_order
                ? "text-[30px] lg:text-[40px] mb-10"
                : style.imageParagraph
            }`}
          >
            {render(content)}
          </div>
        </div>
        <div
          className={`lg:w-[50%] flex flex-col ${
            image_left ? "items-start" : " items-end"
          }`}
        >
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

export default ImageBlock;
