import { HeroProduct } from "@/components/sections/HeroProduct";
import { TheProblem } from "@/components/sections/TheProblem";
import { MeetBuilder } from "@/components/sections/MeetBuilder";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { HowIThink } from "@/components/sections/HowIThink";
import { WorkingTogether } from "@/components/sections/WorkingTogether";
import { Engineering } from "@/components/sections/Engineering";
import { Proof } from "@/components/sections/Proof";
import { Philosophy } from "@/components/sections/Philosophy";
import { FinalMoment } from "@/components/sections/FinalMoment";

export default function Home() {
  return (
    <main className="flex flex-col w-full selection:bg-[#635BFF] selection:text-white">
      <HeroProduct />
      <TheProblem />
      <MeetBuilder />
      <FeaturedProducts />
      <HowIThink />
      <WorkingTogether />
      <Engineering />
      <Proof />
      <Philosophy />
      <FinalMoment />
    </main>
  );
}
