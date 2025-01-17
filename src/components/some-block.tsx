import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { SomeLink } from "@/lib/interface";

interface SomeLinks {
  blok: {
    some: SomeLink[];
    contact_title: string;
    email: {
      cached_url: string;
      url: string;
    };
  };
}

export const SomeLinks = ({ blok }: SomeLinks) => {
  const { some, contact_title, email } = blok;
  return (
    <div className="flex flex-col mt-2 lg:mt-20 px-8 lg:px-16 gap-12 pt-0 mb-12 lg:mb-0 lg:pt-8">
      <div className="flex justify-center flex-col items-center">
        <hr className="w-[20%] lg:w-[6%] border-t-2 border-gray-300 pb-6 mt-20"></hr>
        <h2 className="text-[22px] mb-4">{contact_title}</h2>
        <Link
          href={`mailto:${email.cached_url}`}
          className="font-inter-thin text-[18px] lg:text-[22px]"
        >
          {email.url}
        </Link>
      </div>
      <div className="flex justify-center flex-row items-center gap-4">
        {some.map((el: SomeLink) => {
          switch (el.some) {
            case "fb":
              return (
                <Link key={el._uid} href={el.link.cached_url}>
                  <FaFacebookF fontSize={33} color="#AB8100" />
                </Link>
              );

            case "ig":
              return (
                <Link key={el._uid} href={el.link.cached_url}>
                  <FaInstagram fontSize={30} color="#AB8100" />
                </Link>
              );
            default:
              "no value";
          }
        })}
      </div>
    </div>
  );
};
