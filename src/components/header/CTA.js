import { Component } from "react";
import CV from "../../assets/files/Barani_Arasu.pdf";
class CTA extends Component {
  render() {
    return (
      <div className="cta">
        <a className="btn btn-download btn-primary" href={CV} download>
          Download CV
        </a>
        <a className="btn btn-contact btn-outline-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    );
  }
}

export default CTA;
