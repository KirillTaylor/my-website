import React from "react";

export default function Hero(): React.ReactNode {
    return (
        <div className="hero-background bg-cover bg-center h-[30vh] flex">
            <div className="hero-content-left w-1/2">

            </div>
            <div className="hero-content-right w-1/2 flex flex-col justify-center items-center">
                <div className="hero-title text-center m-4 mt-12">
                    <h1 className="text-4xl">{`Welcome to our website`}</h1>
                </div>
                <div className="btn-cta text-center m-12">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">{`Get started`}</button>
                </div>
            </div>
        </div>

    )
}
