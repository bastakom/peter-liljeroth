"use client";

import Image from "next/image";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { render } from "storyblok-rich-text-react-renderer";
import { Carousel } from "./ui/carousel/carousel";
import useStore from "@/lib/store";

export const ProductBlock = ({ blok }: any) => {
  const { openModal, setOpenModal } = useStore();
  const [close, setClose] = useState<boolean>(false);
  const handleOpenModal = (id: any) => {
    setOpenModal(openModal === id ? null : id);
  };
  return (
    <div className="pt-4 font-kis-normal lg:pt-20 lg:w-[90%] mx-auto px-5 lg:px-0">
      <h2 className="text-[28px] lg:text-[38px] mb-6 lg:mb-10 text-[#1D1711]">
        {blok.title}
      </h2>
      <Carousel images={blok.products} />

      <div className="lg:grid grid-cols-1 lg:grid-cols-4 gap-5 mx-auto ">
        {blok.products.map((item: any) => {
          return (
            <button
              key={item.uuid}
              className="flex flex-col gap-4 bg-[white] lg:h-[50vh]"
              onClick={() => handleOpenModal(item.uuid)}
            >
              <div className="w-full h-[45vh] gap-4 lg:h-[100%] 3xl:h-[600px] relative hidden lg:flex">
                <Image
                  src={item.content.image?.filename || ""}
                  alt=""
                  fill
                  objectFit="cover"
                  className="lg:object-contain hidden lg:flex"
                />
              </div>
              <div className="flex-col text-left bg-[#fff] w-full pt-0 mb-6 lg:mb-0 hidden lg:flex">
                <h4 className="text-[13px]">{item.content.sub_title}</h4>
                <h2 className="text-[28px]">{item.name}</h2>
              </div>
            </button>
          );
        })}

        {blok.products.map((item: any) =>
          openModal === item.uuid ? (
            <div
              className="fixed top-0 w-full h-[100vh] lg:h-[100vh] flex justify-center items-center z-50 left-0 text-white"
              key={item.uuid}
            >
              <div
                className="opacity-60 bg-black w-full h-full"
                onClick={() => handleOpenModal("")}
              />
              <div
                className={`bg-white lg:px-20 rounded-xl text-black flex flex-col justify-center m-5 lg:m-0 h-[90%] px-10 lg:h-[500px] lg:w-[50%] absolute ${
                  openModal === item.uuid && "animate-fade-up"
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
                    className="py-5 lg:py-10 object-contain h-[200px] lg:h-[300px] "
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
