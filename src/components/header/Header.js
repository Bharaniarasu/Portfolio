import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/images/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="fs-3 ">
          Hello <span className="text-warning">I'm</span>
        </h5>
        <h1 className="text-uppercase text-white">Bharani </h1>
        <div className="role fs-3">
          A Passionate <span className="text-warning">Fullstack Developer</span>
        </div>
        <CTA />
        {/* <div className="me">
          <img src={ME} alt="Bharani" />
        </div> */}
        <a
          href="#contact"
          className="scroll__down text-decoration-none text-warning"
        >
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
