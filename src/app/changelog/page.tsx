import { Terminal } from "lucide-react";

export default function ChangelogPage() {
  return (
    <main className="min-h-screen pb-20 font-zzz">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 mt-8">
        <div className="flex items-center gap-4 mb-12 border-b-4 border-surface pb-6 corner-notches relative">
          <div className="bg-item-active p-3 rounded-lg border-2 border-border-soft">
            <Terminal size={16} strokeWidth="3" className="text-background" />
          </div>
          <div>
            <h1 className="text-xl italic uppercase tracking-tight text-foreground">
              System Log
            </h1>
            <p className="text-foreground/50 tracking-wide text-xs mt-1 uppercase">
              Updates & FIXES
            </p>
          </div>
        </div>

        <div className="space-y-12 pl-4 sm:pl-8">
          {/* card-latest */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-item-active border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-surface border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">April ??, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/75 text-sm">
                <li className="flex gap-3">
                  <span className="text-item-active italic">NEW</span>
                  Added Alice, Ju Fufu, Orphie & Magus, Pan Yinhu, Seed, Yixuan,
                  Yuzuha.
                </li>
                <li className="flex gap-3">
                  <span className="text-item-active italic">NEW</span>
                  Added time available icons in random events.
                </li>
                <li className="flex gap-3">
                  <span className="text-item-active italic">NEW</span>
                  Added version released in agent's profile.
                </li>
              </ul>
            </div>
          </div>

          {/* card-10 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">April 18, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added Cissia, Lucia, Manato, Yidhari.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">UPDATE</span>
                  Added a "WIP" (Work in Progress) tag.
                </li>
              </ul>
            </div>
          </div>

          {/* card-9 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 30, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added Nangong Yu, Ye Shunguang, Zhao, Dialyn.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added Agent's Birthday.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added Agent's Species.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">UPDATE</span>
                  Added new Emoji Icons from the game in Event choices.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">UPDATE</span>
                  Added a "NEW" tag that pins newly added agents at the top.
                </li>
              </ul>
            </div>
          </div>

          {/* card-8 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 18, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added left and right navigation buttons for quick agent
                  switcher.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  This changelog page.
                </li>
              </ul>
            </div>
          </div>

          {/* card-7 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 17, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added footer with desclaimer info.
                </li>
              </ul>
            </div>
          </div>

          {/* card-6 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 15, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">UPDATE</span>
                  Added all the remaining playable agents.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">FIX</span>
                  Fixed the scrolling issue in agent's page where it will
                  automatically scroll down after page load.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">FIX</span>
                  Fixed Orphie & Magus link issue.
                </li>
              </ul>
            </div>
          </div>

          {/* card-6 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 14, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added an alternative outfit switcher in agent's page if an
                  agent has multiple outfit available.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">FIX</span>
                  Fixed the UI responsiveness across all pages.
                </li>
              </ul>
            </div>
          </div>

          {/* card-5 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 12, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added a faction toggle in agent's page that filters out
                  non-faction members of the currently selected agent.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Arcade mode theme.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">UPDATE</span>
                  Dark mode theme.
                </li>
              </ul>
            </div>
          </div>

          {/* card-4 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 11, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Added a quick switch feature in agent's page for easy
                  navigation.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">UPDATE</span>
                  Navbar's UI.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">FIX</span>
                  Agent's page responsiveness in smaller screens.
                </li>
              </ul>
            </div>
          </div>

          {/* card-3 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 09, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Agent's page.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">NEW</span>
                  Event List.
                </li>
              </ul>
            </div>
          </div>

          {/* card-2 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 08, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">UPDATE</span>
                  Changed the default font into ZZZ's.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">UPDATE</span>
                  Redesigned the Agent's thumbnail into a more ZZZ vibe with an
                  animated text on the background.
                </li>
              </ul>
            </div>
          </div>

          {/* card-1 */}
          <div className="relative border-l-[3px] border-surface/50 pl-8 sm:pl-10 pb-4">
            <div className="absolute w-5 h-5 bg-surface border-4 border-border-soft rounded-full -left-2.75 top-0"></div>

            <div className="bg-background border-2 border-border-soft rounded-lg p-6 shadow-surface relative -top-5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4 border-b border-border-soft pb-4">
                <h2 className="text-lg text-foreground">March 07, 2026</h2>
              </div>

              <ul className="space-y-3 text-foreground/50 text-sm">
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">INIT</span>
                  Added a filter system for agent's rank, attribute, and
                  specialty.
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/75 italic">INIT</span>
                  Added a theme switcher with 2 initial themes - Proxy Mode and
                  Dark Mode.
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </main>
  );
}
