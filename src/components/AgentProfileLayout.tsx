"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Agent, agentsData } from "@/data/agents";
import EventCard from "./EventCard";
import { useProgressStore } from "@/store/useProgressStore";

const TABS = ["Invites", "Wish", "Fun", "Random"];

export default function AgentProfileLayout({ agent }: { agent: Agent }) {
  // default tab
  const [activeTab, setActiveTab] = useState("Invites");

  // if agent fullname is not found, load regular name instead
  const displayName = agent.fullName || agent.name;

  // check if agent has a special attribute / is a void hunter
  const displayAttr = agent.specialAttribute || agent.attribute;

  // to load faction emblem image file
  const factionImageName = agent.faction.toLowerCase().replace(/\s+/g, "_");

  // agent pfp swap feature
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleOutfitSwap = () => {
    if (agent.images.length > 1) {
      setActiveImageIndex((prev) => (prev + 1) % agent.images.length);
    }
  };

  // filter events
  const filteredEvents = agent.events.filter(
    (event) => event.type === activeTab,
  );

  // filter faction
  const { showFactionOnly, toggleFactionFilter } = useProgressStore();
  const quickRoster = showFactionOnly
    ? agentsData.filter((a) => a.faction === agent.faction)
    : agentsData;

  // auto scroll to selected agent in quick router
  const trayRef = useRef<HTMLDivElement>(null);
  const activeAgentRef = useRef<HTMLDivElement>(null);

  // always scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // reset outfit stack to the first image
    setActiveImageIndex(0);
  }, [agent.id]);

  // use auto scroll to agent in quick roouter
  useEffect(() => {
    if (trayRef.current && activeAgentRef.current) {
      const tray = trayRef.current;
      const activeItem = activeAgentRef.current;

      const scrollPos =
        activeItem.offsetLeft -
        tray.offsetWidth / 2 +
        activeItem.offsetWidth / 2;

      tray.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }
  }, [agent.id, showFactionOnly]);

  // agent quick router navigation buttons
  const scrollTray = (direction: "left" | "right") => {
    if (trayRef.current) {
      const scrollAmount = 350; // hw many pixels to move per click
      trayRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-surface-grad shadow-surface rounded-2xl py-6 px-4 md:px-6 border-2 border-border-soft relative z-10 mt-4 ">
      <div className="text-xs italic mb-4 px-2">
        <Link href="/" className="hover:text-item-hover">
          <span>
            <img
              src="/Icon_Agents.webp"
              alt="Agents Icon"
              className="w-5 h-5 inline"
            />{" "}
            Agents{" "}
          </span>
        </Link>
        /<span className="text-foreground/50"> {agent.name}</span>
      </div>

      {/* main content */}
      <div className="flex flex-col md:flex-row md:gap-4">
        {/* left side - agent content */}
        <div className="md:w-75 bg-surface-grad shadow-surface rounded-lg p-4 flex md:flex-col gap-4 mb-4">
          <div
            className="group w-25 h-25 sm:w-50 sm:h-50 flex items-center justify-center relative self-center md:mb-4"
            onClick={handleOutfitSwap}
          >
            {/* faction image - sticker version */}
            {/* <div className="absolute left-[-30] top-[-30] z-11 w-16">
              <img
                src={`/faction/${factionImageName}.webp`}
                alt={`${agent.faction}`}
                className="w-full h-full object-contain rotate-[-10deg]"
              />
            </div> */}

            {agent.images.map((image, index) => {
              // calculate where this pic sits in the stack based on the active index
              const position =
                (index - activeImageIndex + agent.images.length) %
                agent.images.length;

              // dynamically assign classes based on the pic position
              let stackClasses = "";

              if (position === 0) {
                // front pic
                stackClasses =
                  "z-30 rotate-3 scale-100 opacity-100 group-hover:rotate-0";
              } else if (position === 1) {
                // second pic
                stackClasses =
                  "z-20 -rotate-3 -translate-x-3 translate-y-3 scale-95 opacity-80 group-hover:-rotate-6 group-hover:-translate-x-5 group-hover:translate-y-4";
              } else {
                // third pic
                stackClasses =
                  "z-10 rotate-6 translate-x-4 translate-y-4 scale-90 opacity-60 group-hover:rotate-12 group-hover:translate-x-6";
              }

              return (
                <div
                  key={index}
                  className={`aspect-square absolute inset-0 bg-foreground rounded-sm overflow-hidden border-4 border-[#f0f0f0] shadow-[4px_4px_4px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out flex items-center justify-center ${stackClasses}`}
                >
                  {/* faction image background */}
                  <img
                    src={`/faction/${factionImageName}.webp`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none z-0"
                  />

                  {/* fallback initial if pfp doesnt load */}
                  <span className="text-8xl text-foreground/50 absolute z-0 pointer-events-none">
                    {displayName.charAt(0)}
                  </span>

                  {/* agent stacked pfp */}
                  <img
                    src={image}
                    alt={`Outfit ${index + 1}`}
                    className="relative z-10 w-full h-full object-cover object-top"
                  />
                </div>
              );
            })}

            {/* agent pfp tooltip */}
            {agent.images.length > 1 && (
              <div className="hidden sm:block absolute top-2 right-2 z-40 bg-item-background/50 text-foreground text-[10px] italic uppercase px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Swap Outfit
              </div>
            )}
          </div>

          {/* agent info */}
          <div className="px-2 pb-2 overflow-hidden">
            <p className="text-md text-foreground leading-none">
              {displayName}
            </p>
            <p className="text-xs text-foreground/50 mt-1">{agent.faction}</p>
            <div className="mt-2 flex items-center gap-2 rounded-full bg-background p-1 justify-around shadow-[inset_0_10px_20px_rgba(0,0,0,0.6)] border-2 border-border-soft">
              <img
                src={`/rarity/${agent.rarity}.webp`}
                alt={`${agent.rarity}-Rank`}
                title={`${agent.rarity}-Rank`}
                className="w-5 h-5 inline"
              />
              <img
                src={`/attribute/${displayAttr.replace(/\s+/g, "_")}.webp`}
                alt={displayAttr}
                title={displayAttr}
                className="w-5 h-5 inline"
              />
              <img
                src={`/specialty/${agent.specialty}.webp`}
                alt={agent.specialty}
                title={agent.specialty}
                className="w-5 h-5 inline"
              />
            </div>
          </div>
        </div>

        {/* navigation tabs */}
        <div className="overflow-x-scroll sm:overflow-x-visible flex items-end sm:px-2 justify-center sm:justify-end gap-1 sm:gap-2 min-h-12.5 md:absolute md:top-[-30] md:right-10 md:border-b-2 border-border-soft md:shadow-tab-innershadow relative">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-3 sm:px-6 rounded-t-lg italic transition-all duration-300 
                  border-x-2 border-border-soft flex items-center justify-center
                  shadow-tab-highlight py-2 text-[11px] sm:text-sm border-t-2
                  ${
                    isActive
                      ? "h-10 sm:h-12 bg-tab-active text-background"
                      : "h-8 sm:h-10 bg-surface-grad hover:bg-item-hover-grad"
                  }
                `}
              >
                {tab}
              </button>
            );
          })}
          <div className="hidden md:block rounded-lg bg-bg-hole shadow-[inset_0px_-7px_3px_-4px_rgba(0,0,0,0.9)] p-1.5 absolute bottom-[-7] left-[-8]"></div>
          <div className="hidden md:block rounded-lg bg-bg-hole shadow-[inset_0px_-7px_3px_-4px_rgba(0,0,0,0.9)] p-1.5 absolute bottom-[-7] right-[-8]"></div>
        </div>

        {/* right side - event content */}
        <div className="bg-background p-3 w-full rounded-lg shadow-[inset_0_10px_20px_rgba(0,0,0,0.6)] border-2 border-border-soft">
          <div className="space-y-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <div className="w-full h-75 flex items-center justify-center">
                <div className="text-foreground/50 italic text-xl sm:text-2xl text-center p-8 shadow-inner max-w-md uppercase">
                  No {activeTab} trust events documented yet.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* quick agent router */}
      <div className="relative pt-3 shrink-0 mt-4">
        <button
          onClick={toggleFactionFilter}
          className={`group p-0.5 absolute top-0 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 z-20 rounded-full border-2 border-border-soft ${
            showFactionOnly
              ? "bg-item-active"
              : "bg-item-inactive hover:bg-item-hover-grad"
          }`}
        >
          <div className="px-3 py-0.5 rounded-full flex items-center justify-center bg-item-background">
            <div
              className={`w-6 h-6 p-0.5 absolute left-0 border-2 rounded-full bg-item-background
               ${
                 showFactionOnly
                   ? "border-item-active"
                   : "border-surface group-hover:border-border-hover"
               }`}
            >
              <img
                src={`/faction/${agent.faction.toLowerCase().replace(/\s+/g, "_")}.webp`}
                alt={agent.faction.charAt(0)}
                className="w-full h-full text-xs"
              />
            </div>
            <span className="italic text-xs ps-3">
              Toggle <span className="hidden sm:inline">Faction</span>
            </span>
          </div>
        </button>
        <div className="flex items-stretch bg-surface-grad shadow-tab-highlight rounded-xl border-2 border-border-soft overflow-hidden">
          {/* left nav btn */}
          <button
            onClick={() => scrollTray("left")}
            className="group w-8 flex items-center justify-center transition-colors shrink-0 z-10"
          >
            <div className="w-0 h-0 border-y-13 border-y-transparent border-r-12 border-r-bg-hole group-hover:border-r-item-active transition-colors"></div>
          </button>

          {/* agent list */}
          <div
            ref={trayRef}
            className="flex-1 relative flex items-stretch bg-background rounded-2xl border-x-2 border-border-soft p-3 pt-5 gap-1 overflow-x-auto glass-highlight"
          >
            {quickRoster.map((a) => {
              // Check if this specific thumbnail is the agent currently being viewed
              const isActiveAgent = a.id === agent.id;
              const displayName = a.fullName || a.name;

              return (
                <Link href={`/agent/${a.id}`} key={a.id} className="shrink-0">
                  <div
                    // If it's the active agent, attach the ref so we can auto-scroll to it!
                    ref={isActiveAgent ? activeAgentRef : null}
                    className={`
                    p-1 rounded-lg border-3 shrink-0 transition-all duration-300 overflow-hidden relative flex-col items-center justify-center
                    w-45 h-auto bg-foreground
                    ${
                      isActiveAgent
                        ? "border-item-active"
                        : " border-border-soft hover:-translate-y-1 opacity-75 hover:opacity-100"
                    }
                    }
                  `}
                    title={displayName}
                  >
                    <div
                      className="flex-1 relative overflow-hidden h-20 rounded-lg flex items-center justify-center shadow-[inset_0px_0px_4px_rgba(0,0,0,0.5)]"
                      style={{
                        borderBottom: `1px solid white`,
                        backgroundImage: `linear-gradient(to bottom, transparent -50%, ${a.color} 100%)`,
                      }}
                    >
                      {/* faction image */}
                      <img
                        src={`/faction/${a.faction.toLowerCase().replace(/\s+/g, "_")}.webp`}
                        alt={`${a.faction}`}
                        className="p-1 absolute inset-0 w-full h-full object-contain object-left opacity-50 pointer-events-none z-0"
                      />

                      {/* agent pfp */}
                      <img
                        // src={`/mindscape/${a.id}.webp`}
                        src={a.images[0]}
                        alt={displayName}
                        className="w-30 h-full object-cover object-top-right relative z-10"
                      />
                    </div>
                    <div className="flex flex-col px-1 justify-center z-20 shrink-0 text-right">
                      <span
                        className="text-sm text-background truncate"
                        title={displayName}
                      >
                        {a.name}
                      </span>
                      <span
                        className="text-[8px] text-background/50 truncate"
                        title={a.faction}
                      >
                        {a.faction}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
            {quickRoster.length === 0 && (
              <div className="w-full flex items-center justify-center text-foreground/50 italic text-sm">
                No other faction members found.
              </div>
            )}
          </div>

          {/* right nav btn */}
          <button
            onClick={() => scrollTray("right")}
            className="group w-8 flex items-center justify-center transition-colors shrink-0 z-10"
          >
            <div className="w-0 h-0 border-y-13 border-y-transparent border-l-12 border-l-bg-hole group-hover:border-l-item-active transition-colors"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
