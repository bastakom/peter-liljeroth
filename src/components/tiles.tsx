"use client";
import { render } from "storyblok-rich-text-react-renderer";
import style from "./scss/tiles.module.scss";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState } from "react";

interface Fields {
  content: React.ReactNode;
  readmore_content: React.ReactNode;
  styling_smycken?: boolean;
  margin?: boolean;
  one_column?: boolean;
  heading?: string;
  show_read_more?: boolean;
}

interface TilesProps {
  blok: {
    heading: string;
    subtitle: string;
    component: string;
    fields: Fields[];
    content: React.ReactNode;
    readmore_content: React.ReactNode;
  };
}

export const Tiles = ({ blok }: TilesProps) => {
  const { fields, component, heading, subtitle, content } = blok;

  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>(
    fields?.map(() => false) || []
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDropdown = (index: any) => {
    setOpenDropdowns((prev) => {
      const newOpenDropdowns = { ...prev, [index]: !prev[index] };
      if (newOpenDropdowns[index] === false) {
        refs.current[index]?.scrollIntoView();
      }
      return newOpenDropdowns;
    });
  };
  const oneColumn = fields?.some((field) => field.one_column === true);
  const hasStylingSmycken = fields?.some((field) => field.styling_smycken);
  const margin = fields?.some((field) => field.margin);

  return (
    <div
      className={`${
        hasStylingSmycken || oneColumn
          ? "mt-0 w-[90%] mx-auto mb-10 lg:mb-0"
          : style.container
      }
    ${margin ? "lg:pl-16" : ""}
    `}
    >
      {component === "content_intro" && (
        <div className="lg:w-[55%]">
          <h1
            className="text-[#AB8100] text-[22px] mb-[20px] font-[adobe-kis-variable, sans-serif]
  "
          >
            {subtitle}
          </h1>
          <h2 className={style.tilesSubtitle}>{heading}</h2>
          <div className={style.tilesParagraph}>{render(content)}</div>
        </div>
      )}

      <div
        className={`${
          oneColumn
            ? "flex justify-center"
            : "lg:grid grid-cols-2 gap-12 lg:-mt- mb-10 "
        } `}
      >
        {component === "tilesblock" &&
          fields?.map((el, index) => {
            const showMoreForThisField = el.show_read_more === true;

            return (
              <div
                key={index}
                className={`${
                  oneColumn ? "lg:w-[60%]" : "lg:w-[90%] mb-10 lg:mb-0"
                }`}
                ref={(el) => {
                  refs.current[index] = el;
                }}
              >
                <hr
                  className={`${
                    oneColumn || hasStylingSmycken
                      ? "hidden"
                      : "w-[15%] border-t-2 border-gray-300 pb-6 mt-20"
                  }`}
                ></hr>
                <h1
                  className={`${
                    hasStylingSmycken ? "text-[48px] mb-4" : style.tilesHeading
                  }`}
                >
                  {el.heading}
                </h1>
                <div
                  className={`text-[18px] ${
                    oneColumn ? "text-center" : "text-start"
                  }`}
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {render(el.content)}

                  {openDropdowns[index] && (
                    <div className={`mt-6`}>{render(el.readmore_content)}</div>
                  )}
                </div>

                {showMoreForThisField && (
                  <button
                    className={`flex items-center ${
                      oneColumn ? "justify-center w-full" : "text-left"
                    } cursor-pointer mt-4 mb-4 lg:mb-0 lg:mt-4`}
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="font-inter-thin text-[18px]">
                      {openDropdowns[index] ? "Läs mindre" : "Läs mer"}
                    </div>
                    <MdKeyboardArrowUp
                      fontSize={20}
                      className={`ml-2 ${
                        openDropdowns[index] ? "rotate-0" : "rotate-180"
                      } `}
                    />
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
