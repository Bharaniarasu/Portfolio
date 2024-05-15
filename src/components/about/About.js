import { Component } from "react";
import cartoon_img from "../../assets/images/dev-cartoon.png";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.scss";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>
        About<span className="text-warning"> Me</span>
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={cartoon_img} alt="me" /> */}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3 Years Working</small>
            </article>
            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Personal Projects</h5>
              <small>20+ Personal Projects</small>
            </article>
          </div>
          <p className="text-justify">
            Experienced MERN Stack Developer with 2.8 years of experience in
            crafting innovative web solutions. Actively pursuing a role to apply
            my expertise in designing, developing, and maintaining web
            applications. Dedicated to delivering high-quality code and
            exceptional user experiences to support the success of
            forward-thinking enterprises.
          </p>
          <a href="#contact" className="btn btn-outline-warning">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
