interface HeaderProps {
  onBeginJourney?: () => void;
}

export default function Header({ onBeginJourney }: HeaderProps) {
  return (
    <header className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <h2
        style={{ fontFamily: "'Instrument Serif', serif" }}
        className="text-3xl tracking-tight text-white"
      >
        Velorah<sup className="text-xs">®</sup>
      </h2>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#top" className="text-sm text-white transition-colors">
          Home
        </a>
        <a href="#story" className="text-sm text-zinc-400 hover:text-white transition-colors">
          Story
        </a>
        <a href="#experience" className="text-sm text-zinc-400 hover:text-white transition-colors">
          Experience
        </a>
        <a href="#work" className="text-sm text-zinc-400 hover:text-white transition-colors">
          Work
        </a>
        <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
          Contact
        </a>
      </nav>

      {/* CTA Button */}
      <button
        onClick={onBeginJourney}
        className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform cursor-pointer"
      >
        Begin Journey
      </button>
    </header>
  );
}
