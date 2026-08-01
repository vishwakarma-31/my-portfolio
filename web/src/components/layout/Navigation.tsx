"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/", shortcut: "H", key: "h" },
  { name: "Work", href: "/work", shortcut: "W", key: "w" },
  { name: "Resume", href: "/Aryan_Vishwakarma_Resume.pdf", shortcut: "R", key: "r" },
  { name: "Contact", href: "https://wa.me/910000000000", shortcut: "C", key: "c" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const [hash, setHash] = useState<string>('');

  useEffect(() => {
    setHash(window.location.hash);
    
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      
      const item = navItems.find(nav => nav.key === e.key.toLowerCase());
      if (item) {
        router.push(item.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [router, pathname]);

  return (
    <nav aria-label="Main Navigation" className="dark fixed top-0 left-0 h-screen w-60 bg-[#1a1a1a] text-text-secondary font-ui border-r border-border-subtle z-50 flex flex-col pt-12 hidden lg:flex">
      <div className="px-6 mb-12">
        <span className="text-text-primary text-[14px] font-medium tracking-wide">A. Vishwakarma</span>
      </div>

      <ul className="flex flex-col gap-1 px-3">
        {navItems.map((item) => {
          const isActive = (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)) || (pathname === '/' && item.href === '/#work' && hash === '#work');
          const isHovered = hovered === item.name;

          return (
            <li
              key={item.name}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                target={item.href.endsWith('.pdf') || item.href.startsWith('http') ? "_blank" : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`
                  relative flex items-center justify-between px-3 py-2 min-h-[44px] rounded-sm text-[13px] font-normal tracking-[0.01em] 
                  linear-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary
                  ${isActive ? 'text-text-primary' : 'hover:text-text-primary hover:bg-[rgba(255,255,255,0.04)]'}
                `}
              >
                {/* Active left border indicator */}
                {isActive && (
                  <div 
                    className="absolute left-0 top-[10%] bottom-[10%] w-[1px] bg-brand-primary" 
                  />
                )}

                <span>{item.name}</span>

                {/* Keyboard Hint Badge */}
                <div
                  className={`
                    flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[11px] font-mono text-text-muted
                    transition-opacity duration-[150ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  {item.shortcut}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
