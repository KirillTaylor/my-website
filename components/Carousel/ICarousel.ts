export interface Slide {
    title: string;
    description: string[] | string;
    image?: string;
    style?: React.CSSProperties;
    tags?: string[];
    link?: { href: string; text: string }[];
    backgroundColor?: string;
}

export interface CarouselProps {
    slides?: Slide[];
    backgroundColor?: string;
}