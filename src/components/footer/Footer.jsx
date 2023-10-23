import { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__social">
          <a href="https://www.facebook.com/inext.deve/" target="_blank">
            <IoLogoFacebook />
          </a>
          <a href="https://instagram.com/inext.dev" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="https://twitter.com" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <IoLogoYoutube />
          </a>
        </div>
        {/* <div className="footer__copyright">
          <small>&copy; iNext Dev Company. All rights reserved</small>
        </div> */}
      </footer>
    );
  }
}

export default Footer;
