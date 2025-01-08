interface TeaserProps {
  blok: {
    title: string;
    content: React.ReactNode;
  };
}

export const Teaser = ({ blok }: TeaserProps) => {
  return <pre>{JSON.stringify(blok, null, 2)}</pre>;
};
