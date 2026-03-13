export const navItem = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    {
        name: 'Services', path: '/services', subItems: [
            { name: 'Financial Advice', path: '/services/financial-advice' },
            { name: 'Sustainable Investment', path: '/services/sustainable-investment' },
        ]
    },
    { name: 'Contact Us', path: '/contact-us' },
]