import { HeaderMenuItem } from "components/Header/IHeader"
import { IBanner } from "components/Banner/IBanner";
import { Slide } from "components/Carousel/ICarousel";

export const getBannerContent = (): IBanner => {
    // TODO: Get the banner content dynamically
    return {
        title: "Our technology partners",
        items: [
            {
                title: "Next.js",
                image: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
                link: "https://nextjs.org/",
            },
            {
                title: "React",
                image: "/assets/img/react.png",
                link: "https://react.dev/",
            },      
            {
                title: "Vue.js",
                image: "/assets/img/vue.js.png",
                link: "https://vuejs.org/",
            },
            {
                title: "PHP",
                image: "/assets/img/php.png",
                link: "https://www.php.net/",
            }, 
            {
                title: "WordPress",
                image: "/assets/img/wordpress.png",
                link: "https://wordpress.org/",
            }, 
            {
                title: "Laravel",
                image: "/assets/img/laravel.png",
                link: "https://laravel.com/",
            },               
        ]
    }
}

export const getSlides = (): Slide[] => {
    // TODO: Get the slides dynamically
    return [
        {
            title: 'Gero Dashboard',
            description: [
                'A revolutionary Crypto wallet experience unites Web2 and Web3, offering native financial integration, ADA cashback rewards, governance, staking, swapping, and seamless off & on ramps - all in one powerful platform.',
                'State-of-the-art Cardano & Apex Fusion wallet for desktop.'
            ],
            image: '/assets/img/clients/gero-dashboard.png',
            tags: ['Vite', 'Vue.js', 'Vuetify'],
            link: [
                { href: 'https://chromewebstore.google.com/detail/gero-dashboard/bgpipimickeadkjlklgciifhnalhdjhe', text: 'View Project' },
                { href: 'https://gerowallet.io/', text: 'Company Website' }
            ],
            backgroundColor: '#000000',
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
