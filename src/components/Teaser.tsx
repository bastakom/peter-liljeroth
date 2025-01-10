interface TeaserProps {
  blok: {
    headline: string;
    content: React.ReactNode;
  };
}

export const Teaser = ({ blok }: TeaserProps) => {
  const { headline } = blok;
  return (
    <div className="flex justify-center pt-16">
      <h2 className="text-[22px]">{headline}</h2>
    </div>
  );
};
