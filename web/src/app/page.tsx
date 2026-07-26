import { Hero } from "@/components/sections/Hero";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { FeaturedStories } from "@/components/sections/FeaturedStories";
import { HowIThink } from "@/components/sections/HowIThink";
import { DevelopmentProcess } from "@/components/sections/DevelopmentProcess";
import { Technology } from "@/components/sections/Technology";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Manifesto } from "@/components/sections/Manifesto";
import { HireMe } from "@/components/sections/HireMe";

export default function Home() {
  return (
    <main className="flex flex-col w-full selection:bg-[#635BFF] selection:text-white">
      <Hero />
      <Manifesto />
      <WhatIBuild />
      <FeaturedStories />
      <HireMe />
      {/* Keeping previous sections for now, can be refactored later */}
      <HowIThink />
      <DevelopmentProcess />
      <Technology />
      <Experience />
      <Contact />
    </main>
  );
}
