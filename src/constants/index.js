import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  import Suspension from '../assets/benefits/suspension.png'
  import Brake from '../assets/benefits/brake-disc.png';
  import AC from '../assets/benefits/ac.png';
  import Oil from '../assets/benefits/oil.png';
  import CEngine from '../assets/benefits/checkEngine.png';
  import Tune from '../assets/benefits/tune_up.png';
  import Engine from '../assets/benefits/engine.png';
  import Transmision from '../assets/benefits/transmision.png';
  import Gauge from '../assets/benefits/gauge.png';

  import Review1 from '../assets/benefits/SJ-reviewIcon2.png';
  import Review2 from '../assets/benefits/SJ-reviewIcon3.png';
  import Review3 from '../assets/benefits/SJ-reviewIcon4.png';
  import Rating from '../assets/benefits/rating.png';
  


  
  export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#home",
    },
    {
      id: "1",
      title: "Services",
      url: "#features",
    },
    {
      id: "2",
      title: "About Us",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Reviews",
      url: "#reviews",
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "1 Year Warranty on all Services",
      text: collabText,
    },
    {
      id: "1",
      title: "High Quality Parts",
    },
    {
      id: "2",
      title: "Top-notch Equipment ",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Break Service",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: Brake,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "A/C Service",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: AC,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Oil Change",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: Oil,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Catalytic & Muffler",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: Engine,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Check Engine Light",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: CEngine,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Trasmission & Engine Rebuild",
      text: "The app uses natural language processing to understand user queries and provide.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: Transmision,
      imageUrl: benefitImage2,
    },
    {
      id: "6",
      title: "Complete Tune-Up",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: Tune,
      imageUrl: benefitImage2,
    },
    {
      id: "7",
      title: "Shock Suspension Strut",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: Suspension,
      imageUrl: benefitImage2,
    },
    {
      id: "8",
      title: "Aligment Service",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: Gauge,
      imageUrl: benefitImage2,
    },
  ];

  export const reviews = [
    {
      id: "0",
      title: "Terry Gilbertsen",
      text: "This is my first time at this location. And I really received great service and my vehicle is running better than its bren in a long time.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: Review1,
      iconRating: Rating,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Ismael Soto",
      text: "Took my car in for the check engine light, they checked it out while I waited. Turns out all I needed was a gas cap! They changed it for me while I waited and the light never came back!",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: Review2,
      iconRating: Rating,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Mia Olmedo",
      text: "Took my car in for an oil change, Mario was the guy at the front desk and was very nice and not pushy at all, they ended up letting me know I needed a tire rotation because my tires were wearing unevenly, I didn’t even know cars needed a rotation!",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: Review3,
      iconRating: Rating,
      imageUrl: benefitImage2,
    },
  ];

  
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];