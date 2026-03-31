import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t-4 border-surface text-foreground/50 py-8 px-4 sm:px-6 z-20 relative mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-4">
        <h3 className="font-zzz italic text-foreground/75 tracking-widest uppercase">
          ZZZ Trust Guide
        </h3>

        <div className="text-[10px] sm:text-xs max-w-2xl leading-relaxed">
          <p className="mb-2">
            This site is a fan-made guide and is not affiliated with, endorsed,
            sponsored, or specifically approved by HoYoverse.
          </p>
          <p>
            Zenless Zone Zero, all game content, character names, lore, images,
            and data are trademarks and copyrighted property of{" "}
            <strong className="text-foreground/75">
              COGNOSPHERE PTE. LTD.
            </strong>{" "}
            (HoYoverse).
          </p>
        </div>

        <div className="font-zzz flex gap-6 tracking-wider uppercase text-xs mt-2">
          <Link href="/" className="hover:text-item-active transition-colors">
            Home
          </Link>
          <Link
            href="/changelog"
            className="hover:text-item-active transition-colors"
          >
            Changelog
          </Link>
          <a
            href="https://github.com/keneji404/ZZZ-Trust-Guide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-item-active transition-colors"
          >
            <Github size={14} strokeWidth="3" /> GitHub
          </a>
        </div>

        <div className="text-[10px] mt-2 border-t border-surface pt-4 w-full max-w-md">
          © {currentYear} ZZZ Trust Guide. Built by the community, for the
          community.
        </div>
      </div>
    </footer>
  );
}
