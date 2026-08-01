import { HeroProduct } from "@/components/sections/HeroProduct";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Engineering } from "@/components/sections/Engineering";
import { HowIThink } from "@/components/sections/HowIThink";
import { MeetBuilder } from "@/components/sections/MeetBuilder";

import { Industries } from "@/components/sections/Industries";
import { FAQ } from "@/components/sections/FAQ";
import { LocalBusinessPitch } from "@/components/sections/LocalBusinessPitch";
import { FinalMoment } from "@/components/sections/FinalMoment";

export default function Home() {
  return (
    <main className="w-full selection:bg-brand-primary selection:text-white">
      <HeroProduct />
      <FeaturedProducts />
      <SelectedWork />
      <Engineering />
      <HowIThink />
      <MeetBuilder />

      <Industries />
      <FAQ />
      <LocalBusinessPitch />
      <FinalMoment />
    </main>
  );
}

