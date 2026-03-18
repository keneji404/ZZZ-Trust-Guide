import Link from "next/link";
import { Agent } from "@/data/agents";

export default function AgentGridCard({ agent }: { agent: Agent }) {
  // rank base color
  const isSRank = agent.rarity === "S";
  const baseColor = isSRank ? "bg-[#ff8c00]" : "bg-[#b058ff]";

  // if agent fullname is not found, load regular name instead
  const displayName = agent.fullName || agent.name;

  // marquee text animation
  const singleString = `${displayName} • `;
  const marqueeText = singleString.repeat(8);
  const scrollDuration = `${marqueeText.length / 1}s`;

  return (
    <Link href={`/agent/${agent.id}`}>
      <div className="group p-1 rounded-2xl border-2 border-border-soft bg-surface transition-transform duration-300 hover:bg-item-hover-grad">
        <div className="bg-item-background p-2 flex flex-col rounded-2xl">
          <div
            className={`relative w-full aspect-square rounded-2xl ${baseColor} bg-dotted-pattern overflow-hidden`}
          >
            <div className="absolute -inset-full bg-background bg-dotted-pattern -rotate-45 origin-center -translate-y-[25%] -translate-x-[45%] flex flex-col justify-end pointer-events-none z-0">
              <div
                className="hidden sm:flex w-max text-surface/30 italic text-6xl sm:text-7xl tracking-widest uppercase animate-marquee-reverse [animation-play-state:paused] group-hover:[animation-play-state:running]"
                style={{ animationDuration: scrollDuration }}
              >
                <span className="shrink-0">{marqueeText}</span>
                <span className="shrink-0">{marqueeText}</span>{" "}
              </div>
              <div
                className="hidden sm:flex w-max text-surface/30 italic text-6xl sm:text-7xl tracking-widest uppercase animate-marquee [animation-play-state:paused] group-hover:[animation-play-state:running]"
                style={{ animationDuration: scrollDuration }}
              >
                <span className="shrink-0">{marqueeText}</span>
                <span className="shrink-0">{marqueeText}</span>
              </div>
            </div>

            <img
              src={agent.images[0]}
              alt={agent.id}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[98%] w-full object-cover object-top z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="mt-1 text-center">
            <h2 className="text-md">{agent.name}</h2>
            {/* <div className="flex justify-center items-center gap-2 mt-1">
          <span className={`px-2 py-0.5 text-[10px] font-bold rounded bg-[#1a1a1a] ${isSRank ? 'text-[#ff8c00]' : 'text-[#b058ff]'}`}>
            {agent.rarity}-RANK
          </span>
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
            {agent.attribute}
          </span>
        </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
