"use server";

import { getAllSettings } from "@/app/data/get-settings";
import { FooterSection } from "./footerSection";

export const Footer = async () => {
  const res = await getAllSettings();
  return <FooterSection props={res.story.content} />;
};
