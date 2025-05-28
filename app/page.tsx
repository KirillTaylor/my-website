import React from "react";
import Hero from "components/Hero/Hero";
import ContentBlocks from "components/ContentBlocks/ContentBlocks";
import Carousel from "components/Carousel/Carousel";
import { getSlides } from "helpers/carousel";

export default function Page(): React.ReactNode {
    const slides = getSlides();
    return (<>
        <Hero />
        <ContentBlocks />
        <Carousel slides={slides} />
    </>)
}
