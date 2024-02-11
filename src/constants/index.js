import { osmosys, highradius, tatasteel} from "../assets/icons";
import { bookstore,piorbag,yogalife,icecream,} from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    // linkedin,
    mongodb,
    mui,
    nodejs,
    react,
    tailwindcss,
    figma,
    adobeXD,
    SQL,
    cplusplus,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl:figma,
        name: "Figma",
        type: "UI/UX",
    },
    {
        imageUrl:adobeXD,
        name: "AbobeXD",
        type: "UI/UX",
    },
    {
        imageUrl:SQL,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl:cplusplus,
        name: "C++",
        type: "Progammimg-Language",
    },
    
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Tata Steel",
        icon: tatasteel,
        iconBg: "#accbe1",
        date: "May 2022 - June 2022",
        points: [
            "Developed a E-COMMERCE website using React incorporating essential features such as adding to cart, and seamless checkout process.",
            "Implemented functionality to remove items and manage inventory efficiently.",
        ],
    },
    {
        title: "Sotware Developer Intern",
        company_name: "High Radius",
        icon: highradius,
        iconBg: "#fbc3bc",
        date: "May 2023 - Aug 2023",
        points: [
            "•Developed a B2B Invoice Management Application using backend development, integrating with SQL database.",
            "Built a responsive frontend using React, ensuring full functionality and a user-friendly interface.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "•Implemented an ML model to predict future order amounts,optimizing business operations.",
        ],
    },
    {
        title: "Associate Software Engineer Intern",
        company_name: "Osmosys",
        icon: osmosys,
        iconBg: "#b7e4c7",
        date: "Nov 2023 - present",
        points: [
            "Focused on advancing skills in frontend development",
            "Engaged in learning and exploring the PineStem application",
        ],
    },
    
];



export const projects = [
    {
        iconUrl: bookstore,
        theme: 'btn-back-red',
        name: 'Book Store App',
        description: ' Made with React , Stripe,Google Api, New York Times API .A website design where you can find all of your contemporary literature',
        link: 'https://book-store-wp.netlify.app/',
    },
    {
        iconUrl: piorbag,
        theme: 'btn-back-green',
        name: 'Pior Bag - Shopping App',
        description: 'Constructed an E-COMMERCE website with React,integrating key features like cart management.Introduced capabilities to remove items and efficiently handle inventory management',
        link: 'https://cart-green.vercel.app/',
    },
    {
        iconUrl: yogalife,
        theme: 'btn-back-blue',
        name: 'Yoga Life ',
        description: 'Designed engaging UI/UX for yoga app using Figma,prioritizing user experience with innovative design',
        link: 'https://github.com/AnishaGhosh-14/UI-design/blob/main/YogaLife%20UI.png',
    },
    {
        iconUrl: icecream,
        theme: 'btn-back-pink',
        name: 'Ice Cream Shop',
        description: 'Indulge in a world of sweetness and joy as you explore the IceCreamDelight website, where every click is a step into the enchanting universe of ice cream. Meticulously designed using Figma, our user interface (UI) and user experience (UX) promise a delightful and seamless journey for ice cream enthusiasts.',
        link: 'https://github.com/AnishaGhosh-14/UI-design/blob/main/IceCreamWebPageUI.png',
    },
    
];