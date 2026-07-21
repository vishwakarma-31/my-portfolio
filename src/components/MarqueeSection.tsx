import React, { useRef, useState, useEffect } from "react";

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      
      // Calculate scroll offset based on scroll formula in prompt:
      // (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once initially
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Tripled lists for seamless repetition
  const row1 = [...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11)];
  const row2 = [...IMAGES.slice(11), ...IMAGES.slice(11), ...IMAGES.slice(11)];

  // Calculate translation bounds to avoid translating off-screen too far
  // Moves RIGHT on scroll: translateX(offset - 200)
  const translateXRow1 = scrollOffset - 350;
  // Moves LEFT on scroll: translateX(-(offset - 200))
  const translateXRow2 = -(scrollOffset - 350);

  return (
    <div
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-12 overflow-hidden w-full relative z-10 select-none"
    >
      <div className="text-center mb-10">
        <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-600 uppercase block mb-1">
          WebGL & Spatial Portfolio Reels
        </span>
        <h2 className="text-xs uppercase text-zinc-400 font-bold tracking-wider">
          Horizontal Scroll Cinematic Grid
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1: Right direction */}
        <div className="overflow-hidden w-full">
          <div
            style={{
              transform: `translate3d(${translateXRow1}px, 0, 0)`,
              willChange: "transform",
            }}
            className="flex gap-4 transition-transform duration-75 ease-out"
          >
            {row1.map((url, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 bg-zinc-950 flex-shrink-0 shadow-lg relative group"
              >
                <img
                  src={url}
                  alt={`Real 3D animation sequence ${idx}`}
                  className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left direction */}
        <div className="overflow-hidden w-full">
          <div
            style={{
              transform: `translate3d(${translateXRow2}px, 0, 0)`,
              willChange: "transform",
            }}
            className="flex gap-4 transition-transform duration-75 ease-out"
          >
            {row2.map((url, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 bg-zinc-950 flex-shrink-0 shadow-lg relative group"
              >
                <img
                  src={url}
                  alt={`Real 3D animation sequence ${idx}`}
                  className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
