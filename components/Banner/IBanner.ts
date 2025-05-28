export interface IBanner {
    title?: string;
    items: IBannerItem[];
}

export interface IBannerItem {
    id: number;
    title: string;
    image: string;
    link: string;
}

