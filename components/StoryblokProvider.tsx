"use client";

import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import { Teaser } from "./Teaser";
import { HeroBlock } from "./hero-block";
import { CTABlock } from "./cta-block";

storyblokInit({
  components: {
    page: Page,
    teaser: Teaser,
    hero: HeroBlock,
    CTA: CTABlock,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
