import React from "react";
import Socials from "components/shared/Socials/Socials";
import { getMainMenu } from "helpers/menus";
import { getWebsiteName } from "helpers/utils";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerMenu = getMainMenu();
    return (
        <div className="footer mt-12">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <div className="footer-content">
                            <div className="website-name mb-4 text-2xl font-bold">
                                {getWebsiteName()}
                            </div>
                            <ul>
                                {footerMenu.map((menuItem, index) => (
                                    <li key={index}>
                                        <a href={menuItem.link}>{menuItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-2 text-right">
                        <Socials />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="footer-copyright text-center text-sm">All rights reserved &copy; {currentYear}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
