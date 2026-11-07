import type { Roadmap } from './types';

// Hardcoded data for now. Later this will come from Supabase.
export const sampleRoadmap: Roadmap = {
    id: 'roadmap-1',
    projectName: 'Customer Portal',
    year: 2027,
    milestones: [
        {
            id: 'm-1',
            title: 'Launch beta',
            description: 'First external users can sign in.',
            quarter: 'Q1',
            targetDate: '2027-03-15',
            status: 'IN_PROGRESS',
            urgency: 'HIGH',
            initiatives: [
                {
                    id: 'i-1',
                    title: 'Build login flow',
                    ownerTeam: 'Platform',
                    status: 'IN_PROGRESS',
                    urgency: 'HIGH',
                    subtasks: [
                        { id: 's-1', title: 'Sign-up page', status: 'COMPLETED', assigneeName: 'Ana' },
                        { id: 's-2', title: 'Password reset', status: 'PLANNED' },
                    ],
                },
            ],
        },
        {
            id: 'm-2',
            title: 'Billing v1',
            description: 'Customers can pay by card.',
            quarter: 'Q3',
            targetDate: null,
            status: 'PLANNED',
            urgency: 'MEDIUM',
            initiatives: [],
        },
        {
            id: 'm-3',
            title: 'Mobile-friendly UI',
            description: 'Not scheduled yet.',
            quarter: null,
            targetDate: null,
            status: 'PLANNED',
            urgency: 'LOW',
            initiatives: [],
        },
    ],
};
