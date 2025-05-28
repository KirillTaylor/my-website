import React from "react";
import SquareContent from "../shared/SquareContent/SquareContent";

const ContentBlocks = () => {
    const contentBlocks = [
        {
            title: "Development",
            description: "We will develop your website to the highest standards, ensuring it is fast, secure and user-friendly.",
            icon: "code-braces"
        },
        {
            title: "Marketing",
            description: "We will monitor your website to ensure it is performing at its best.",
            icon: "chart-box"
        },
        {
            title: "Monitoring",
            description: "We will maintain your website to ensure it is performing at its best.",
            icon: "eye"
        }
    ];
    return (
        <div>
            <h3 className="text-center text-2xl font-bold my-4">{`Why us?`}</h3>
            <div className="grid grid-cols-3">
                {contentBlocks.map((block, index) => (
                    <SquareContent key={index} {...block} />
                ))}
            </div>
        </div>
    );
};

export default ContentBlocks;
