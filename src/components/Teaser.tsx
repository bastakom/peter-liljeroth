interface TeaserProps {
  blok: {
    headline: string;
    content: React.ReactNode;
  };
}

export const Teaser = ({ blok }: TeaserProps) => {
  const { headline } = blok;
  return (
    <div className="flex justify-center lg:pt-16 ">
      <h2 className="text-[18px] lg:text-[22px] tracking-[0.46px]">
        {headline}
      </h2>
    </div>
  );
};
