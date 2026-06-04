import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Link from "next/link";
import { getProjectArticles } from "../data/articles";

const carouselSlides = [
  { imageSrc: "/images/article-banner-images/sigmund-4UGmm3WRUoQ-unsplash-projects.jpg", imageAlt: "Projects banner", caption: "Projects" },
  { imageSrc: "/images/article-banner-images/library.jpg", imageAlt: "Library", caption: "School Website Project" },
  { imageSrc: "/images/article-banner-images/pexels-thirdman-8926558-banner.jpg", imageAlt: "Rock Paper Scissors", caption: "Rock Paper Scissors Project" },
  { imageSrc: "/images/article-banner-images/sketch-banner.png", imageAlt: "Etch A Sketch", caption: "Etch A Sketch Project" },
  { imageSrc: "/images/article-banner-images/narly-skates-banner.png", imageAlt: "Landing Page", caption: "Landing Page Project" },
  { imageSrc: "/images/article-banner-images/odin-recipes-banner.png", imageAlt: "Odin Recipes", caption: "Odin Recipes Project" },
  { imageSrc: "/images/article-banner-images/kos-banner.png", imageAlt: "Kitchen of Secrets", caption: "Kitchen of Secrets Project" },
];

export default function ProjectsPage() {
  const projects = getProjectArticles();

  return (
    <>
      <Navbar activePage="projects" />

      <Carousel slides={carouselSlides} />

      <div className="text-center py-6">
        <h2 className="font-poor-story font-bold text-6xl mb-2">Projects</h2>
        <p className="font-exo-2 text-lg text-gray-600">These are some of the projects I have completed.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="text-center py-2 pb-4">
              <div className="p-2 rounded-3xl bg-light-purple">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.card_img_src}
                  alt={project.card_img_alt}
                  className="w-full rounded-t-3xl object-cover max-h-48"
                />
                <h5 className="my-2 font-poor-story font-bold text-lg">{project.title}</h5>
                <p className="font-exo-2 text-sm text-gray-700 px-2">{project.about}</p>
                <Link href={`/articles/${project.slug}`} className="purple-btn mb-2">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
