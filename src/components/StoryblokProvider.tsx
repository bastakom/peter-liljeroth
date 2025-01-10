"use client";

import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
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
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
