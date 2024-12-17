import { getStoryblokApi } from "@storyblok/react";

export async function getAllSettings() {
  let sbParams = {
    version: "draft" as const,
  };

  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/settings`, sbParams);

  const config = { story: data.data.story };

  return config;
}
