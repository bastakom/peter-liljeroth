"use client";

export const VideoBlock = ({ blok }: any) => {
  console.log(blok);
  return (
    blok?.video?.filename && (
      <div className="p-5 lg:max-w-[85%] mx-auto">
        <video autoPlay muted controls>
          <source src={blok.video.filename} />
        </video>
      </div>
    )
  );
};
