import { HeaderMenuItem } from "components/Header/HeaderTypes"

export const getMainMenu = (): HeaderMenuItem[] => {
    return [
        {
            name: 'Home',
            link: '/'
        }, 
        {
            name: 'Experience',
            link: '/experience'
        },
        {
            name: 'Portfolio',
            link: '/portfolio'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]
}