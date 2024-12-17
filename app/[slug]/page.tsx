import { StoryblokStory } from "@storyblok/react/rsc";
import { getAllSettings } from "@/app/data/get-settings";
import { fetchData } from "@/app/data/get-data";

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await fetchData(slugName);
  const config = await getAllSettings();

  return <StoryblokStory story={story.data.data.story} />;
};

export default Page;
