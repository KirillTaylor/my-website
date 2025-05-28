import React from "react";
import Hero from "components/Hero/Hero";
import ContentBlocks from "components/ContentBlocks/ContentBlocks";

export default function Page(): React.ReactNode {
    return (<>
        <Hero />
        <ContentBlocks />
    </>)
}