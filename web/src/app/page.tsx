import { Hero } from "@/components/sections/Hero";
import { FeaturedStories } from "@/components/sections/FeaturedStories";
import { DevelopmentProcess } from "@/components/sections/DevelopmentProcess";
import { Technology } from "@/components/sections/Technology";
import { Manifesto } from "@/components/sections/Manifesto";
import { HowIThink } from "@/components/sections/HowIThink";
import { HireMe } from "@/components/sections/HireMe";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full selection:bg-[#635BFF] selection:text-white">
      <Hero />
      <Manifesto />
      <HowIThink />
      <FeaturedStories />
      <DevelopmentProcess />
      <Technology />
      <HireMe />
      <Experience />
      <Contact />
    </main>
  );
}
