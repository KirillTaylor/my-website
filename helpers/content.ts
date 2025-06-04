import { HeaderMenuItem } from "components/Header/IHeader"
import { IBanner } from "components/Banner/IBanner";

export const getBannerContent = (): IBanner => {
    // TODO: Get the banner content dynamically
    return {
        items: [
            {
                id: 0,
                title: "PHP",
                image: "/assets/img/php.png",
                link: "https://www.php.net/",
            },
            {
                id: 1,
                title: "Next.js",
                image: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
                link: "https://nextjs.org/",
            },
            {
                id: 2,
                title: "React",
                image: "/assets/img/react.png",
                link: "https://react.dev/",
            },      
            {
                id: 3,
                title: "Vue.js",
                image: "/assets/img/vue.js.png",
                link: "https://vuejs.org/",
            },
            
        ]
    }
}

export const getSlides = () => {
    // TODO: Get the slides dynamically
    return [
        {
            title: 'Slide 1',
            description: 'Description 1',
        },
        {
            title: 'Slide 2',
            description: 'Description 2',
        },
        
    ]
}


export const getMainMenu = (): HeaderMenuItem[] => {
    // TODO: Get the main menu dynamically
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

export const getSocials = () => {
    // TODO: Get the socials dynamically
    return [
        {
            name: 'GitHub',
            url: 'https://github.com/KirillTaylor',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kirill-shvetsov-ca/',
            icon: 'linkedin',
        },     
    ]
};

export const getHeroContent = () => {
    // TODO: Get the hero content dynamically
    return {
        image: "/assets/img/hero-bg.jpg",
        title: "Let us elev8 your business",
        description: "Looking for a partner to elevate your business? With over 13 years of experience in the industry, we are confident that we can help you achieve your goals.",
    }
};

export const getContentBlocks = () => {
    // TODO: Get the content blocks dynamically
    return [
        {
            title: "Development",
            description: "We will develop your website to the highest standards, ensuring it is fast, secure and user-friendly.",
            icon: "code-braces"
        },
        {
            title: "Marketing",
            description: "We will optimize your web app for search engines, ensuring it is found by potential customers. We will manage campaigns and social media presence.",
            icon: "chart-box"
        },
        {
            title: "Monitoring",
            description: "We will continue monitoring everything we do, ensuring it is performing at its best and adjust it as needed.",
            icon: "eye"
        }
    ];
};
