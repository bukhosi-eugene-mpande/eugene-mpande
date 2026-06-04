export interface TechItem {
  name: string;
  use: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  author: string;
  about: string;
  repo_link: string;
  paragraphs: string[];
  tech_and_pro_langs: TechItem[];
  banner_img_src: string;
  banner_img_alt: string;
  card_img_src: string;
  card_img_alt: string;
  type: "project" | "upcoming";
}

export const articles: Article[] = [
  {
    slug: "landing-page",
    title: "Landing Page Project",
    date: "09 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the making of the landing page project as part of the Odin Project",
    repo_link: "https://github.com/bukhosi-eugene-mpande/landing-page",
    paragraphs: [
      "To enhance my proficiency in web design, I undertook The Odin Project. As a fundamental task, I was tasked with crafting a landing page for a fictional company. Enter Narly Skates, a platform dedicated to skateboard magazine media. My landing page featured distinct sections: an About Us segment, introducing the brand and its mission; an Articles section, spotlighting captivating content tailored to the target audience; and finally, the Goals and Sign-Up sections, designed to engage users with aspirations and encourage subscriptions.",
      "The project significantly boosted my understanding of CSS. While initially tempted by libraries like Bootstrap and Tailwind, I ultimately refrained to grasp the core concepts directly. This decision proved fruitful, pushing me beyond initial comfort and solidifying my foundational knowledge. Overall, this project was an enjoyable and valuable experience, honing my design abilities both technically and creatively.",
    ],
    tech_and_pro_langs: [
      { name: "HyperText Markup Language (HTML)", use: "The language was used to describe and define the content of a Web page" },
      { name: "Cascading Style Sheets (CSS)", use: "Used to describe the appearance of Web content" },
    ],
    banner_img_src: "/images/Narly-Skates-logo.png",
    banner_img_alt: "Narly Skates",
    card_img_src: "/images/article-card-images/narly-skates-card.png",
    card_img_alt: "Narly Skates logo",
    type: "project",
  },
  {
    slug: "kos",
    title: "Kitchen Of Secrets Project",
    date: "13 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the making of the Kitchen Of Secrets project as part of my Design Patterns course.",
    repo_link: "https://github.com/bukhosi-eugene-mpande/Kitchen-of-Secrets",
    paragraphs: [
      "I would like to begin by expressing my gratitude to my teammates Ayanda, Chenoa, Thato, Ashley, and Joshua for their invaluable contributions to the Kitchen of Secrets project. Without their collaboration, the project would not have reached its current form.",
      "Our project aimed to create a restaurant simulator, and after deliberation, we opted for the concept of a restaurant tycoon game. Understanding that a restaurant operates as a complex system with numerous interconnected processes, we embarked on the challenge of simulating this intricate environment. From seating guests to food preparation at various stations, each aspect was meticulously considered to offer a realistic and engaging experience to players. Throughout the development process, we encountered and successfully addressed numerous challenges, drawing upon the design patterns we had learned during the semester.",
      "In this blog post, I will provide insight into my specific contributions to the project. As part of the backend subsystems, I took charge of the kitchen subsystem. This involved overseeing the intricacies of food preparation across different workstations within the virtual restaurant. Our implementation was primarily in C++, and detailed information regarding this can be found in the project's final report available on our GitHub repository.",
      "Additionally, I was responsible for integrating the subsystems into a cohesive system that could seamlessly interface with the frontend. Moreover, I undertook the task of managing automated testing, which we accomplished using GitHub Actions alongside Google Tests.",
      "Overall, this project served as an enjoyable culmination of the semester, providing valuable insights into the application of design patterns in modern code development.",
    ],
    tech_and_pro_langs: [
      { name: "C plus plus (C++)", use: "This language was used to implement the backend of the project" },
      { name: "YAML", use: "Used for automated testing of the project using github actions" },
      { name: "Google Test", use: "Used for automated testing of the project" },
      { name: "React", use: "Used to create the front end of the project" },
      { name: "JavaScript", use: "Used to build the react components of the front end" },
    ],
    banner_img_src: "/images/article-banner-images/kos-banner.png",
    banner_img_alt: "Kitchen Of Secrets Banner",
    card_img_src: "/images/article-card-images/kos-card.png",
    card_img_alt: "Kitchen of Secrets logo",
    type: "project",
  },
  {
    slug: "odin-recipes",
    title: "Odin Recipes Project",
    date: "13 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the making of the Odin Recipes Project as part of the Odin Project",
    repo_link: "https://github.com/bukhosi-eugene-mpande/odin-recipes",
    paragraphs: [
      "To refine my skills in web design, I have embarked on The Odin Project, an educational endeavor aimed at enhancing proficiency in this domain. One of the fundamental tasks within this project was the creation of a basic web page using solely HTML and CSS, with the objective of establishing a recipe sharing platform called Odin Recipes.",
      "Odin Recipes served as a platform dedicated to sharing exquisite culinary creations. The website comprised a main page featuring an array of available meals, along with individual pages dedicated to each recipe, providing detailed insights into the culinary delights showcased.",
      "This project proved instrumental in elevating my comprehension of CSS. Prohibiting the use of libraries such as Bootstrap and Tailwind compelled me to delve deeply into the core principles of CSS, thereby significantly augmenting my understanding.",
      "In conclusion, The Odin Project offered a gratifying and invaluable experience, refining my design capabilities both technically and creatively, and furthering my journey in the realm of web design.",
    ],
    tech_and_pro_langs: [
      { name: "HyperText Markup Language (HTML)", use: "The language was used to describe and define the content of a Web page" },
      { name: "Cascading Style Sheets (CSS)", use: "Used to describe the appearance of Web content" },
    ],
    banner_img_src: "/images/article-banner-images/odin-recipes-banner.png",
    banner_img_alt: "Odin Recipes Banner",
    card_img_src: "/images/article-card-images/odin-recipes-card.png",
    card_img_alt: "Odin Recipes logo",
    type: "project",
  },
  {
    slug: "rock-paper-scissors",
    title: "Rock Paper Scissors Project",
    date: "13 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the making of the Rock Paper Scissors project as part of the Odin Project",
    repo_link: "https://github.com/bukhosi-eugene-mpande/rock-paper-scissors",
    paragraphs: [
      "To refine my skills in web design, I've embarked on The Odin Project, an educational initiative aimed at bolstering proficiency in this field. As part of this endeavor, I tackled a fundamental task: creating a rock-paper-scissors game using only HTML, CSS, and JavaScript.",
      "The game provided users with the opportunity to engage in the classic rock-paper-scissors challenge against the computer. Upon selecting their choice—rock, paper, or scissors—the computer, employing JavaScript, would randomly choose its own. The outcome would then be displayed on the page, indicating whether the user had triumphed, the result was a tie, or the computer emerged victorious.",
      "This project served as a pivotal step in solidifying my understanding of JavaScript fundamentals. Though not overly challenging, it served as an effective gauge of my proficiency in the language.",
      "In conclusion, The Odin Project continues to enrich my comprehension of web development, furnishing a rewarding and invaluable experience.",
    ],
    tech_and_pro_langs: [
      { name: "HyperText Markup Language (HTML)", use: "The language was used to describe and define the content of a Web page" },
      { name: "Cascading Style Sheets (CSS)", use: "Used to describe the appearance of Web content" },
      { name: "JavaScript (JS)", use: "Used to create the game logic and functionality" },
    ],
    banner_img_src: "/images/article-banner-images/pexels-thirdman-8926558-banner.jpg",
    banner_img_alt: "Rock Paper Scissors Banner",
    card_img_src: "/images/article-card-images/pexels-darina-belonogova-8789755-card.jpg",
    card_img_alt: "Rock Paper Scissors",
    type: "project",
  },
  {
    slug: "school-website",
    title: "School Website Project",
    date: "13 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the making of a School Website.",
    repo_link: "https://github.com/bukhosi-eugene-mpande/SchoolWebsite",
    paragraphs: [
      "Upon receiving a request from a family friend, I undertook the task of creating a website for Proverbs Private College, located in the Mpumalanga province. For this endeavor, I opted to utilise Next.js for website development, Tailwind for styling, and intend to incorporate Node.js for the backend.",
      "The decision to employ Next.js stemmed from its status as a React framework renowned for exceptional search engine optimisation—an imperative feature for the school's online presence. Tailwind was selected due to its user-friendly nature, particularly beneficial for larger projects.",
      "Presently, the website encompasses eight pages: home, about, academics, admissions, arts, contact, news, and sports. Building this platform has been a delightful experience, facilitated by the seamless synergy between Tailwind and Next.js.",
      "Moving forward, I am committed to enhancing the website's functionality and aesthetics, with regular updates to be shared on GitHub.",
    ],
    tech_and_pro_langs: [
      { name: "Next.js", use: "Next.js was used to create the website" },
      { name: "Tailwind", use: "Tailwind was used to style the website" },
      { name: "JavaScript (JS)", use: "JavaScript was used to create the website's functionality" },
    ],
    banner_img_src: "/images/article-banner-images/library.jpg",
    banner_img_alt: "library book shelf",
    card_img_src: "/images/article-card-images/school-card.jpg",
    card_img_alt: "Netball game",
    type: "project",
  },
  {
    slug: "sketch",
    title: "Etch A Sketch Project",
    date: "13 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the making of the Etch A Sketch project as part of the Odin Project",
    repo_link: "https://github.com/bukhosi-eugene-mpande/etch-a-sketch",
    paragraphs: [
      "To advance my expertise in web design, I've embarked on The Odin Project, an educational initiative dedicated to refining skills in this field. Among the core tasks within this project was the creation of a sketch pad using only HTML, CSS, and JavaScript.",
      "Throughout this endeavor, I challenged myself to develop a browser-based rendition of a sketchpad, drawing inspiration from traditional sketchpads and Etch-A-Sketch toys. This project served as a platform to augment my proficiency in DOM manipulation.",
      "Undoubtedly, this project proved pivotal in establishing the groundwork for my JavaScript knowledge. While it posed certain challenges, particularly in the utilization of flexbox and dynamically generating HTML, I found the endeavor both enjoyable and rewarding.",
      "In summation, The Odin Project remains instrumental in fostering my understanding of web development, offering a gratifying and invaluable experience.",
    ],
    tech_and_pro_langs: [
      { name: "HyperText Markup Language (HTML)", use: "The language was used to describe and define the content of a Web page" },
      { name: "Cascading Style Sheets (CSS)", use: "Used to describe the appearance of Web content" },
      { name: "JavaScript (JS)", use: "Used to create the functionality" },
    ],
    banner_img_src: "/images/article-banner-images/sketch-banner.png",
    banner_img_alt: "Etch A Sketch Banner",
    card_img_src: "/images/article-card-images/sketch-card.png",
    card_img_alt: "Etch A Sketch logo",
    type: "project",
  },
  {
    slug: "grape-quest",
    title: "Grape Quest Project",
    date: "13 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the plan for the Grape Quest project.",
    repo_link: "https://github.com/bukhosi-eugene-mpande/GrapeQuest",
    paragraphs: [
      "Grape Quest is an ambitious full-stack web application that I aim to develop over the next six months. The current blueprint involves leveraging Angular for the front-end and PHP for the backend. I've opted for Angular due to its capacity for rapid development, aligning perfectly with the theme of expedited progress.",
      "So, what is Grape Quest? It's envisioned as an e-commerce platform specialising in the sale of wine. However, what sets it apart is its distinctive feature—an emphasis on providing detailed information about the origin of the wine. This feature aims to empower wineries to establish and promote their brands effectively, ultimately fostering wine tourism within the country.",
      "Overall, I anticipate Grape Quest to be an exciting and rewarding project, introducing me to various new web development paradigms. While there are currently no plans to bring the website to market, I envision it serving as an engaging showcase of my evolving skills in the field.",
    ],
    tech_and_pro_langs: [
      { name: "Angular", use: "Used to develop the frontend of the website" },
      { name: "PHP", use: "Used to develop the backend of the site" },
      { name: "Javascript", use: "Used for client side webpage behavior" },
      { name: "Tailwind", use: "Used to style the website" },
    ],
    banner_img_src: "/images/article-banner-images/grape-quest-banner.jpg",
    banner_img_alt: "Grape Quest banner",
    card_img_src: "/images/article-card-images/grape-quest-card.jpg",
    card_img_alt: "Grape Quest",
    type: "upcoming",
  },
  {
    slug: "movie-atlas",
    title: "Movie Atlas Project",
    date: "14 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the plan for the Movie Atlas project.",
    repo_link: "https://github.com/bukhosi-eugene-mpande/MovieAtlas",
    paragraphs: [
      "Movie Atlas is an ambitious full-stack web application that I aim to develop over the next six months. The current plan involves leveraging Django for both the front-end and the backend.",
      "I've opted for Django primarily because I want to exclusively use Python. This decision stems from the fact that this project will be the first in my portfolio to incorporate AI. Given Python's widespread use in AI development, it provides a plethora of tools that will be readily available for me to utilise.",
      "Additionally, I've decided to use MongoDB as the database to store the data, offering flexibility and scalability for the project's needs.",
      "So, what exactly is Movie Atlas? It's envisioned as a movie recommendation website where users can recommend films based on their viewing history and reviews. AI features will include automatically generated spoiler-free movie reviews, alongside sophisticated algorithms, including a recommendation algorithm built from scratch.",
      "Overall, I anticipate this project to be the most challenging endeavour I'll undertake in the next six months. However, I believe the knowledge gained from it will be invaluable, especially in light of the continued rise of AI.",
    ],
    tech_and_pro_langs: [
      { name: "Django", use: "Used to develop the frontend and backend of the website" },
      { name: "Bootstrap", use: "Used to style the website" },
      { name: "Python", use: "Used for the backend of the site" },
    ],
    banner_img_src: "/images/article-banner-images/movie-atlas-banner.jpg",
    banner_img_alt: "Movie Atlas Banner",
    card_img_src: "/images/article-card-images/movie-atlas-card.jpg",
    card_img_alt: "Movie Atlas",
    type: "upcoming",
  },
  {
    slug: "advent-of-code",
    title: "Advent Of Code Project",
    date: "14 February 2024",
    author: "Bukhosi Eugene Mpande",
    about: "This blog details the plan for the Advent Of Code project.",
    repo_link: "https://github.com/bukhosi-eugene-mpande/advent-of-code",
    paragraphs: [
      "Advent of Code presents an exciting series of programming puzzles—a veritable Advent calendar catering to a diverse range of skill sets and proficiency levels. These challenges offer enthusiasts the opportunity to flex their coding muscles in whichever programming language they prefer.",
      "My personal objective is to conquer all the Advent of Code challenges using Java, eschewing the assistance of AI helpers like co-pilot. By embarking on this endeavor, I aim to enhance my problem-solving skills and adequately prepare for any upcoming interviews in the coming year.",
      "In essence, this undertaking promises not only a source of enjoyable problem-solving tasks but also a means to indulge my affinity for grappling with complex conundrums. After all, who doesn't love a good challenge?",
    ],
    tech_and_pro_langs: [
      { name: "Java", use: "Used to solve the problems in the advent of code challenges" },
    ],
    banner_img_src: "/images/article-banner-images/advent-banner.jpg",
    banner_img_alt: "Advent Of Code Banner",
    card_img_src: "/images/article-card-images/advent-card.jpg",
    card_img_alt: "Advent of Code",
    type: "upcoming",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getProjectArticles(): Article[] {
  return articles.filter((a) => a.type === "project");
}

export function getUpcomingArticles(): Article[] {
  return articles.filter((a) => a.type === "upcoming");
}
