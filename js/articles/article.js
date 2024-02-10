const articles = [
    {
        "title":"Landing Page Project",
        "date":"09 February 2024",
        "author":"Bukhosi Eugene Mpande",
        "about":"This blog details the making of the landing page project as part of the Odin Project",
        "repo_link":"https://github.com/Gini24mp/landing-page",
        "paragraphs":[
            "To enhance my proficiency in web design, I undertook The Odin Project. As a fundamental task, I was tasked with crafting a landing page for a fictional company. Enter Narly Skates, a platform dedicated to skateboard magazine media. My landing page featured distinct sections: an About Us segment, introducing the brand and its mission; an Articles section, spotlighting captivating content tailored to the target audience; and finally, the Goals and Sign-Up sections, designed to engage users with aspirations and encourage subscriptions.",
            "The project significantly boosted my understanding of CSS. While initially tempted by libraries like Bootstrap and Tailwind, I ultimately refrained to grasp the core concepts directly. This decision proved fruitful, pushing me beyond initial comfort and solidifying my foundational knowledge. Overall, this project was an enjoyable and valuable experience, honing my design a bilities both technically and creatively."
        ],
        "tech_and_pro_langs":[
            {
                "name":"HyperText Markup Language (HTML)",
                "use":"The language was used to describe and define the content of a Web page"
            },
            {
                "name":"Cascading Style Sheets (CSS)",
                "use":"Used to describe the appearance of Web content"
            }
        ],
        "banner_img_src":"../../images/Narly-Skates-logo.png",
        "banner_img_alt":"Narly Skates"
    }
]

console.log("hello eugene")

const article_title = document.getElementById("article-title").innerHTML;

var index = -1;

for (let i = 0; i < articles.length; i++) {
    if(article_title === articles[i].title){
        index = i;
        break;
    }
}

//secodary outer container
const Sec_Out_Art_Cont = document.createElement("div");
Sec_Out_Art_Cont.className = "row g-5";
Sec_Out_Art_Cont.id = "Sec_Out_Art_Cont";


//Article outer container
const article_container = document.createElement("div");
article_container.className = "col-md-8";

Sec_Out_Art_Cont.appendChild(article_container);

//main article container
const main_article = document.createElement("article");
main_article.className = "blog-post";
main_article.id = "main-article";

article_container.appendChild(main_article);

//article heading
const article_heading = document.createElement("h2");
article_heading.innerHTML = articles[index].title;
article_heading.className = "blog-post-title";

main_article.appendChild(article_heading);

//article metadata
const article_metadata = document.createElement("p");
article_metadata.innerHTML = `By ${articles[index].author} | ${articles[index].date}`;
article_metadata.className = "blog-post-meta";

main_article.appendChild(article_metadata);

//article paragraphs

for (let i = articles[index].paragraphs.length-1; i >= 0; i--) {
    const p = document.createElement("p");
    p.innerHTML = articles[index].paragraphs[i];
    main_article.appendChild(p);
}

//tech and programming languages list header
const tech_and_pro_langs_header = document.createElement("h3");
tech_and_pro_langs_header.innerHTML = "Technologies and Programming Languages";

main_article.appendChild(tech_and_pro_langs_header);

//tech and programming languages list
const tech_and_pro_langs_list = document.createElement("dl");

for (let i = 0; i < articles[index].tech_and_pro_langs.length; i++) {
    const dt = document.createElement("dt");
    dt.innerHTML = articles[index].tech_and_pro_langs[i].name;

    const dd = document.createElement("dd");
    dd.innerHTML = articles[index].tech_and_pro_langs[i].use;

    tech_and_pro_langs_list.appendChild(dt);
    tech_and_pro_langs_list.appendChild(dd);
}

main_article.appendChild(tech_and_pro_langs_list);

//creating the view on github button
const view_on_github = document.createElement("a");
view_on_github.href = articles[index].repo_link;
view_on_github.innerHTML = "View on Github";
view_on_github.className = "btn btn-outline-primary";

//view on github nav container
const view_on_github_nav = document.createElement("nav");
view_on_github_nav.appendChild(view_on_github);
view_on_github_nav.className = "blog-pagination";
view_on_github.ariaLabel = "Pagination";

article_container.appendChild(view_on_github_nav);

// creating the about box

//About section header
const abt_header = document.createElement("h4");
abt_header.innerHTML = "About";
abt_header.className = "fst-italic";

//About section content
const abt_content = document.createElement("p");
abt_content.innerHTML = articles[index].about;
abt_content.className = "mb-0";

//line break
const br = document.createElement("br");

const repo_header = document.createElement("h4");
repo_header.innerHTML = "Repository";
repo_header.className = "fst-italic";

const github_tag = document.createElement("a");
github_tag.href = articles[index].repo_link;
github_tag.innerHTML = "Github";

const li_github = document.createElement("li");
li_github.appendChild(github_tag);

const ol_git = document.createElement("ol");
ol_git.appendChild(li_github);
ol_git.className = "list-unstyled";

//About box

const about_box = document.createElement("div");
about_box.appendChild(abt_header);
about_box.appendChild(abt_content);
about_box.appendChild(br);
about_box.appendChild(repo_header);
about_box.appendChild(ol_git);

about_box.className = "rounded p-3 mb-4 about-box";

//Outer container
const about_container = document.createElement("div");
about_container.appendChild(about_box);
about_container.className = "position-sticky tp-2";

//Secondary Outer container
const about_container_secondary = document.createElement("div");
about_container_secondary.appendChild(about_container);
about_container_secondary.className = "col-md-4";

//adding the about box to the secondary outer article container
Sec_Out_Art_Cont.appendChild(about_container_secondary);

//article banner
const article_banner_cont = document.createElement("div");
article_banner_cont.className="p-2 p-md-2 mb-2 text-white rounded hg-60-vh";

const article_banner_img = document.createElement("img");
article_banner_img.className="img-fluid w-100 h-100 rounded-5";
article_banner_img.src=articles[index].banner_img_src;
article_banner_img.alt=articles[index].banner_img_alt;

article_banner_cont.appendChild(article_banner_img);

document.getElementById("main-cont").appendChild(article_banner_cont);
document.getElementById("main-cont").appendChild(Sec_Out_Art_Cont);