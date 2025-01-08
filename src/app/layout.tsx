import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import "./globals.scss";
import { Header } from "@/components/ui/nav/header";
import { Footer } from "@/components/ui/footer/footer";

export const metadata: Metadata = {
  title: "Wellness Connect | Din Plattform för Hälsa och Välbefinnande",
  description:
    "Utforska Wellness Connect – din kompletta plattform för hälsa, träning och välbefinnande. Få inspiration, tips och resurser för att nå dina hälsomål och leva ditt bästa liv!",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-store",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="sv">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
