import React from "react";
import Socials from "components/shared/Socials/Socials";
import { getWebsiteName } from "utils/utils";
import { getMainMenu } from "utils/content";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerMenu = getMainMenu();
    return (
        <div className="footer mt-12 bg-sky-900 text-white py-10">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <div className="footer-content">
                            <div className="website-name mb-4 text-2xl font-bold text-center">
                                {getWebsiteName()}
                            </div>
                            <ul className="flex flex-row gap-2 flex-wrap justify-center mb-4">
                                {footerMenu.map((menuItem, index) => (
                                    <li key={index}>
                                        <a href={menuItem.link}>{menuItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="footer-copyright text-center text-sm">All rights reserved &copy; {currentYear}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
