"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "./Page";
import { Teaser } from "./Teaser";
import { HeroBlock } from "./hero-block";
import { CTABlock } from "./cta-block";
import { Contact } from "./contact";
import { BannerImage } from "./banner-image";
import { ContentBlock } from "./content-block";
import { ImageBlock } from "./image-block";
import { AboutBlock } from "./about";
import { Tiles } from "./tiles";
import { ProductBlock } from "./product-block";
import { Filter } from "./filter";
import OtherInformation from "./ovrig-information";
import { SomeLinks } from "./some-block";
import { PropsWithChildren } from "react";
import { VideoBlock } from "./video-block";

storyblokInit({
  components: {
    Page: Page,
    teaser: Teaser,
    hero: HeroBlock,
    CTA: CTABlock,
    contact_page: Contact,
    banner_image: BannerImage,
    content_section: ContentBlock,
    image_block: ImageBlock,
    section_content: AboutBlock,
    tilesblock: Tiles,
    content_intro: Tiles,
    product_block: ProductBlock,
    filter: Filter,
    other_information: OtherInformation,
    some_block: SomeLinks,
    video: VideoBlock,
  },
  use: [apiPlugin],

  apiOptions: {
    region: "eu",
  },
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
