import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a href="https://linkedin.com" className="" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com" className="" target="_blank">
          <FaGithub />
        </a>
        <a href="https://dribble.com" className="" target="_blank">
          <FiDribbble className=""/>
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
