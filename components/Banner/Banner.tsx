import { Box } from "@mui/material";
import React from "react";
import { getBannerContent } from "utils/content";

export default function Banner(): React.ReactNode {
    const bannerContent = getBannerContent();
    return (
        <Box sx={{ width: '100%', backgroundColor: 'primary.main', padding: 4 }}>
            <div className="container flex items-center flex-col">
                {bannerContent.title && <div className="mb-4 text-white">
                    {bannerContent.title}
                </div>}
                <div className="grid grid-cols-3 md:grid-cols-6 w-auto justify-center gap-4 items-center">
                    {bannerContent.items.map((item, i) => (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" key={i} className="flex flex-col items-center">
                            <div className="md:grayscale opacity-100 md:opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </div>
                            <div className="md:hidden text-xs my-2 text-white">{item.title}</div>
                        </a>
                    ))}
                </div>
            </div>
        </Box>
    )
}
