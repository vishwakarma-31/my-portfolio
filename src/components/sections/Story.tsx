export default function Story() {
  return (
    <section
      id="story"
      className="min-h-screen bg-zinc-950 flex items-center justify-center px-6 relative"
    >
      {/* Yellow-to-dark gradient transition from the zoom */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#F5E642] to-zinc-950 pointer-events-none" />

      <div className="text-center relative z-10">
        <span className="text-xs font-mono tracking-widest text-zinc-600 uppercase">
          Section 01
        </span>
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-5xl md:text-7xl text-white mt-4"
        >
          My Story
        </h2>
        <p className="text-zinc-500 text-sm mt-4 max-w-md">
          Content coming soon — your narrative goes here.
        </p>
      </div>
    </section>
  );
}
