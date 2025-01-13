"use client";
import { useState } from "react";

import Link from "next/link";

export const Filter = ({ blok }: any) => {
  const [headerActive, setHeaderActive] = useState(0);

  const handleMenuClick = (id: any) => {
    setHeaderActive(id);
  };

  return (
    <div className="text-center my-14">
      <div className="lg:my-20 flex flex-col gap-5">
        <h2 className="text-[22px]">{blok.sub_title}</h2>
        <h4 className="text-[58px]">{blok.title}</h4>
      </div>
      <div className="flex gap-5 mt-10 lg:mt-0 lg:gap-14 flex-col lg:flex-row justify-center">
        {blok.tags.map((item: any, i: number) => {
          const slicedTag = item.tag.replace(/\s+/g, "").toLowerCase();

          return (
            <Link
              href={`#${slicedTag}`}
              className={`${headerActive} ${
                headerActive === i ? "underline text-[#1D1711]" : ""
              } text-[28px] hover:underline hover:text-[#1D1711]`}
              key={i}
              onClick={() => handleMenuClick(i)}
            >
              {item.tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
