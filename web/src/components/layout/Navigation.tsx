"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/", shortcut: "H", key: "h" },
  { name: "Work", href: "/#work", shortcut: "W", key: "w" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      
      const item = navItems.find(nav => nav.key === e.key.toLowerCase());
      if (item) {
        router.push(item.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <nav aria-label="Main Navigation" className="dark fixed top-0 left-0 h-screen w-60 bg-background-elevated text-text-secondary font-ui border-r border-border-subtle z-50 flex flex-col pt-12 hidden lg:flex">
      <div className="px-6 mb-12">
        <span className="text-text-primary text-[14px] font-medium tracking-wide">A. Vishwakarma</span>
      </div>

      <ul className="flex flex-col gap-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname === '/' && item.href === '/#work' && typeof window !== 'undefined' && window.location.hash === '#work');
          const isHovered = hovered === item.name;

          return (
            <li
              key={item.name}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  relative flex items-center justify-between px-3 py-2 min-h-[44px] rounded-sm text-[13px] font-normal tracking-[0.01em] 
                  transition-all duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary
                  ${isActive ? 'text-text-primary' : 'hover:text-text-primary hover:bg-surface-hover'}
                `}
              >
                {/* Active left border indicator with fade mask */}
                {isActive && (
                  <div 
                    className="absolute left-0 top-[10%] bottom-[10%] w-[1px] bg-brand-primary" 
                    style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
                  />
                )}

                <span>{item.name}</span>

                {/* Keyboard Hint Badge */}
                <div
                  className={`
                    flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-surface-hover text-[11px] font-code text-text-secondary
                    transition-opacity duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
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
