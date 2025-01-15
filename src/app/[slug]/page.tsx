import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

async function fetchData(slug: string) {
  let sbParams = {
    version: "draft" as const,
    resolve_relations: ["product_block.products"],
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/${slug}`, sbParams);

    if (!data) {
      redirect("/500");
    }

    return { data };
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    }
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;

  try {
    const story = await fetchData(slugName);
    if (!story || !story.data || !story.data.data.story) {
      redirect("/500");
    }
    return <StoryblokStory story={story.data.data.story} />;
  } catch (error: any) {
    notFound();
  }
};

export default Page;
