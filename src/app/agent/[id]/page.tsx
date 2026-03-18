import { agentsData } from "@/data/agents";
import { notFound } from "next/navigation";
import AgentProfileLayout from "@/components/AgentProfileLayout";

export default async function AgentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const agent = agentsData.find((a) => a.id === resolvedParams.id);

  if (!agent) {
    notFound();
  }

  return (
    <main className="relative pb-20 md:pb-0 font-zzz overflow-hidden bg-dotted-pattern">
      <div className="relative md:min-h-dvh z-10 max-w-6xl mx-auto py-6 px-4 md:px-6">
        <AgentProfileLayout agent={agent} />
      </div>
    </main>
  );
}
