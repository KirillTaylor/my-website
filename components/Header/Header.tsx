"use client";

import React, { useState } from "react";
import { HeaderMenuItem } from "./IHeader";
import { getMainMenu } from "helpers/content";
import { getWebsiteName } from "helpers/utils";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header(): React.ReactNode {
    const menu: HeaderMenuItem[] = getMainMenu();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<null | HTMLElement>(null);
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSubMenuAnchorEl(null);
        setActiveSubMenu(null);
    };

    const handleSubMenuClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSubMenuAnchorEl(event.currentTarget);
        setActiveSubMenu(index);
    };

    const handleSubMenuClose = () => {
        setSubMenuAnchorEl(null);
        setActiveSubMenu(null);
    };

    return (
        <header className="shadow-md relative z-50">
            <div className="container flex justify-between items-center">
                <div className="logo text-4xl py-4">
                    <span className="mdi mdi-account-circle"></span>
                    <span className="px-4 font-bold">{ getWebsiteName() }</span>
                </div>
                <nav>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, py: 2 }}>
                        {menu.map((item, index) => (
                            <Box key={index}>
                                <Button
                                    href={item.link}
                                    color="inherit"
                                    sx={{ textTransform: 'none' }}
                                >
                                    {item.name}
                                </Button>
                                {item.hasMenu && (
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        {item.subMenu?.map((child, childIndex) => (
                                            <Button
                                                key={childIndex}
                                                href={child.link}
                                                color="inherit"
                                                sx={{ textTransform: 'none' }}
                                            >
                                                {child.name}
                                            </Button>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {menu.map((item, index) => (
                                <MenuItem 
                                    key={index} 
                                    component="a" 
                                    href={item.link}
                                    onClick={(e) => item.hasMenu && handleSubMenuClick(e, index)}
                                >
                                    {item.name}
                                    {item.hasMenu && (
                                        <Menu
                                            anchorEl={subMenuAnchorEl}
                                            open={Boolean(subMenuAnchorEl) && activeSubMenu === index}
                                            onClose={handleSubMenuClose}
                                        >
                                            {item.subMenu?.map((child, childIndex) => (
                                                <MenuItem
                                                    key={childIndex}
                                                    component="a"
                                                    href={child.link}
                                                    onClick={handleSubMenuClose}
                                                >
                                                    {child.name}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    )}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </nav>
            </div>
        </header>
    );
}