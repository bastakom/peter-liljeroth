"use server";

import { getAllSettings } from "@/app/data/get-settings";
import { NavBar } from "./nav";

export const Header = async () => {
  const res = await getAllSettings();
  return <NavBar props={res.story.content} />;
};
