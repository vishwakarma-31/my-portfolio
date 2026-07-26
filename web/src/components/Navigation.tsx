"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/", shortcut: "H" },
  { name: "Work", href: "/projects", shortcut: "W" },
  { name: "Contact", href: "/contact", shortcut: "C" },
];

export function Navigation() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 h-screen w-[240px] bg-[#1a1a1a] text-[#8a8f98] font-ui border-r border-[rgba(255,255,255,0.08)] z-50 flex flex-col pt-12 hidden lg:flex">
      <div className="px-6 mb-12">
        <span className="text-white text-[14px] font-medium tracking-wide">A. Vishwakarma</span>
      </div>
      
      <ul className="flex flex-col gap-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hovered === item.name;
          
          return (
            <li 
              key={item.name}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link 
                href={item.href}
                className={`
                  relative flex items-center justify-between px-3 py-2 rounded-[4px] text-[13px] font-normal tracking-[0.01em] linear-hover
                  ${isActive ? 'text-white' : 'hover:text-[#e0e0e0] hover:bg-white/5'}
                `}
              >
                {/* Active left border indicator */}
                {isActive && (
                  <div className="absolute left-0 top-[20%] bottom-[20%] w-[1px] bg-[#635BFF]" />
                )}
                
                <span>{item.name}</span>
                
                {/* Keyboard Hint Badge (visible on hover) */}
                <div 
                  className={`
                    flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[11px] font-code text-[#8a8f98] linear-hover
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
