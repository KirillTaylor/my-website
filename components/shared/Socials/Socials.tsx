import { getSocials } from "helpers/socials";
import React from "react";

export default function Socials(): React.ReactNode {
    const socials = getSocials();
    return (
        <div>
            {socials.map((social) => (
                <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
                    <i className={`mdi mdi-${social.icon} text-4xl`}></i>
                </a>
            ))}
        </div>
    )
}
