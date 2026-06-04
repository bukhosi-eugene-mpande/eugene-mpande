import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Link from "next/link";
import { getUpcomingArticles } from "../data/articles";
import { basePath } from "../utils/basePath";

const carouselSlides = [
  { imageSrc: "/images/article-banner-images/sigmund-4UGmm3WRUoQ-unsplash-projects.jpg", imageAlt: "Upcoming projects banner", caption: "Upcoming Projects" },
  { imageSrc: "/images/article-banner-images/grape-quest-banner.jpg", imageAlt: "Grape Quest", caption: "Grape Quest Project" },
  { imageSrc: "/images/article-banner-images/movie-atlas-banner.jpg", imageAlt: "Movie Atlas", caption: "Movie Atlas Project" },
  { imageSrc: "/images/article-banner-images/advent-banner.jpg", imageAlt: "Advent of Code", caption: "Advent Of Code Project" },
];

export default function UpcomingPage() {
  const upcomingProjects = getUpcomingArticles();

  return (
    <>
      <Navbar activePage="upcoming" />

      <Carousel slides={carouselSlides} />

      <div className="text-center py-6">
        <h2 className="font-poor-story font-bold text-6xl mb-2">Upcoming Projects</h2>
        <p className="font-exo-2 text-lg text-gray-600">
          These are some of the projects I plan to complete during the course of the year.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingProjects.map((project) => (
            <div key={project.slug} className="text-center py-2 pb-4">
              <div className="p-2 rounded-3xl bg-light-purple">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}${project.card_img_src}`}
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
