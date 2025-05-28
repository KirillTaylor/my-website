export interface Slide {
    title: string;
    description: string;
    image?: string;
}

export interface CarouselProps {
    slides?: Slide[];
    backgroundColor?: string;
}