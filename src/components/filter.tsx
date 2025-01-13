"use client";

import Link from "next/link";

export const Filter = ({ blok }: any) => {
  return (
    <div className="text-center my-14">
      <div className="lg:my-20 flex flex-col gap-5">
        <h2 className="text-[22px]">{blok.sub_title}</h2>
        <h4 className="text-[58px]">{blok.title}</h4>
      </div>
      <div className="flex gap-5 mt-10 lg:mt-0 lg:gap-14 flex-col lg:flex-row justify-center">
        {blok.tags.map((item: any) => {
          const slicedTag = item.tag.replace(/\s+/g, "").toLowerCase();
          return (
            <Link
              href={`#${slicedTag}`}
              className={`text-[28px]`}
              key={slicedTag}
            >
              {item.tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
