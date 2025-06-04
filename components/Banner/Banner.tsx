import React from "react";
import { getBannerContent } from "helpers/content";

export default function Banner(): React.ReactNode {
    const bannerContent = getBannerContent();
    return (
        <div className="w-[100%] p-6 bg-sky-900 text-white">
            <div className="container flex items-center">
                {bannerContent.title && <div className="banner-title mr-4">
                    {bannerContent.title}
                </div>}
                <div className="banner-items flex w-full justify-center">
                    {bannerContent.items.map((item) => (
                        <div key={item.id}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <div className="banner-item mx-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
