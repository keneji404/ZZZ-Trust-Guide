"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Agent } from "@/data/agents";
import AgentGridCard from "./AgentGridCard";

export default function FilterableGrid({
  agentsData,
}: {
  agentsData: Agent[];
}) {
  // default states
  const [search, setSearch] = useState("");
  const [selectedRarities, setSelectedRarities] = useState<string[]>([]);
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  // filter options
  const availableAttributes = Array.from(
    new Set(agentsData.map((a) => a.attribute)),
  ).sort();
  const availableSpecialties = Array.from(
    new Set(agentsData.map((a) => a.specialty)),
  ).sort();
  const availableRarities = ["S", "A"];

  // toggle handler
  const toggleFilter = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    list: string[],
    value: string,
  ) => {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  // filter logic
  const filteredAgents = useMemo(() => {
    return agentsData.filter((agent) => {
      const searchTerm = search.toLowerCase();
      const matchesSearch =
        agent.name.toLowerCase().includes(searchTerm) ||
        agent.fullName?.toLowerCase().includes(searchTerm) ||
        agent.faction.toLowerCase().includes(searchTerm);

      const matchesRarity =
        selectedRarities.length === 0 ||
        selectedRarities.includes(agent.rarity);
      const matchesAttribute =
        selectedAttributes.length === 0 ||
        selectedAttributes.includes(agent.attribute);
      const matchesSpecialty =
        selectedSpecialties.length === 0 ||
        selectedSpecialties.includes(agent.specialty);

      return (
        matchesSearch && matchesRarity && matchesAttribute && matchesSpecialty
      );
    });
  }, [
    agentsData,
    search,
    selectedRarities,
    selectedAttributes,
    selectedSpecialties,
  ]);

  return (
    <div className="w-full">
      {/* toolbar */}
      <div className="bg-surface-grad shadow-surface border-2 border-border-soft rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-4 md:items-center overflow-x-auto transition-all duration-300">
        {" "}
        {/* search */}
        <div className="relative w-full md:flex-1 min-w-70">
          <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none text-foreground">
            <div className="p-1 rounded-full flex items-center justify-center bg-item-background border-2 border-surface">
              <Search size={16} />
            </div>
          </div>
          <input
            type="text"
            placeholder="Search Agent or Faction..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ps-9 pe-4 py-2 bg-background border-2 border-border-soft rounded-full text-xs text-foreground focus:outline-none focus:border-item-active focus:ring-1 focus:ring-item-active transition-colors"
          />
        </div>
        {/* filter toggles */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 shrink-0">
          {/* Rarity */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[10px] italic text-foreground/50 tracking-wider">
              Rank
            </span>
            <div className="flex gap-1">
              {availableRarities.map((rarity) => (
                <button
                  key={rarity}
                  onClick={() =>
                    toggleFilter(setSelectedRarities, selectedRarities, rarity)
                  }
                  className={`p-1 rounded-full border-2 border-border-soft transition-all duration-200 flex items-center justify-center ${
                    selectedRarities.includes(rarity)
                      ? "bg-item-active"
                      : "bg-item-inactive hover:bg-item-hover-grad"
                  }`}
                >
                  <div className="p-1 rounded-full transition-all duration-200 flex items-center justify-center bg-item-background">
                    <img
                      src={`/rarity/${rarity}.webp`}
                      alt={rarity}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* filter: attributes */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[10px] italic text-foreground/50 tracking-wider">
              Attribute
            </span>
            <div className="flex gap-1">
              {availableAttributes.map((attr) => (
                <button
                  key={attr}
                  title={attr}
                  onClick={() =>
                    toggleFilter(
                      setSelectedAttributes,
                      selectedAttributes,
                      attr,
                    )
                  }
                  className={`p-1 rounded-full border-2 border-border-soft transition-all duration-200 flex items-center justify-center ${
                    selectedAttributes.includes(attr)
                      ? "bg-item-active"
                      : "bg-item-inactive hover:bg-item-hover-grad"
                  }`}
                >
                  <div className="p-1 rounded-full transition-all duration-200 flex items-center justify-center bg-item-background">
                    <img
                      src={`/attribute/${attr}.webp`}
                      alt={attr}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* filter: specialties */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[10px] italic text-foreground/50 tracking-wider">
              Specialty
            </span>
            <div className="flex gap-1">
              {availableSpecialties.map((spec) => (
                <button
                  key={spec}
                  title={spec}
                  onClick={() =>
                    toggleFilter(
                      setSelectedSpecialties,
                      selectedSpecialties,
                      spec,
                    )
                  }
                  className={`p-1 rounded-full border-2 border-border-soft transition-all duration-200 flex items-center justify-center ${
                    selectedSpecialties.includes(spec)
                      ? "bg-item-active"
                      : "bg-item-inactive hover:bg-item-hover-grad"
                  }`}
                >
                  <div className="p-1 rounded-full transition-all duration-200 flex items-center justify-center bg-item-background">
                    <img
                      src={`/specialty/${spec}.webp`}
                      alt={spec}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* agents grid cards */}
      {filteredAgents.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {filteredAgents.map((agent) => (
            <AgentGridCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="w-full py-20 text-center border-2 border-dashed border-border-soft rounded-2xl bg-surface">
          <h2 className="text-2xl text-foreground/50 mb-2">No Agents Found</h2>
          <p className="text-foreground/50">
            Try adjusting your search or removing some filters.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedRarities([]);
              setSelectedAttributes([]);
              setSelectedSpecialties([]);
            }}
            className="mt-4 px-6 py-2 bg-item-active text-item-background rounded-lg hover:bg-opacity-80 transition-all"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
