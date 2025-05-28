import React from "react";
import { getHeroContent } from "helpers/content";

export default function Hero(): React.ReactNode {
    const heroContent = getHeroContent();
    return (
        <div className="hero-background bg-cover bg-center h-[30vh] flex" style={{
            backgroundImage: `url(${heroContent.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="hero-content-left w-1/2">

            </div>
            <div className="hero-content-right w-1/2 flex flex-col justify-center items-center">
                <div className="hero-title text-center m-4 mt-12">
                    <h1 className="text-4xl">{heroContent.title}</h1>
                </div>
                <div className="btn-cta text-center m-12">
                    <button className="bg-sky-900 text-white px-4 py-2 rounded-md">{`Get started`}</button>
                </div>
            </div>
        </div>

    )
}
