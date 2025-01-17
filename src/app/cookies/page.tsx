import dynamic from "next/dynamic";
import Image from "next/image";
const CookieConsent = dynamic(() => import("../../components/CookieConsent"), {
  ssr: false,
});
const Cookies = () => {
  return (
    <div>
      <div className="h-[220px] w-full relative top-0">
        <Image
          src={
            "https://a.storyblok.com/f/317549/1920x406/28df10aa66/logo_pattern_small.png"
          }
          fill
          className="object-cover"
          alt=""
        />
      </div>
      <CookieConsent />;
    </div>
  );
};

export default Cookies;
