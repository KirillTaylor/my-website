import React from "react";
import Hero from "components/Hero/Hero";
import ContentBlocks from "components/ContentBlocks/ContentBlocks";
import Carousel from "components/Carousel/Carousel";
import Banner from "components/Banner/Banner";
import { getSlides } from "utils/content";
import ContactForm from "components/ContactForm/ContactForm";
import Divider from "components/shared/Divider/Divider";


export function generateMetadata() {
    return {
        title: 'Elv8 - Home',
        description: 'Elv8 is a software development company that specializes in building custom software solutions for businesses.',
    }
}

export default function Page(): React.ReactNode {
    const slides = getSlides();
    return (<>
        <Hero />
        <Banner />
        <ContentBlocks />
        <Divider />
        <Carousel slides={slides}  />
        <Divider />
        <ContactForm />
    </>)
}
