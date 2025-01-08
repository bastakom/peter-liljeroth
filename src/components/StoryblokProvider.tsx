"use client";

import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import { Teaser } from "./Teaser";
import { HeroBlock } from "./hero-block";
import { CTABlock } from "./cta-block";
import Contact from "./contact";
import ImageBlock from "./image-block";
import AboutBlock from "./about";

storyblokInit({
  components: {
    Page: Page,
    teaser: Teaser,
    hero: HeroBlock,
    CTA: CTABlock,
    contact_page: Contact,
    image_block: ImageBlock,
    about: AboutBlock,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
