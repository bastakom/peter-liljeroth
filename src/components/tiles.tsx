"use client";
import { render } from "storyblok-rich-text-react-renderer";
import style from "./scss/tiles.module.scss";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

interface Fields {
  content: React.ReactNode;
  readmore_content: React.ReactNode;
  styling_smycken?: boolean;
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

  const toggleDropdown = (index: number) => {
    const newDropdowns = [...openDropdowns];
    newDropdowns[index] = !newDropdowns[index];
    setOpenDropdowns(newDropdowns);
  };

  const oneColumn = fields?.some((field) => field.one_column === true);
  const hasStylingSmycken = fields?.some((field) => field.styling_smycken);

  return (
    <div
      className={`${
        hasStylingSmycken || oneColumn
          ? "mt-0 w-[90%] mx-auto"
          : style.container
      }
  `}
    >
      {component === "content_intro" && (
        <div className="lg:w-[55%]">
          <h1 className={style.tilesHeading}>{subtitle}</h1>
          <h2 className={style.tilesSubtitle}>{heading}</h2>
          <div className={style.tilesParagraph}>{render(content)}</div>
        </div>
      )}

      <div
        className={`${
          oneColumn
            ? "flex justify-center"
            : "lg:grid grid-cols-2 gap-12 mb-10 lg:mb-0"
        }`}
      >
        {component === "tilesblock" &&
          fields?.map((el, index) => {
            const showMoreForThisField = el.show_read_more === true;

            return (
              <div
                key={index}
                className={`${oneColumn ? "lg:w-[45%]" : "lg:w-[90%]"}`}
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
                  className={`${oneColumn ? "text-center" : "text-start"}`}
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {render(el.content)}

                  {openDropdowns[index] && (
                    <div className="mt-6">{render(el.readmore_content)}</div>
                  )}
                </div>

                {showMoreForThisField && (
                  <div
                    className="flex items-center justify-end cursor-pointer mt-4 mb-4 lg:mb-0 lg:mt-2"
                    onClick={() => toggleDropdown(index)}
                  >
                    {openDropdowns[index] ? (
                      <>
                        <div className="font-kis-normal text-[18px]">
                          Läs mindre
                        </div>
                        <MdKeyboardArrowUp fontSize={20} className="ml-2" />
                      </>
                    ) : (
                      <>
                        <div className="font-kis-normal text-[18px]">
                          Läs mer
                        </div>
                        <IoIosArrowDown fontSize={20} className="ml-2" />
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
