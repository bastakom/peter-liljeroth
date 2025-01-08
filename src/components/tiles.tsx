"use client";
import { render } from "storyblok-rich-text-react-renderer";
import style from "./scss/tiles.module.scss";

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

interface Fields {
  content: ContentNode[];
}

interface TilesProps {
  blok: {
    heading: string;
    subtitle: string;
    component: string;
    fields: Fields[];
    content: ContentNode;
  };
}

const Tiles = ({ blok }: TilesProps) => {
  console.log(blok);

  const { fields, component, heading, subtitle, content } = blok;

  return (
    <div className={style.container}>
      {component === "content_intro" && (
        <div className="lg:w-[70%]">
          <h1 className={style.tilesHeading}>{subtitle}</h1>
          <h2 className={style.tilesSubtitle}>{heading}</h2>
          <div className={style.tilesParagraph}>{render(content)}</div>
        </div>
      )}

      <div className="lg:grid grid-cols-2 gap-12 mb-10">
        {component === "tilesblock" &&
          fields.map((el: any, index: number) => {
            return (
              <div key={index} className="lg:w-[90%]">
                <hr className="w-[15%] border-t-2 border-gray-300 pb-6 mt-20"></hr>
                <h1 className={style.tilesHeading}>{el.heading}</h1>
                <div className={style.tilesParagraph}>{render(el.content)}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tiles;
