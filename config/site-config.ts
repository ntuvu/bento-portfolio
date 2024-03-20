export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4" | "4x1";

export type GridItemType = "social" | "equipment" | "project" | "mentor";

export type EquipmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  buttonTitle?: string;
  buttonSecondaryText?: string;
  buttonLink?: string;
  color?: string;
  stars?: number;

  promotion?: string;
  price?: string;
  oldPrice?: string;

  equipments?: EquipmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "1x2",
    type: "social",
    title: "Linkedin",
    icon: "linkedin",
    username: "@ntuvu",
    buttonTitle: "Connect",
    buttonLink: "https://discord.com/invite/5aXRp49Q4h",
    buttonSecondaryText: "",
    color: "#0b86ca",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@ntuvu",
    buttonTitle: "Follow",
    buttonSecondaryText: "",
    buttonLink: "https://github.com/ntuvu",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Facebook",
    icon: "facebook",
    username: "@tu.276",
    buttonTitle: "Follow",
    buttonSecondaryText: "",
    buttonLink: "https://www.facebook.com/tu.276/",
    color: "#1976d2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    username: "@ntu.vu",
    buttonTitle: "Follow",
    buttonSecondaryText: "",
    buttonLink: "https://www.instagram.com/ntu.vu/",
    color: "#f17737",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Frontend skills",
    image: "/frontend.webp",
    equipments: [
      {
        title: "HTML",
        link: "https://www.w3schools.com/html/",
      },
      {
        title: "CSS",
        link: "https://www.w3schools.com/css/",
      },
      {
        title: "Javascript",
        link: "https://www.w3schools.com/js/",
      },
      {
        title: "Typescript",
        link: "https://www.w3schools.com/typescript/typescript_intro.php",
      },
      {
        title: "React",
        link: "https://react.dev/",
      },
      {
        title: "Vue",
        link: "https://vuejs.org/",
      },
      {
        title: "Angular",
        link: "https://angular.io/",
      },
      {
        title: "Next",
        link: "https://nextjs.org/",
      },
      {
        title: "Nuxt",
        link: "https://nuxt.com/",
      },
      {
        title: "Nuxt",
        link: "https://nuxt.com/",
      },
      {
        title: "Tailwind",
        link: "https://tailwindcss.com/",
      },
      {
        title: "Bootstrap",
        link: "https://getbootstrap.com/",
      },
    ],
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Backend skills",
    image: "/backend.webp",
    equipments: [
      {
        title: "Java",
        link: "https://www.w3schools.com/java/",
      },
      {
        title: "C#",
        link: "https://www.w3schools.com/cs/index.php",
      },
      {
        title: "Spring boot",
        link: "https://spring.io/guides/gs/spring-boot",
      },
      {
        title: "Node",
        link: "https://nodejs.org/en",
      },
      {
        title: "RESTful API",
        link: "https://www.youtube.com/watch?v=-MTSQjw5DrM",
      },
      {
        title: "GraphQL",
        link: "https://www.youtube.com/watch?v=eIQh02xuVw4",
      },
      {
        title: "MongoDB",
        link: "https://www.mongodb.com/",
      },
      {
        title: "SQL",
        link: "https://www.w3schools.com/sql/",
      },
    ],
  },
  
  {
    layout: "4x1",
    type: "mentor",
    title: "My project",
    icon: "",
    promotion: "",
    oldPrice: "",
    price: "",
    buttonLink: "",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Full-stack Multilingual Blog with Next.js 13",
    username: "@batuhanbilginn",
    description:
      "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
    icon: "udemy",
    buttonTitle: "Enroll",
    buttonSecondaryText: "%90 OFF",
    buttonLink:
      "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  },
  {
    layout: "2x1",
    type: "project",
    title: "AI Blog Post Generator",
    icon: "github",
    stars: 19,
    color: "#070707",
    buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
  },
];

export const siteConfig = {
  name: "Vu Ngoc Tu",
  title: "Developer",
  bio: "Like to create web/app",
  location: "Vietnam",
  locationLink: "https://maps.app.goo.gl/quZD6w7j6MwebtPbA",
  email: "ntuvudev@gmail.com",
  items: GridItems,
} as const;
