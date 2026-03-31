"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import DataManager from "./DataManager";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="font-zzz sticky top-0 z-50 flex justify-between items-center bg-background border-b-4 border-surface py-4 px-4 sm:px-8 transition-all duration-300">
      <div className="flex items-center">
        {isHome ? (
          <DataManager />
        ) : (
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-item-hover italic transition-all duration-200"
          >
            <ArrowLeft size={20} strokeWidth={3} />
            <span className="hidden sm:inline text-sm">Go back</span>
          </Link>
        )}
      </div>
      <div className="flex items-center shrink-0 ml-4 gap-2">
        <Link
          href="https://github.com/keneji404/ZZZ-Trust-Guide"
          title="View on Github"
          className="text-foreground hover:text-item-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} strokeWidth={3} />
        </Link>

        <ThemeSwitcher />
      </div>
    </nav>
  );
}
