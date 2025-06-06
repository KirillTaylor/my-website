import React from "react";
import Hero from "components/Hero/Hero";
import ContentBlocks from "components/ContentBlocks/ContentBlocks";
import Carousel from "components/Carousel/Carousel";
import Banner from "components/Banner/Banner";
import { getSlides } from "helpers/content";
import ContactForm from "components/ContactForm/ContactForm";
import DialogWrapper from "components/DialogWrapper/DialogWrapper";

export default function Page(): React.ReactNode {
    const slides = getSlides();
    return (<>
        <Hero />
        <Banner />
        <ContentBlocks />
        <Carousel slides={slides} />
        <ContactForm />
        <DialogWrapper />
    </>)
}
