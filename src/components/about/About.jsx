import { Component } from "react";
import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.scss";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>2 Years Working</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>6+ Completed Projects</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Personal Projects</h5>
                <small>15+ Personal Projects</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum recusandae sint ipsam est inventore alias
              dolorem ducimus voluptatem ipsa quidem expedita dolorum porro
              error ex amet officia, facilis assumenda!
            </p>
            <a href="#contact" className="btn btn-outline-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
