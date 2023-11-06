import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/bharaniarasu/"
        className=""
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/bharaniarasu" className="" target="_blank">
        <FaGithub />
      </a>
      <div href="/" className="text-primary">
        <FiDribbble className="" />
      </div>
    </div>
  );
};
export default HeaderSocials;
