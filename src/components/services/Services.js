import { Component } from "react";
import "./services.scss";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3 className="">UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Crafting user-friendly and visually appealing digital interfaces
                for websites, web apps, and mobile apps.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Developing websites that adapt seamlessly to various screen
                sizes, including desktops, tablets, and smartphones.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Tailored UI design for e-commerce sites, optimizing product
                listings, cart design, and the checkout process.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Crafting custom icons and buttons to enhance navigation and user
                interaction within digital interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Selecting fonts and color schemes aligned with the brand and
                optimized for readability and aesthetics.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Developing design systems and style guides for consistent
                branding across digital platforms.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Transforming existing UIs to improve visual appeal, usability,
                and alignment with modern design trends.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Tailored UI design services designed to be efficient and
                cost-effective for startup companies.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building tailor-made web applications using the MERN stack to
                meet your clients' specific business needs and requirements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing and developing e-commerce platforms with features such
                as product listings, shopping carts, and payment processing for
                online businesses.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating RESTful APIs using Node.js and Express.js to enable
                data retrieval, integration, and interaction with other systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Crafting dynamic and user-friendly front-end interfaces using
                React for an engaging user experience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building robust and secure server-side applications with Node.js
                and Express.js, including authentication and authorization
                systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementing secure user authentication and authorization
                systems, such as OAuth, JWT, or other identity management
                solutions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Offering ongoing maintenance, updates, and support services to
                keep MERN applications running smoothly and securely.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Assisting clients in migrating their existing web applications
                to the MERN stack or upgrading current MERN applications to
                newer versions.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Social Media Marketing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating a customized social media strategy tailored to your
                clients' business goals, target audience, and industry.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Crafting engaging and relevant content, including posts, images,
                videos, and stories, to keep social media profiles active and
                informative.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Managing and maintaining social media profiles on platforms such
                as Facebook, Twitter, Instagram, and more.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Running paid social media ad campaigns to reach a broader
                audience and achieve specific marketing objectives.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Tracking key performance metrics, analyzing data, and providing
                regular reports to assess the effectiveness of social media
                efforts.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Monitoring online conversations to understand customer
                sentiment, gather insights, and manage reputation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating and configuring Google Ads campaigns, including search,
                display, video, and shopping ads.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting comprehensive keyword research and applying advanced
                targeting strategies to reach the right audience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Fine-tuning ad targeting based on location, demographics, and
                user behavior.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
