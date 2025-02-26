import { getStoryblokApi } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";

export const fetchProducts = async () => {
  let sbParams = {
    version: "published" as const,
    starts_with: "products/",
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/`, sbParams, {
      cache: "no-store",
    });

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
