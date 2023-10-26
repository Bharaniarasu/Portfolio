import { Component } from "react";
import {
  IoLogoXing,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";
import "./footer.scss";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__social">
          <a href="https://www.facebook.com/BharaniArasu.T" target="_blank">
            <IoLogoFacebook />
          </a>
          <a
            href="https://www.instagram.com/_black_beard__b.h.a.r.a.n.i__/"
            target="_blank"
          >
            <IoLogoInstagram />
          </a>
          <a href="https://twitter.com/bharaniarasu" target="_blank">
            <IoLogoXing />
          </a>
          {/* <a href="https://www.youtube.com/" target="_blank">
            <IoLogoYoutube />
          </a> */}
        </div>
        {/* <div className="footer__copyright">
          <small>&copy; iNext Dev Company. All rights reserved</small>
        </div> */}
      </footer>
    );
  }
}

export default Footer;
