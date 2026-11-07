export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export type WorkStatus =
    | 'PLANNED'
    | 'IN_PROGRESS'
    | 'BLOCKED'
    | 'COMPLETED';

export type Urgency = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

// Subtasks inherit urgency from their initiative (MVP1 decision).
export interface Subtask {
    id: string;
    title: string;
    status: WorkStatus;
    assigneeName?: string;
}

export interface Initiative {
    id: string;
    title: string;
    ownerTeam: string;
    status: WorkStatus;
    urgency: Urgency;
    subtasks: Subtask[];
}

export interface Milestone {
    id: string;
    title: string;
    description: string;

    // null means the milestone is still in the unscheduled workbook.
    quarter: Quarter | null;

    // We will use ISO dates such as "2027-03-15".
    // null means no target date has been selected.
    targetDate: string | null;

    status: WorkStatus;
    urgency: Urgency;
    initiatives: Initiative[];
}

export interface Roadmap {
    id: string;
    projectName: string;
    year: number;
    milestones: Milestone[];
}
