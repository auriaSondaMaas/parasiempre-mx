export type Theme = 'light' | 'dark';

export interface SectionProps {
    id?: string;
    className?: string;
}

export interface AnimatedProps {
    delay?: number;
    duration?: number;
    once?: boolean;
}