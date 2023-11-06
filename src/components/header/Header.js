import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/images/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="">Hello I'm</h5>
        <h1 className="text-uppercase text-primary">Bharani Arasu</h1>
        <div className="role">Fullstack Developer</div>
        <CTA />
        <div className="me">
          <img src={ME} alt="Bharani" />
        </div>
        <a href="#contact" className="scroll__down text-decoration-none">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
