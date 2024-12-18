import Image from "next/image";

interface CTAblockProps {
  blok: {
    sub_title: string;
    title: string;
    bg: {
      filename: string;
      alt: string;
    };
  };
}

export const CTABlock = ({ blok }: CTAblockProps) => {
  return (
    <div className="relative py-44 mx-auto w-full flex justify-center">
      <div className="z-10 flex flex-col  items-center justify-center text-center max-w-[40%] gap-5 relative italic">
        <h3 className="text-white text-[40px]">{blok.title}</h3>
        <span className="text-orange-400 text-[20px]">{blok.sub_title}</span>
      </div>
      <Image
        src={blok.bg.filename}
        fill
        alt={blok.bg.alt}
        className="object-cover"
      />
    </div>
  );
};
