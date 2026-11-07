import { sampleRoadmap } from '@/features/roadmap/sample-data';
import type { Milestone, Quarter } from '@/features/roadmap/types';

const quarters: Quarter[] = ['Q1', 'Q2', 'Q3', 'Q4'];

function MilestoneCard({ milestone }: { milestone: Milestone }) {
    return (
        <div className="rounded border p-3 text-sm">
            <p className="font-semibold">{milestone.title}</p>
            <p className="text-xs text-gray-500">
                {milestone.status} · {milestone.urgency}
                {milestone.targetDate && ` · ${milestone.targetDate}`}
            </p>
            <ul className="mt-2 ml-4 list-disc">
                {milestone.initiatives.map((initiative) => (
                    <li key={initiative.id}>
                        {initiative.title} ({initiative.ownerTeam})
                        <ul className="ml-4 list-[circle]">
                            {initiative.subtasks.map((subtask) => (
                                <li key={subtask.id}>
                                    {subtask.title} — {subtask.status}
                                    {subtask.assigneeName && ` (${subtask.assigneeName})`}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Home() {
    const roadmap = sampleRoadmap;
    const unscheduled = roadmap.milestones.filter((m) => m.quarter === null);

    return (
        <main className="p-6">
            <h1 className="mb-4 text-2xl font-bold">
                {roadmap.projectName} — {roadmap.year}
            </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {quarters.map((quarter) => (
                    <section key={quarter}>
                        <h2 className="mb-2 font-semibold">{quarter}</h2>
                        <div className="flex flex-col gap-2">
                            {roadmap.milestones
                                .filter((m) => m.quarter === quarter)
                                .map((m) => (
                                    <MilestoneCard key={m.id} milestone={m} />
                                ))}
                        </div>
                    </section>
                ))}
            </div>

            <h2 className="mt-8 mb-2 font-semibold">Workbook (unscheduled)</h2>
            <div className="flex flex-col gap-2 md:w-1/4">
                {unscheduled.map((m) => (
                    <MilestoneCard key={m.id} milestone={m} />
                ))}
            </div>
        </main>
    );
}
