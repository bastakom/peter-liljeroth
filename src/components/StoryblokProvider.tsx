"use client";

import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import { Teaser } from "./Teaser";
import { HeroBlock } from "./hero-block";
import { CTABlock } from "./cta-block";
import Contact from "./contact";
import ContentBlock from "./content-block";

storyblokInit({
  components: {
    Page: Page,
    teaser: Teaser,
    hero: HeroBlock,
    CTA: CTABlock,
    contact_page: Contact,
    content_section: ContentBlock,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
