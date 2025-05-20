export interface HeaderMenuItem {
    name: string;
    link: string;

    // both of the following properties must exist together
    hasMenu?: boolean;
    subMenu?: HeaderSubMenu[];
}

export interface HeaderSubMenu {
    name: string;
    link: string;
}