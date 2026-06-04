import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getProjectArticles, getUpcomingArticles } from "./data/articles";

const programmingLanguages = [
  { src: "/images/C-Pro-Lang.svg", alt: "C programming language logo", label: "C" },
  { src: "/images/cpp.svg", alt: "C plus plus logo", label: "C++" },
  { src: "/images/python-5.svg", alt: "Python logo", label: "Python" },
  { src: "/images/java.svg", alt: "Java logo", label: "Java" },
  { src: "/images/javascript.svg", alt: "JavaScript logo", label: "JavaScript" },
  { src: "/images/sql.svg", alt: "SQL logo", label: "SQL" },
];

const technologies = [
  { src: "/images/html-5-svgrepo-com.svg", alt: "HTML logo", label: "HTML" },
  { src: "/images/bootstrap-svgrepo-com.svg", alt: "Bootstrap logo", label: "Bootstrap" },
  { src: "/images/tailwind-svgrepo-com.svg", alt: "Tailwind logo", label: "Tailwind" },
  { src: "/images/angular-icon-svgrepo-com.svg", alt: "Angular logo", label: "Angular" },
  { src: "/images/react-svgrepo-com.svg", alt: "React logo", label: "React" },
  { src: "/images/nextjs-svgrepo-com.svg", alt: "Next.js logo", label: "Next.js" },
];

const timelineItems = [
  { period: "2015–2017", title: "Maryvale College", description: "For my first high school I attended Maryvale College, completing grade 8 to grade 10 there." },
  { period: "2017–2019", title: "Basa Tutorial Institute", description: "For my second high school I attended Basa Tutorial Institute, completing grade 11 to grade 12 there." },
  { period: "2021–Present", title: "University of Pretoria", description: "From 2021 I attended the University of Pretoria where I am currently completing a BSc in Computer Science." },
];

export default function Home() {
  const projectArticles = getProjectArticles().slice(0, 3);
  const upcomingArticles = getUpcomingArticles().slice(0, 3);

  return (
    <>
      <Navbar activePage="home" />

      {/* ── Hero ── */}
      <section className="overflow-hidden" id="home-hero">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-5">
          {/* Hero image */}
          <div className="lg:order-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="jacaranda"
              src="/images/tim-cooper-Mqm9pG8Vpuc-unsplash.jpg"
              alt="Jacaranda trees in Pretoria"
              loading="lazy"
            />
          </div>
          {/* Hero text */}
          <div className="lg:w-1/2 xl:w-5/12 text-center lg:text-left px-6 pt-8 lg:pt-20 xl:mt-16 self-center">
            <h1 className="font-poor-story font-bold text-5xl md:text-6xl leading-tight mb-6">
              Hi there my name is Eugene, I&apos;m a software developer.
            </h1>
            <p className="font-exo-2 text-xl mb-8 text-gray-700">
              Welcome to my personal website. I&apos;m currently a computer science student at the
              University of Pretoria. I aim to use this site to show off my personal projects. Enjoy. 😁
            </p>
            <Link href="/projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-exo-2 text-lg font-medium px-6 py-3 rounded-lg transition-colors">
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Me ── */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="about-me">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full bg-gray-900 rounded-2xl"></div>
              <Image
                src="/images/about-me.jpg"
                alt="Photo of Eugene Mpande"
                width={1080}
                height={1080}
                className="relative rounded-2xl w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-poor-story font-bold text-7xl md:text-8xl mb-6">About Me</h2>
            <p className="font-exo-2 text-lg text-gray-600 leading-relaxed">
              I&apos;m Eugene, a software developer with over a year of experience building
              things for the web. I studied Computer Science at the University of Pretoria, and
              I&apos;ve been writing code professionally ever since. Outside of work I&apos;m into
              architecture, hiking, and anything that sits at the intersection of good design and
              good engineering. This site is where I document projects I&apos;ve built and things
              I&apos;m working on.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="max-w-7xl mx-auto px-6 pb-4" id="my-timeline">
        <div className="text-center mb-4">
          <h2 className="font-poor-story font-bold text-6xl md:text-7xl">My Timeline</h2>
        </div>
        <div className="timeline py-10">
          {timelineItems.map((item) => (
            <div key={item.title} className="timeline-item w-full mb-4 py-4 text-gray-900">
              <div className="timeline-img"></div>
              <div className="timeline-content bg-light-purple">
                <p className="font-exo-2 text-base">{item.period}</p>
                <h2 className="font-poor-story font-bold text-2xl">{item.title}</h2>
                <p className="font-exo-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programming Languages ── */}
      <section className="max-w-7xl mx-auto px-6 pt-6" id="programming-languages">
        <div className="text-center mb-6">
          <h2 className="font-poor-story font-bold text-6xl md:text-7xl">Programming Languages</h2>
          <p className="font-exo-2 pt-3 text-gray-600">These are programming languages I have experience in.</p>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-4">
          {programmingLanguages.map((lang) => (
            <div key={lang.label} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lang.src} alt={lang.alt} className="pro-lang-logo mx-auto" />
              <h4 className="my-3 font-poor-story text-lg font-semibold">{lang.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── Technologies & Frameworks ── */}
      <section className="max-w-7xl mx-auto px-6 py-10" id="tech-and-frameworks">
        <div className="text-center mb-6">
          <h2 className="font-poor-story font-bold text-5xl md:text-6xl">Technologies and Frameworks</h2>
          <p className="font-exo-2 pt-3 text-gray-600">These are technologies and frameworks I have experience in.</p>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-4">
          {technologies.map((tech) => (
            <div key={tech.label} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tech.src} alt={tech.alt} className="pro-lang-logo mx-auto" />
              <h4 className="my-3 font-poor-story text-lg font-semibold">{tech.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="max-w-7xl mx-auto px-6 py-10" id="projects">
        <div className="text-center mb-8">
          <h2 className="font-poor-story font-bold text-6xl md:text-7xl">Projects</h2>
          <p className="font-exo-2 pt-3 text-gray-600">These are the projects I&apos;ve completed.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Stats */}
          <div className="lg:w-1/2">
            <span className="bg-gray-900 text-white font-exo-2 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
              Project Info
            </span>
            <h2 className="font-poor-story text-2xl font-bold mt-4 mb-6">Building great projects.</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div><p className="f-sz-40 font-exo-2 m-0">3+</p><p className="font-poor-story font-bold text-sm uppercase">Languages Used</p></div>
              <div><p className="f-sz-40 font-exo-2 m-0">14+</p><p className="font-poor-story font-bold text-sm uppercase">Repositories</p></div>
              <div><p className="f-sz-40 font-exo-2 m-0">6+</p><p className="font-poor-story font-bold text-sm uppercase">Public Repositories</p></div>
              <div><p className="f-sz-40 font-exo-2 m-0">360+</p><p className="font-poor-story font-bold text-sm uppercase">Contributions in the last year</p></div>
            </div>
            <p className="font-exo-2 text-gray-600">
              Over the past year, I have undertaken a variety of projects to enhance my skills.
              These projects have ranged from building websites to tackling coding challenges.
              They have allowed me to gain experience in multiple languages and frameworks.
              Here are a few of the projects I have completed.
            </p>
          </div>
          {/* Cards */}
          <div className="lg:w-1/4 flex flex-col gap-4">
            {projectArticles.slice(0, 2).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="undeco proj-card">
                <div className="rounded-lg shadow-sm bg-light-purple overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.card_img_src} alt={article.card_img_alt} className="w-full object-cover" loading="lazy" />
                  <div className="p-3">
                    <h3 className="font-poor-story font-bold text-lg">{article.title}</h3>
                    <p className="font-exo-2 text-sm text-gray-700">{article.about}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="lg:w-1/4 flex flex-col justify-center gap-4">
            {projectArticles.slice(2, 3).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="undeco proj-card">
                <div className="rounded-lg shadow-sm bg-light-purple overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.card_img_src} alt={article.card_img_alt} className="w-full object-cover" loading="lazy" />
                  <div className="p-3">
                    <h3 className="font-poor-story font-bold text-lg">{article.title}</h3>
                    <p className="font-exo-2 text-sm text-gray-700">{article.about}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Projects ── */}
      <section className="max-w-7xl mx-auto px-6 py-10" id="upcoming-projects">
        <div className="text-center mb-8">
          <h2 className="font-poor-story font-bold text-6xl md:text-7xl">Upcoming Projects</h2>
          <p className="font-exo-2 pt-3 text-gray-600">These are the projects I&apos;ve planned for the next 12 months.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Stats */}
          <div className="lg:w-1/2">
            <span className="bg-gray-900 text-white font-exo-2 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
              Upcoming Project Info
            </span>
            <h2 className="font-poor-story text-2xl font-bold mt-4 mb-6">Building great projects.</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div><p className="f-sz-40 font-exo-2 m-0">2+</p><p className="font-poor-story font-bold text-sm uppercase">Additional Languages Used</p></div>
              <div><p className="f-sz-40 font-exo-2 m-0">7+</p><p className="font-poor-story font-bold text-sm uppercase">New Repositories</p></div>
              <div><p className="f-sz-40 font-exo-2 m-0">4+</p><p className="font-poor-story font-bold text-sm uppercase">New Public Repositories</p></div>
              <div><p className="f-sz-40 font-exo-2 m-0">365+</p><p className="font-poor-story font-bold text-sm uppercase">Additional Contributions Upcoming</p></div>
            </div>
            <p className="font-exo-2 text-gray-600">
              In the current year, I have several projects lined up to further enhance my skills.
              These projects encompass a wide range of areas including website development,
              software systems, coding challenges, and even a video game. Here are a few articles
              detailing what to expect, along with their respective timelines.
            </p>
          </div>
          {/* Cards */}
          <div className="lg:w-1/4 flex flex-col gap-4">
            {upcomingArticles.slice(0, 2).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="undeco proj-card">
                <div className="rounded-lg shadow-sm bg-light-purple overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.card_img_src} alt={article.card_img_alt} className="w-full object-cover" loading="lazy" />
                  <div className="p-3">
                    <h3 className="font-poor-story font-bold text-lg">{article.title}</h3>
                    <p className="font-exo-2 text-sm text-gray-700">{article.about}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="lg:w-1/4 flex flex-col justify-center gap-4">
            {upcomingArticles.slice(2, 3).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="undeco proj-card">
                <div className="rounded-lg shadow-sm bg-light-purple overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.card_img_src} alt={article.card_img_alt} className="w-full object-cover" loading="lazy" />
                  <div className="p-3">
                    <h3 className="font-poor-story font-bold text-lg">{article.title}</h3>
                    <p className="font-exo-2 text-sm text-gray-700">{article.about}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Me ── */}
      <section className="max-w-7xl mx-auto px-6 py-10 mb-4" id="contact-me">
        <h2 className="font-poor-story font-bold text-center text-6xl md:text-7xl mb-4">Contact Me</h2>
        <p className="font-exo-2 text-center text-xl text-gray-600 mb-6">
          Do you have any questions? Please do not hesitate to contact me.
        </p>
        <div className="text-center">
          <a href="mailto:eugenempande@gmail.com" className="font-poor-story text-2xl text-gray-900 hover:text-indigo-600 flex flex-col items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            eugenempande@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
