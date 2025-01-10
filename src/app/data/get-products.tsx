import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";

export const fetchProducts = async () => {
  let sbParams = {
    version: "draft" as const,
    starts_with: "products/",
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return { data };
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
};
