import { Component } from "react";
import "./portfolio.scss";
import TNCart_Img from "../../assets/images/TN_Cart.png";
import Project_jsaGroups_Img from "../../assets/images/Project_1.jpg";
import Project_siddha_Img from "../../assets/images/Project_2.jpg";
import Project_agri_Img from "../../assets/images/Project_3.jpg";

const data = [
  {
    id: 1,
    image: TNCart_Img,
    title: "E-Commerce application using MERN Stack",
    github: "https://github.com/Bharaniarasu/E-Comm-MERN-",
    demo: "/",
    showSource: false,
    showDemo: true,
  },
  {
    id: 2,
    image: Project_jsaGroups_Img,
    title: "React application for private organization",
    github: "/",
    demo: "https://jsagroups.in",
    showSource: true,
    showDemo: false,
  },
  {
    id: 3,
    image: Project_siddha_Img,
    title: "FullStack Application for Institutions.",
    github: "/",
    demo: "https://jsasiddha.in",
    showSource: true,
    showDemo: false,
  },
  {
    id: 4,
    image: Project_agri_Img,
    title: "FullStack Application for Institutions.",
    github: "/",
    demo: "https://jsaagri.in",
    showSource: true,
    showDemo: false,
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(
            ({ id, image, title, github, demo, showDemo, showSource }) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h4 className="">{title}</h4>
                  <div className="portfolio__item-cta">
                    <button
                      className="btn btn-outline-primary button_git"
                      disabled={showSource}
                    >
                      <a
                        href={github}
                        target="_blank"
                        className=""
                      >
                        {" "}
                        Github
                      </a>
                    </button>
                    <button className="btn btn-primary button_demo" disabled={showDemo}>
                      <a
                        href={demo}
                        target="_blank"
                        className=""
                      >
                        {" "}
                        Live Demo{" "}
                      </a>
                    </button>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </section>
    );
  }
}

export default Portfolio;
