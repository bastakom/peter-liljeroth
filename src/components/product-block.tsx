"use client";

import Image from "next/image";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { render } from "storyblok-rich-text-react-renderer";

export const ProductBlock = ({ blok }: any) => {
  const [open, setIsOpen] = useState<string | null>(null);
  const [close, setClose] = useState<boolean>(false);

  const handleOpenModal = (id: string) => {
    setIsOpen(open === id ? null : id);
  };

  return (
    <div className="lg:py-20 w-[90%] mx-auto">
      <h2 className="text-[38px]">{blok.title}</h2>
      <div className="grid lg:grid-cols-4 gap-14 mx-auto ">
        {blok.products.map((item: any) => {
          return (
            <button
              key={item.uuid}
              className="flex flex-col gap-5"
              onClick={() => handleOpenModal(item.uuid)}
            >
              <div className="w-full h-[400px] relative">
                <Image
                  src={item.content.image?.filename || ""}
                  fill
                  alt=""
                  className="py-10 object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <h4 className="text-[13px]">{item.content.sub_title}</h4>
                <h2 className="text-[28px]">{item.name}</h2>
              </div>
            </button>
          );
        })}

        {blok.products.map((item: any) =>
          open === item.uuid ? (
            <div
              className="fixed top-0 w-full h-[100vh] flex justify-center items-center z-50 left-0 text-white"
              key={item.uuid}
            >
              <div
                className="opacity-60 bg-black w-full h-full"
                onClick={() => handleOpenModal("")}
              />
              <div
                className={`bg-white px-20 rounded-xl text-black flex flex-col justify-center h-[500px] lg:w-[50%] absolute ${
                  open === item.uuid && "animate-fade-up"
                }`}
              >
                <button
                  onClick={() => handleOpenModal("")}
                  className="top-4 absolute right-4"
                >
                  <IoCloseCircleOutline fontSize={40} />
                </button>
                <div className="grid lg:grid-cols-2 gap-14">
                  <Image
                    src={item.content.image?.filename || ""}
                    width={300}
                    height={300}
                    alt=""
                    className="py-10 object-contain"
                  />
                  <div className="flex flex-col justify-center gap-5">
                    <div>
                      <h4 className="text-[13px]">{item.content.sub_title}</h4>
                      <h2 className="text-[28px]">{item.name}</h2>
                    </div>
                    <span>{render(item.content.content)}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
