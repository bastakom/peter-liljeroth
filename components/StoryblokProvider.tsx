"use client";

import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import { Teaser } from "./Teaser";
import { HeroBlock } from "./hero-block";

storyblokInit({
  components: {
    page: Page,
    teaser: Teaser,
    hero: HeroBlock,
  },
  enableFallbackComponent: true,
  
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
