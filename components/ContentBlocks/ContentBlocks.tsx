import React from "react";
import SquareContent from "../shared/SquareContent/SquareContent";
import { getContentBlocks } from "utils/content";
import { getRandomizedColors } from "utils/helpers";

const ContentBlocks = () => {
    const contentBlocks = getContentBlocks();
    const randomizedColors = getRandomizedColors();
    return (
        <div className="container my-10">
            <h3 className="text-center text-4xl font-bold my-4">{`Why us?`}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-20">
                {contentBlocks.map((block, index) => (
                    <SquareContent key={index} {...block} color={randomizedColors[index]} />
                ))}
            </div>
        </div>
    );
};

export default ContentBlocks;
