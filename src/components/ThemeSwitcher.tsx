"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Palette, ChevronDown } from "lucide-react";

const THEMES = [
  { id: "proxy", label: "Proxy Mode" },
  { id: "dark", label: "Dark Mode" },
  { id: "arcade", label: "Arcade Mode" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // close dialog box if user click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  // active theme label finder
  const currentThemeLabel =
    THEMES.find((t) => t.id === theme)?.label || "Theme";

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="group p-0.5 bg-item-inactive rounded-full border-2 border-border-soft hover:bg-item-hover-grad transition-colors">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relevant flex items-center gap-2 bg-item-background text-foreground rounded-full px-3 py-1.5 outline-none"
        >
          <div className="absolute left-0.5 p-1.5 border-2 border-surface rounded-full bg-item-background group-hover:border-border-hover">
            <Palette
              size={16}
              className="text-foreground/50 group-hover:text-foreground"
            />
          </div>
          <span className="text-xs ps-6">{currentThemeLabel}</span>

          <ChevronDown
            size={16}
            className={`text-foreground/50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-background border-2 border-border-soft rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.8)] overflow-hidden z-50 flex flex-col py-1">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              className={`
                text-left px-4 py-2 text-xs transition-colors
                ${
                  theme === t.id
                    ? "bg-item-active text-background"
                    : "text-foreground/50 hover:bg-surface hover:text-foreground"
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
