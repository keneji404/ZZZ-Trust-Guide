import { agentsData } from "../data/agents";
import FilterableGrid from "@/components/FilterableGrid";

export default function Home() {
  return (
    <main className="font-zzz pb-20 bg-dotted-pattern">
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-6">
        <FilterableGrid agentsData={agentsData} />
      </div>
    </main>
  );
}
