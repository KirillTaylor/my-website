import React from "react";
import { HeaderMenuItem } from "./IHeader";
import { getMainMenu } from "helpers/content";
import { getWebsiteName } from "helpers/utils";

export default function Header(): React.ReactNode {
    const menu: HeaderMenuItem[] = getMainMenu();
    return (
        <header className="shadow-md relative z-50">
            <div className="container flex justify-between items-center">
                <div className="logo text-4xl py-4">
                    <span className="mdi mdi-account-circle"></span>
                    <span className="px-4 font-bold">{ getWebsiteName() }</span>
                </div>
                <nav>
                    <ul className="flex gap-4 py-4">
                        { menu.map( (item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}>{item.name}</a>
                                    { item.hasMenu && (
                                        <ul className="flex gap-4">
                                            { item.subMenu?.map( (child, childIndex) => <li key={childIndex}><a href={child.link}>{child.name}</a></li>)}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}