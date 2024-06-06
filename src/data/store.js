
import { reactive } from 'vue';

const iMieiDati = reactive({



    // FOOTER
    // Clients Section 
    clients: [
        { normal: '/src/assets/img/h5-client-2.png', hover: '/src/assets/img/h5-client-2-h.png', isActive: true },
        { normal: '/src/assets/img/h5-client-3.png', hover: '/src/assets/img/h5-client-3-h.png', isActive: true },
        { normal: '/src/assets/img/h5-client-4.png', hover: '/src/assets/img/h5-client-4-h.png', isActive: true },
        { normal: '/src/assets/img/h5-client-5.png', hover: '/src/assets/img/h5-client-5-h.png', isActive: true },
        { normal: '/src/assets/img/h5-client-1.png', hover: '/src/assets/img/h5-client-1-h.png', isActive: true }
    ],
    tabs: [
        {
            id: 'list-home',
            title: 'What we do',
            contentTitle: 'Learning Possibilities',
            content: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            listItems: [
                'We enrich lives through learning.',
                'We enrich lives through learning.',
                'We enrich lives through learning.',
                'We enrich lives through learning.'
            ],
            imgSrc: new URL('../assets/img/h12-tabs-icon-1.png', import.meta.url).href
        },
        {
            id: 'list-profile',
            title: 'Degree programme',
            contentTitle: 'Inspiring Minds',
            content: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            listItems: [
                'Maximizing potential through individual attention.',
                'We enrich lives through learning.',
                'Enriquecemos vidas a través del aprendizaje.',
                'Nous enrichissons des vies par l\'apprentissage.'
            ],
            imgSrc: new URL('../assets/img/h12-tabs-icon-2.png', import.meta.url).href
        },
        {
            id: 'list-messages',
            title: 'Career achievements',
            contentTitle: 'Investing in Knowledge',
            content: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            listItems: [
                'We enrich lives through learning.',
                'We enrich lives through learning.',
                'We enrich lives through learning.',
                'We enrich lives through learning.'
            ],
            imgSrc: new URL('../assets/img/h12-tabs-icon-3.png', import.meta.url).href
        },
        {
            id: 'list-settings',
            title: 'Personal management',
            contentTitle: 'Secure Your Future',
            content: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            listItems: [
                'We enrich lives through learning.',
                'We enrich lives through learning.',
                'We enrich lives through learning.',
                'We enrich lives through learning.'
            ],
            imgSrc: new URL('../assets/img/h12-tabs-icon-4.png', import.meta.url).href
        },
        {
            id: 'list-5',
            title: 'Step to success',
            contentTitle: 'Where Learning Begins',
            content: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            listItems: [
                'We enrich lives through learning.',
                'We enrich lives attraverso l\'apprendimento.',
                'Enriquecemos vidas a través del aprendizaje.',
                'Nous enrichissons des vies par l\'apprentissage.'
            ],
            imgSrc: new URL('../assets/img/h12-tabs-icon-5.png', import.meta.url).href
        },
        {
            id: 'list-6',
            title: 'Knowledge transfer',
            contentTitle: 'Knowledge is Power',
            content: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
            listItems: [
                'We enrich lives through learning.',
                'We enrich lives attraverso l\'apprendimento.',
                'Enriquecemos vidas a través del aprendizaje.',
                'Nous enrichissons des vies par l\'apprentissage.'
            ],
            imgSrc: new URL('../assets/img/h12-tabs-icon-6.png', import.meta.url).href
        }
    ],

    // cardcontainer

    cards: [
        {
            title: "Bussines english",
            name: "Preston Marshall",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-1-f-img.jpg', import.meta.url).href,
            tag: "Bussines"

        },
        {
            title: "Social computing",
            name: "David Sanders",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-2-f-img.jpg', import.meta.url).href,
            tag: "Programming"

        },
        {
            title: "Learn Spanish",
            name: "Jennie king",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-3-f-img.jpg', import.meta.url).href,
            tag: "Languages"

        },
        {
            title: "Basic Marketing",
            name: "Edward Bowman",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-4-f-img.jpg', import.meta.url).href,
            tag: "Bussines"

        },
        {
            title: "Android developer",
            name: "David Sanders",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-5-f-img.jpg', import.meta.url).href,
            tag: "Programming"

        },
        {
            title: "Web designing",
            name: "Jennifer pawell",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-6-f-img.jpg', import.meta.url).href,
            tag: "Programming"
        },
        {
            title: "Financial modeling",
            name: "Edward Bowman",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-12-f-img.jpg', import.meta.url).href,
            tag: "Bussines"
        },
        {
            title: "Academic english",
            name: "Dave Robbins",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-8-f-img.jpg', import.meta.url).href,
            tag: "Languages"
        },
        {
            title: "Modern psychology",
            name: "Kathryn Webb",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod earum possimus. Qui corporis dolores laudantium molestiae maxime.",
            imgSrc: new URL('../assets/img/course-9-f-img.jpg', import.meta.url).href,
            tag: "Languages"
        },
    ],

    // Carousel bg
    slides: [
        {
            imgSrc: new URL('../assets/img/testimonials-standard-1.png', import.meta.url).href,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime et quasi ad quidem nam vero voluptate temporibus, porro obcaecati sapiente expedita consequatur fugiat a ullam, molestias consequuntur ex debitis.',
            subText1: 'Virginia Foster',
            subText2: 'STUDENT'
        },
        {
            imgSrc: new URL('../assets/img/testimonials-standard-2.png', import.meta.url).href,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime et quasi ad quidem nam vero voluptate temporibus, porro obcaecati sapiente expedita consequatur fugiat a ullam, molestias consequuntur ex debitis.',
            subText1: 'Molly Simons',
            subText2: 'TEACHER'
        },
        {
            imgSrc: new URL('../assets/img/testimonials-standard-3.png', import.meta.url).href,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime et quasi ad quidem nam vero voluptate temporibus, porro obcaecati sapiente expedita consequatur fugiat a ullam, molestias consequuntur ex debitis.',
            subText1: 'Joan Collins',
            subText2: 'STUDENT'
        }
    ]

});

export default iMieiDati;