import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../layout/Header';

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 0.5,
          pin: true,
        },
      });

      // Phase 1 (0% → 20%): Fade out header + hero text
      tl.to(
        headerRef.current,
        { opacity: 0, y: -50, duration: 0.2, ease: 'power2.out' },
        0
      );
      tl.to(
        contentRef.current,
        { opacity: 0, scale: 0.9, filter: 'blur(10px)', duration: 0.25, ease: 'power2.out' },
        0
      );

      // Phase 2 (10% → 85%): Zoom video into the laptop screen
      tl.to(
        videoRef.current,
        { scale: 10, duration: 0.75 },
        0.1
      );

      // Phase 3 (80% → 100%): Yellow overlay fills the screen
      // tl.fromTo(
      //   overlayRef.current,
      //   { opacity: 0 },
      //   { opacity: 1, duration: 0.2 },
      //   0.8
      // );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex flex-col"
    >
      {/* Video Background — transform-origin targets laptop screen center */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
        style={{ transformOrigin: '50% 90%' }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Navigation */}
      <div ref={headerRef} className="relative z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <main
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-grow max-w-7xl mx-auto w-full select-none"
      >
        <h1
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-white animate-fade-rise"
        >
          Where <em className="not-italic text-zinc-400">ideas</em> find form{' '}
          <br />
          <em className="not-italic text-zinc-400">through the code.</em>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed font-light animate-fade-rise-delay">
          I design and build digital experiences for ambitious ideas and bold products.
          Amid the noise, I write code that speaks with clarity and purpose.
        </p>
      </main>

      {/* Yellow Overlay — matches laptop screen glow */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-50 pointer-events-none"
        style={{ backgroundColor: '#F5E642', opacity: 0 }}
      />
    </section>
  );
}
