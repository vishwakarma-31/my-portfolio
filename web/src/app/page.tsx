import { HeroProduct } from "@/components/sections/HeroProduct";
import { Proof } from "@/components/sections/Proof";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Industries } from "@/components/sections/Industries";
import { MeetBuilder } from "@/components/sections/MeetBuilder";
import { HowIThink } from "@/components/sections/HowIThink";
import { WorkingTogether } from "@/components/sections/WorkingTogether";
import { Engineering } from "@/components/sections/Engineering";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Philosophy } from "@/components/sections/Philosophy";
import { FinalMoment } from "@/components/sections/FinalMoment";

export default function Home() {
  return (
    <main className="w-full selection:bg-brand-primary selection:text-white">
      {/* 1 & 2: Introduction & Outcomes */}
      <HeroProduct />
      <Proof />
      
      {/* 3, 4, 5, 6: Product First - Demonstrations & Capabilities */}
      <FeaturedProducts />
      <SelectedWork />
      <WhatIBuild />
      <Industries />
      
      {/* Note: Engineering remains as a deep-dive capability matrix alongside WhatIBuild */}
      <Engineering />
      
      {/* 7, 8, 9: Supporting Narrative - Who & Why */}
      <HowIThink />
      <MeetBuilder />
      <WorkingTogether />
      
      {/* 10, 11, 12: Trust & Objections */}
      <WhyChooseMe />
      <Testimonials />
      <FAQ />
      
      {/* 13 & 14: Conversion */}
      <Philosophy />
      <FinalMoment />
    </main>
  );
}
