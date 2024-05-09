import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials text-warning">
      <a
        href="https://www.linkedin.com/in/bharaniarasu/"
        className=" text-white"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/bharaniarasu"
        className=" text-white"
        target="_blank"
      >
        <FaGithub />
      </a>
      <div href="/" className="text-white">
        <FiDribbble className="" />
      </div>
    </div>
  );
};
export default HeaderSocials;
