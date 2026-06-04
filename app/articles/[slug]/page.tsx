import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articles, getArticleBySlug } from "../../data/articles";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: `${article.title} – Eugene Mpande` };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const activePage = article.type === "project" ? "projects" : "upcoming";

  return (
    <>
      <Navbar activePage={activePage} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Banner image */}
        <div className="mb-6 hg-60-vh rounded-3xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.banner_img_src}
            alt={article.banner_img_alt}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Article content */}
          <article className="md:w-2/3">
            <h2 className="font-poor-story font-bold text-4xl mb-2">{article.title}</h2>
            <p className="font-exo-2 text-gray-500 mb-6 text-sm">
              By {article.author} | {article.date}
            </p>

            {article.paragraphs.map((para, i) => (
              <p key={i} className="font-exo-2 text-gray-800 leading-relaxed mb-4">{para}</p>
            ))}

            <h3 className="font-poor-story font-bold text-2xl mt-6 mb-3">
              Technologies and Programming Languages
            </h3>
            <dl className="font-exo-2">
              {article.tech_and_pro_langs.map((item) => (
                <div key={item.name} className="mb-2">
                  <dt className="font-bold">{item.name}</dt>
                  <dd className="text-gray-600 ml-4">{item.use}</dd>
                </div>
              ))}
            </dl>

            <nav className="mt-6">
              <a
                href={article.repo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="purple-btn"
              >
                View on GitHub
              </a>
            </nav>
          </article>

          {/* Sidebar */}
          <aside className="md:w-1/3">
            <div className="about-box rounded-lg p-4 sticky top-24">
              <h4 className="font-poor-story font-bold text-xl italic mb-2">About</h4>
              <p className="font-exo-2 text-gray-700 mb-4">{article.about}</p>
              <h4 className="font-poor-story font-bold text-xl italic mb-2">Repository</h4>
              <ul className="list-none font-exo-2">
                <li>
                  <a href={article.repo_link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
