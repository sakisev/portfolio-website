import { PortableTextBlock } from 'next-sanity';

export interface Role {
    title: string;
    period: string;
}

export interface WorkExperience {
    _id: string;
    _createdAt: string;
    company: string;
    years?: string;
    roles?: Role[];
    highlights?: string[];
    name: string;
    image: string;
    company_position: string;
    short_description: string;
    url: string;
    content: PortableTextBlock[];
    slug?: string;
}

export interface Project {
    _id: string;
    _createdAt: string;
    name: string;
    status?: 'Ongoing' | 'Paused' | 'Live';
    stack?: string[];
    href?: string;
    gallery?: { url: string; alt?: string; width: number; height: number }[];
    video?: string;
    videoPoster?: string;
    image?: string;
    short_description: string;
    url?: string;
    content: PortableTextBlock[];
    slug?: string;
}

export interface SkillGroup {
    _id: string;
    title: string;
    items: string[];
}

export interface Page {
    _createdAt: string;
    _id: string;
    name: string;
    slug: string;
    title: string;
    content: PortableTextBlock[];
    image: string;
}

export interface HomepageHeader {
    _createdAt: string;
    _id: string;
    name: string;
    slug: string;
    title: string;
    image: string;
    linkedInUrl: string;
    gitHubUrl: string;
    content: PortableTextBlock[];
}
