import { SomeLink } from "@/lib/interface";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Socials = ({ props }: any) => {
  return props.map((el: SomeLink) => {
    switch (el.some) {
      case "fb":
        return (
          <Link key={el._uid} href={el.link.cached_url}>
            <FaFacebookF fontSize={30} color="#F6EEDC" />
          </Link>
        );
      case "ig":
        return (
          <Link key={el._uid} href={el.link.cached_url}>
            <FaInstagram fontSize={30} color="#F6EEDC" />
          </Link>
        );
      default:
        "no value";
    }
  });
};
